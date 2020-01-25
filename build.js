var fs = require('fs')
var https = require('https')
var concat = require('concat-stream')
var bail = require('bail')

var endpoint =
  'https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict'

https.request(endpoint, onrequest).end()

function onrequest(res) {
  res.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var words = {}

  String(buf)
    .split('\n')
    .forEach(d => {
      var space = d.indexOf(' ')

      if (space !== -1) {
        words[d.slice(0, space)] = d.slice(space + 1)
      }
    })

  fs.writeFile('index.json', JSON.stringify(words, null, 2) + '\n', bail)
}
