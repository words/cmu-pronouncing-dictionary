import {writeFile} from 'node:fs'
import {request} from 'node:https'
import concat from 'concat-stream'
import {bail} from 'bail'

const endpoint =
  'https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict'

request(endpoint, onrequest).end()

/**
 *
 * @param {import("http").IncomingMessage} response
 */
function onrequest(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 *
 * @param {Buffer} buffer
 */
function onconcat(buffer) {
  const words = {}

  for (const d of String(buffer).split('\n')) {
    const space = d.indexOf(' ')

    if (space !== -1) {
      words[d.slice(0, space)] = d.slice(space + 1)
    }
  }

  const wordsJson = JSON.stringify(words, null, 2)

  writeFile(
    'index.js',
    '/** @type {{ [word: string]: string }} */\nexport const dictionary = ' +
      wordsJson +
      '\n',
    bail
  )

  writeFile(
    'index.cjs',
    'const dictionary = ' +
      wordsJson +
      '\n/** @type {{ [word: string]: string }} */\nmodule.exports = {dictionary}',
    bail
  )
}
