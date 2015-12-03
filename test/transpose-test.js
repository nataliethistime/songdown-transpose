'use strict'

/* global describe */
/* global it */

let expect = require('chai').expect

var transpose = require('../index').transpose

describe('transpose', () => {
  it('should be a function', () => {
    expect(transpose).to.be.a('function')
  })

  it('should handle weird input', () => {
    expect(transpose(null, 5)).to.be.a('undefined')
    expect(transpose(undefined, 5)).to.be.a('undefined')
    expect(transpose(666, 5)).to.be.a('undefined')
    expect(transpose('illuminati', 5)).to.be.a('undefined')

    expect(transpose('C', null)).to.equal('C')
    expect(transpose('C', undefined)).to.equal('C')
    expect(transpose('C', 'illuminati')).to.equal('C')
  })

  it('should transpose up a full tone', () => {
    expect(transpose('C', 2)).to.equal('D')
    expect(transpose('C#', 2)).to.equal('D#')
    expect(transpose('D', 2)).to.equal('E')
    expect(transpose('D#', 2)).to.equal('F')
    expect(transpose('E', 2)).to.equal('F#')
    expect(transpose('F', 2)).to.equal('G')
    expect(transpose('F#', 2)).to.equal('G#')
    expect(transpose('G', 2)).to.equal('A')
    expect(transpose('G#', 2)).to.equal('A#')
    expect(transpose('A', 2)).to.equal('B')
    expect(transpose('A#', 2)).to.equal('C')
    expect(transpose('B', 2)).to.equal('C#')

    expect(transpose('Db', 2)).to.equal('Eb')
    expect(transpose('Eb', 2)).to.equal('F')
    expect(transpose('Gb', 2)).to.equal('Ab')
    expect(transpose('Ab', 2)).to.equal('Bb')
    expect(transpose('Bb', 2)).to.equal('C')
  })

  it('should transpose up a semitone', () => {
    expect(transpose('C', 1)).to.equal('C#')
    expect(transpose('C#', 1)).to.equal('D')
    expect(transpose('D', 1)).to.equal('D#')
    expect(transpose('D#', 1)).to.equal('E')
    expect(transpose('E', 1)).to.equal('F')
    expect(transpose('F', 1)).to.equal('F#')
    expect(transpose('F#', 1)).to.equal('G')
    expect(transpose('G', 1)).to.equal('G#')
    expect(transpose('G#', 1)).to.equal('A')
    expect(transpose('A', 1)).to.equal('A#')
    expect(transpose('A#', 1)).to.equal('B')
    expect(transpose('B', 1)).to.equal('C')

    expect(transpose('Db', 1)).to.equal('D')
    expect(transpose('Eb', 1)).to.equal('E')
    expect(transpose('Gb', 1)).to.equal('G')
    expect(transpose('Ab', 1)).to.equal('A')
    expect(transpose('Bb', 1)).to.equal('B')
  })

  it('should transpose down a full tone', () => {
    expect(transpose('C', -2)).to.equal('A#')
    expect(transpose('C#', -2)).to.equal('B')
    expect(transpose('D', -2)).to.equal('C')
    expect(transpose('D#', -2)).to.equal('C#')
    expect(transpose('E', -2)).to.equal('D')
    expect(transpose('F', -2)).to.equal('D#')
    expect(transpose('F#', -2)).to.equal('E')
    expect(transpose('G', -2)).to.equal('F')
    expect(transpose('G#', -2)).to.equal('F#')
    expect(transpose('A', -2)).to.equal('G')
    expect(transpose('A#', -2)).to.equal('G#')
    expect(transpose('B', -2)).to.equal('A')

    expect(transpose('Db', -2)).to.equal('B')
    expect(transpose('Eb', -2)).to.equal('Db')
    expect(transpose('Gb', -2)).to.equal('E')
    expect(transpose('Ab', -2)).to.equal('Gb')
    expect(transpose('Bb', -2)).to.equal('Ab')
  })

  it('should transpose down a semitone', () => {
    expect(transpose('C', -1)).to.equal('B')
    expect(transpose('C#', -1)).to.equal('C')
    expect(transpose('D', -1)).to.equal('C#')
    expect(transpose('D#', -1)).to.equal('D')
    expect(transpose('E', -1)).to.equal('D#')
    expect(transpose('F', -1)).to.equal('E')
    expect(transpose('F#', -1)).to.equal('F')
    expect(transpose('G', -1)).to.equal('F#')
    expect(transpose('G#', -1)).to.equal('G')
    expect(transpose('A', -1)).to.equal('G#')
    expect(transpose('A#', -1)).to.equal('A')
    expect(transpose('B', -1)).to.equal('A#')

    expect(transpose('Db', -1)).to.equal('C')
    expect(transpose('Eb', -1)).to.equal('D')
    expect(transpose('Gb', -1)).to.equal('F')
    expect(transpose('Ab', -1)).to.equal('G')
    expect(transpose('Bb', -1)).to.equal('A')
  })

  it('should transpose an octave', () => {
    expect(transpose('C', 12)).to.equal('C')
    expect(transpose('C#', 12)).to.equal('C#')
    expect(transpose('D', 12)).to.equal('D')
    expect(transpose('D#', 12)).to.equal('D#')
    expect(transpose('E', 12)).to.equal('E')
    expect(transpose('F', 12)).to.equal('F')
    expect(transpose('F#', 12)).to.equal('F#')
    expect(transpose('G', 12)).to.equal('G')
    expect(transpose('G#', 12)).to.equal('G#')
    expect(transpose('A', 12)).to.equal('A')
    expect(transpose('A#', 12)).to.equal('A#')
    expect(transpose('B', 12)).to.equal('B')
    expect(transpose('C', 12)).to.equal('C')

    expect(transpose('Db', 12)).to.equal('Db')
    expect(transpose('Eb', 12)).to.equal('Eb')
    expect(transpose('Gb', 12)).to.equal('Gb')
    expect(transpose('Ab', 12)).to.equal('Ab')
    expect(transpose('Bb', 12)).to.equal('Bb')

    expect(transpose('C', 24)).to.equal('C')
    expect(transpose('C#', 24)).to.equal('C#')
    expect(transpose('D', 24)).to.equal('D')
    expect(transpose('D#', 24)).to.equal('D#')
    expect(transpose('E', 24)).to.equal('E')
    expect(transpose('F', 24)).to.equal('F')
    expect(transpose('F#', 24)).to.equal('F#')
    expect(transpose('G', 24)).to.equal('G')
    expect(transpose('G#', 24)).to.equal('G#')
    expect(transpose('A', 24)).to.equal('A')
    expect(transpose('A#', 24)).to.equal('A#')
    expect(transpose('B', 24)).to.equal('B')
    expect(transpose('C', 24)).to.equal('C')

    expect(transpose('Db', 24)).to.equal('Db')
    expect(transpose('Eb', 24)).to.equal('Eb')
    expect(transpose('Gb', 24)).to.equal('Gb')
    expect(transpose('Ab', 24)).to.equal('Ab')
    expect(transpose('Bb', 24)).to.equal('Bb')
  })

  it('should transpose split chords', () => {
    expect(transpose('C/E', 2)).to.equal('D/F#')
    expect(transpose('D/F#', 2)).to.equal('E/G#')
    expect(transpose('E/G#', 1)).to.equal('F/A')
    expect(transpose('F/A', 2)).to.equal('G/B')
    expect(transpose('G/B', 2)).to.equal('A/C#')
    expect(transpose('A/C#', 2)).to.equal('B/D#')
    expect(transpose('B/D#', 2)).to.equal('C#/F')
  })
})
