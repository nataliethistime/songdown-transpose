'use strict';

var expect = require('chai').expect;
var transpose = require('../index');

describe('transpose', function() {

  it('should be a function', function() {
    expect(transpose).to.be.a('function');
  });

  it('should transpose up a full tone', function() {
    expect(transpose('C', 2)).to.equal('D');
  });
  it('should transpose up a semitone', function() {
    expect(transpose('C', 1)).to.equal('C#');
  });

  it('should transpose down a full tone', function() {
    expect(transpose('C', -2)).to.equal('A#');
  });
  it('should transpose down a semitone', function() {
    expect(transpose('C', -1)).to.equal('B');
  });

});
