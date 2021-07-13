import test from 'tape'
import {dictionary as cmu} from './index.js'

test('cmu-pronouncing-dictionary', (t) => {
  t.ok(typeof cmu === 'object', 'should be an object')

  t.ok(typeof cmu.fun === 'string', 'there should be a fun,')
  t.ok(typeof cmu.perilous === 'string', 'perilous,')
  t.ok(typeof cmu.monkey === 'string', 'monkey.')
  t.equal(cmu.bought, 'B AA1 T', 'should have arpabet transcriptions')
  t.ok(Object.keys(cmu).length > 130_000, 'should have loads of words')

  t.end()
})
