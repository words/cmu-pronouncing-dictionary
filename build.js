var fs = require('fs')
var words = {}

String(fs.readFileSync('cmudict-0.7b.txt'))
  .split('\n')
  .filter(function(line) {
    return line.charAt(0).match(/[a-z]/i)
  })
  .forEach(function(line) {
    var parts = line.split('  ')

    if (parts.length === 2) {
      words[parts[0].toLowerCase()] = parts[1]
    }
  })

fs.writeFileSync('index.json', JSON.stringify(words, null, 2) + '\n')
