'use strict';

var _ = require('lodash');

// This method is based mostly off of this SO answer http://stackoverflow.com/a/7936871.
function transpose(chord, increment) {
  if (typeof chord !== 'string' || typeof increment !== 'number') {
    return undefined;
  }

  var splitted = chord.split('/');
  if (splitted.length > 1) {
    return _.map(splitted, function(chordPart) {
      return transpose(chordPart, increment);
    }).join('/');
  }

  var scale;
  var flatScale =          'C Db D Eb E F Gb G Ab A Bb B'.split(' ');
  var sharpScale = scale = 'C C# D D# E F F# G G# A A# B'.split(' ');
  var root = chord.charAt(0);

  if (chord.length > 1) {
    // If the chord is a flat, then the flat scale is used and vice versa.
    if (chord.charAt(1) === '#') {
      root += '#';
      scale = sharpScale;
    } else if (chord.charAt(1) === 'b') {
      root += 'b';
      scale = flatScale;
    }
  }

  var index = scale.indexOf(root);
  if (index === -1) {
    return undefined;
  }

  var newIndex = (index + increment + scale.length) % scale.length;
  return scale[newIndex] + chord.substring(root.length);
};

module.exports = transpose;
