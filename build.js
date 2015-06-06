const fs = require('fs')
var words = {}

fs.readFileSync('cmudict-0.7b.txt', 'utf8')
  .split('\n')
  // .slice(0,150)
  .filter(function (line) {
    return line.charAt(0).match(/[a-z]/i)
  })
  .forEach(function (line) {
    // var [a,b] = line.split("  ")
    var parts = line.split('  ')
    if (parts.length === 2) {
      var word = parts[0].toLowerCase()
      var transcription = parts[1]
      words[word] = transcription
    }
  })

process.stdout.write(JSON.stringify(words, null, 2))
