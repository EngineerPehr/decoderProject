const expect = require('chai').expect
const substitutionModule = require('../src/substitution')
const {substitution} = substitutionModule
const {produceNewAlphabet} = substitutionModule
const {encoder} = substitutionModule
const {decoder} = substitutionModule
const {hasMultiples} = substitutionModule

const testAlphabet = 'hfoasub&32!*@^mp:.<>17dqlx'
const duplicateAlphabet = 'hfoasub&32!*@^mp:.>>17dqlx'
const testAlphaObj = {'a': 'h', 'b': 'f', 'c': 'o', 'd': 'a', 'e': 's', 'f': 'u', 'g': 'b', 'h': '&', 'i': '3', 'j': '2', 'k': '!', 'l': '*', 'm': '@', 'n': '^', 'o': 'm', 'p': 'p', 'q': ':', 'r': '.', 's': '<', 't': '>', 'u': '1', 'v': '7', 'w': 'd', 'x': 'q', 'y': 'l', 'z': 'x'}
const unencodedInput = 'Hot for Teacher'
const encodedOutput = '&m> um. >sho&s.'
const encodedInput = '&m> um. >sho&s.'
const decodedOutput = 'hot for teacher'



describe('substitution', () => {
    it('should return false if alphabet length is not exactly 26.', () => {
        const actual = substitution(unencodedInput, 0, true)
        expect(actual).to.be.false
    })
    it('should return false if input length is 0.', () => {
        const actual = substitution('', testAlphabet, true)
        expect(actual).to.be.false
    })
    it('should return false if there are duplicate characters in the given alphabet.', () => {
        const actual = substitution(unencodedInput, duplicateAlphabet, true)
        expect(actual).to.be.false
    })
    it('should return encoded message if encode is true', () => {
        const actual = substitution(unencodedInput, testAlphabet, true)
        expect(actual).to.equal(encodedOutput)
    })
    it('should return decoded message if encode is false', () => {
        const actual = substitution(encodedInput, testAlphabet, false)
        expect(actual).to.equal(decodedOutput)
    })
})

describe('produceNewAlphabet', () => {
    it('should create a new alphabet from the one given', () => {
        const actual = produceNewAlphabet(testAlphabet)
        expect(actual).to.eql(testAlphaObj)
    })
})

describe('encoder', () => {
    it('should return a message that has been encoded with the given alphabet', () => {
        const actual = encoder(unencodedInput, testAlphaObj)
        expect(actual).to.equal(encodedOutput)
    })
})

describe('decoder', () => {
    it('should return a message that has been decoded with the given alphabet', () => {
        const actual = decoder(encodedInput, testAlphaObj)
        expect(actual).to.equal(decodedOutput)
    })
})

describe('hasMultiples', () => {
    it('should return true if the given alphabet has duplicate characters', () => {
        const actual = hasMultiples(duplicateAlphabet)
        expect(actual).to.be.true
    })
    it('should return false if the given alphabet has no duplicate characters', () => {
        const actual = hasMultiples(testAlphabet)
        expect(actual).to.be.false
    })
})