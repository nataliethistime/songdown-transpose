'use strict'

/* global describe */
/* global it */

let expect = require('chai').expect

var transposeLine = require('../index').transposeLine

describe('transposeLine', () => {
  it('should handle bad input', () => {
    // TODO: there should be more added in here to make sure things are right.
    expect(transposeLine(undefined, 10)).to.equal(undefined)
  })

  it('should transpose a line', () => {
    expect(transposeLine('A A A', 2)).to.equal('B B B')
    expect(transposeLine('A  A  A', 2)).to.equal('B  B  B')
    expect(transposeLine('A   A   A', 2)).to.equal('B   B   B')
    expect(transposeLine('A    A    A', 2)).to.equal('B    B    B')
    expect(transposeLine('    A    A    A', 2)).to.equal('    B    B    B')
  })

  it('should transpose a line with brackets in it', () => {
    expect(transposeLine('A (A A)', 2)).to.equal('B (B B)')
    expect(transposeLine('A ( A A)', 2)).to.equal('B ( B B)')
    expect(transposeLine('A ( A A )', 2)).to.equal('B ( B B )')
    expect(transposeLine('A (A    A)', 2)).to.equal('B (B    B)')
  })
})
