'use strict';

/* globals jest, it, describe, expect */

jest.dontMock('../transpose');

describe('transpose', function() {

  it('should be a function', function() {
    var transpose = require('../transpose').transpose;

    expect(typeof transpose).toBe('function');
  });

  it('should handle weird input', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose(null, 5)).toBeUndefined();
    expect(transpose(undefined, 5)).toBeUndefined();
    expect(transpose(666, 5)).toBeUndefined();
    expect(transpose('illuminati', 5)).toBeUndefined();

    expect(transpose('C', null)).toBe('C');
    expect(transpose('C', undefined)).toBe('C');
    expect(transpose('C', 'illuminati')).toBe('C');
  });

  it('should transpose up a full tone', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose('C', 2)).toBe('D');
    expect(transpose('C#', 2)).toBe('D#');
    expect(transpose('D', 2)).toBe('E');
    expect(transpose('D#', 2)).toBe('F');
    expect(transpose('E', 2)).toBe('F#');
    expect(transpose('F', 2)).toBe('G');
    expect(transpose('F#', 2)).toBe('G#');
    expect(transpose('G', 2)).toBe('A');
    expect(transpose('G#', 2)).toBe('A#');
    expect(transpose('A', 2)).toBe('B');
    expect(transpose('A#', 2)).toBe('C');
    expect(transpose('B', 2)).toBe('C#');

    expect(transpose('Db', 2)).toBe('Eb');
    expect(transpose('Eb', 2)).toBe('F');
    expect(transpose('Gb', 2)).toBe('Ab');
    expect(transpose('Ab', 2)).toBe('Bb');
    expect(transpose('Bb', 2)).toBe('C');
  });

  it('should transpose up a semitone', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose('C', 1)).toBe('C#');
    expect(transpose('C#', 1)).toBe('D');
    expect(transpose('D', 1)).toBe('D#');
    expect(transpose('D#', 1)).toBe('E');
    expect(transpose('E', 1)).toBe('F');
    expect(transpose('F', 1)).toBe('F#');
    expect(transpose('F#', 1)).toBe('G');
    expect(transpose('G', 1)).toBe('G#');
    expect(transpose('G#', 1)).toBe('A');
    expect(transpose('A', 1)).toBe('A#');
    expect(transpose('A#', 1)).toBe('B');
    expect(transpose('B', 1)).toBe('C');

    expect(transpose('Db', 1)).toBe('D');
    expect(transpose('Eb', 1)).toBe('E');
    expect(transpose('Gb', 1)).toBe('G');
    expect(transpose('Ab', 1)).toBe('A');
    expect(transpose('Bb', 1)).toBe('B');
  });

  it('should transpose down a full tone', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose('C', -2)).toBe('A#');
    expect(transpose('C#', -2)).toBe('B');
    expect(transpose('D', -2)).toBe('C');
    expect(transpose('D#', -2)).toBe('C#');
    expect(transpose('E', -2)).toBe('D');
    expect(transpose('F', -2)).toBe('D#');
    expect(transpose('F#', -2)).toBe('E');
    expect(transpose('G', -2)).toBe('F');
    expect(transpose('G#', -2)).toBe('F#');
    expect(transpose('A', -2)).toBe('G');
    expect(transpose('A#', -2)).toBe('G#');
    expect(transpose('B', -2)).toBe('A');

    expect(transpose('Db', -2)).toBe('B');
    expect(transpose('Eb', -2)).toBe('Db');
    expect(transpose('Gb', -2)).toBe('E');
    expect(transpose('Ab', -2)).toBe('Gb');
    expect(transpose('Bb', -2)).toBe('Ab');
  });

  it('should transpose down a semitone', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose('C', -1)).toBe('B');
    expect(transpose('C#', -1)).toBe('C');
    expect(transpose('D', -1)).toBe('C#');
    expect(transpose('D#', -1)).toBe('D');
    expect(transpose('E', -1)).toBe('D#');
    expect(transpose('F', -1)).toBe('E');
    expect(transpose('F#', -1)).toBe('F');
    expect(transpose('G', -1)).toBe('F#');
    expect(transpose('G#', -1)).toBe('G');
    expect(transpose('A', -1)).toBe('G#');
    expect(transpose('A#', -1)).toBe('A');
    expect(transpose('B', -1)).toBe('A#');

    expect(transpose('Db', -1)).toBe('C');
    expect(transpose('Eb', -1)).toBe('D');
    expect(transpose('Gb', -1)).toBe('F');
    expect(transpose('Ab', -1)).toBe('G');
    expect(transpose('Bb', -1)).toBe('A');
  });

  it('should transpose an octave', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose('C', 12)).toBe('C');
    expect(transpose('C#', 12)).toBe('C#');
    expect(transpose('D', 12)).toBe('D');
    expect(transpose('D#', 12)).toBe('D#');
    expect(transpose('E', 12)).toBe('E');
    expect(transpose('F', 12)).toBe('F');
    expect(transpose('F#', 12)).toBe('F#');
    expect(transpose('G', 12)).toBe('G');
    expect(transpose('G#', 12)).toBe('G#');
    expect(transpose('A', 12)).toBe('A');
    expect(transpose('A#', 12)).toBe('A#');
    expect(transpose('B', 12)).toBe('B');
    expect(transpose('C', 12)).toBe('C');

    expect(transpose('Db', 12)).toBe('Db');
    expect(transpose('Eb', 12)).toBe('Eb');
    expect(transpose('Gb', 12)).toBe('Gb');
    expect(transpose('Ab', 12)).toBe('Ab');
    expect(transpose('Bb', 12)).toBe('Bb');

    expect(transpose('C', 24)).toBe('C');
    expect(transpose('C#', 24)).toBe('C#');
    expect(transpose('D', 24)).toBe('D');
    expect(transpose('D#', 24)).toBe('D#');
    expect(transpose('E', 24)).toBe('E');
    expect(transpose('F', 24)).toBe('F');
    expect(transpose('F#', 24)).toBe('F#');
    expect(transpose('G', 24)).toBe('G');
    expect(transpose('G#', 24)).toBe('G#');
    expect(transpose('A', 24)).toBe('A');
    expect(transpose('A#', 24)).toBe('A#');
    expect(transpose('B', 24)).toBe('B');
    expect(transpose('C', 24)).toBe('C');

    expect(transpose('Db', 24)).toBe('Db');
    expect(transpose('Eb', 24)).toBe('Eb');
    expect(transpose('Gb', 24)).toBe('Gb');
    expect(transpose('Ab', 24)).toBe('Ab');
    expect(transpose('Bb', 24)).toBe('Bb');
  });

  it('should transpose split chords', function() {
    var transpose = require('../transpose').transpose;

    expect(transpose('C/E', 2)).toBe('D/F#');
    expect(transpose('D/F#', 2)).toBe('E/G#');
    expect(transpose('E/G#', 1)).toBe('F/A');
    expect(transpose('F/A', 2)).toBe('G/B');
    expect(transpose('G/B', 2)).toBe('A/C#');
    expect(transpose('A/C#', 2)).toBe('B/D#');
    expect(transpose('B/D#', 2)).toBe('C#/F');
  });
});
