/* globals describe, it */

const words = require('..')
const expect = require('code').expect

describe('cmu-pronouncing-dictionary', function () {
  it('is an object', function () {
    expect(words).to.be.an.object()
  })

  it('has lowercase words as keys', function () {
    expect(words.fun).to.exist()
    expect(words.monkey).to.exist()
    expect(words.perilous).to.exist()
  })

  it('has arpabet transcriptions as values', function () {
    expect(words.bought).to.equal('B AA1 T')
  })

  it('contains over 130,000 words', function () {
    expect(Object.keys(words).length).to.be.above(130000)
  })
})
