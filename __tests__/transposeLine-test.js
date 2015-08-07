'use strict';

/* globals jest, it, describe, expect */

jest.dontMock('../transpose');

describe('transposeLine', function() {
  it('should handle bad input', function() {
    var transposeLine = require('../transpose').transposeLine;

    // TODO: there should be more added in here to make sure things are right.
    expect(transposeLine(undefined, 10)).toBe(undefined);
  });

  it('should transpose a line', function() {
    var transposeLine = require('../transpose').transposeLine;

    expect(transposeLine('A A A', 2)).toBe('B B B');
    expect(transposeLine('A  A  A', 2)).toBe('B  B  B');
    expect(transposeLine('A   A   A', 2)).toBe('B   B   B');
    expect(transposeLine('A    A    A', 2)).toBe('B    B    B');
    expect(transposeLine('    A    A    A', 2)).toBe('    B    B    B');
  });

  it('should transpose a line with brackets in it', function() {
    var transposeLine = require('../transpose').transposeLine;

    expect(transposeLine('A (A A)', 2)).toBe('B (B B)');
    expect(transposeLine('A ( A A)', 2)).toBe('B ( B B)');
    expect(transposeLine('A ( A A )', 2)).toBe('B ( B B )');
    expect(transposeLine('A (A    A)', 2)).toBe('B (B    B)');
  });
});
