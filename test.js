var test = require('tape')
var cmu = require('.')

test('cmu-pronouncing-dictionary', function(t) {
  t.ok(typeof cmu === 'object', 'should be an object')

  t.ok(typeof cmu.fun === 'string', 'there should be a fun,')
  t.ok(typeof cmu.perilous === 'string', 'perilous,')
  t.ok(typeof cmu.monkey === 'string', 'monkey.')
  t.equal(cmu.bought, 'B AA1 T', 'should have arpabet transcriptions')
  t.ok(Object.keys(cmu).length > 130000, 'should have loads of words')

  t.end()
})
