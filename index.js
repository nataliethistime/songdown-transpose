'use strict';

var _ = require('lodash');

var FLAT_SCALE  = 'C Db D Eb E F Gb G Ab A Bb B'.split(' ');
var SHARP_SCALE = 'C C# D D# E F F# G G# A A# B'.split(' ');

// If the chord is a flat, then the flat scale is used and vice versa.
function getScale(chord) {
  if (chord.length > 1) {
    if (chord.charAt(1) === '#') {
      return SHARP_SCALE;
    } else if (chord.charAt(1) === 'b') {
      return FLAT_SCALE;
    }
  }
  return SHARP_SCALE;
}

function getRoot(chord) {
  var root = chord.charAt(0);
  var char = chord.charAt(1);

  if (_.includes(['#', 'b'], char)) {
    return root + char;
  } else {
    return root;
  }
}

function transposeSplitChord(chord, increment) {
  return _.map(chord.split('/'), function(part) {
    return transpose(part, increment);
  }).join('/');
}

function transpose(chord, increment) {
  if (typeof chord !== 'string' || typeof increment !== 'number') {
    return undefined;
  }

  if (chord.indexOf('/') > -1) {
    return transposeSplitChord(chord);
  }

  var scale = getScale(chord);
  var root = getRoot(chord);

  var index = scale.indexOf(root);
  if (index === -1) {
    return undefined;
  }

  var newIndex = (index + increment + scale.length) % scale.length;
  return scale[newIndex] + chord.substring(root.length);
}

module.exports = transpose;
