'use strict';

var FLAT_SCALE  = 'C Db D Eb E F Gb G Ab A Bb B'.split(' ');
var SHARP_SCALE = 'C C# D D# E F F# G G# A A# B'.split(' ');

var getScale = function(chord) {
  if (chord.length > 1) {
    if (chord.charAt(1) === '#') {
      return SHARP_SCALE;
    } else if (chord.charAt(1) === 'b') {
      return FLAT_SCALE;
    }
  }

  // Use SHARP_SCALE by default.
  return SHARP_SCALE;
};

var getRoot = function(chord) {
  var root = chord.charAt(0);
  var accidental = chord.charAt(1);

  if (accidental === '#' || accidental === 'b') {
    return root + accidental;
  } else {
    return root;
  }
};

var transposeSplitChord = function(chord, increment) {
  var arr = chord.split('/');

  return arr.map(function(part) {
    return transpose(part, increment);
  }).join('/');
};

var transpose = function(chord, increment) {

  if (typeof chord !== 'string') {
    return undefined;
  }

  if (typeof increment !== 'number') {
    return chord;
  }

  if (chord.indexOf('/') > -1) {
    return transposeSplitChord(chord, increment);
  }

  var scale = getScale(chord);
  var root = getRoot(chord);
  var index = scale.indexOf(root);

  if (index === -1) {
    return undefined;
  }

  var newIndex = (index + increment + scale.length) % scale.length;
  return scale[newIndex] + chord.substring(root.length);
};

module.exports = transpose;
