const expect = require('chai').expect
const polybiusModule = require('../src/polybius')
const polybius = polybiusModule.polybius
const encoder = polybiusModule.encoder

const unencodedInput = 'Three polygrams'
const encodedOutput = '4432245151 534313452224112334'
const encodedInput = '4432245151 534313452224112334'
const decodedOutput = 'three polygrams'

describe('polybius', () => {
    it('should return an encoded message if encode is set to true', () => {
        const actual = polybius(unencodedInput, true)
        const expected = encodedOutput
        expect(actual).to.equal(expected)
    })
})

describe('encoder', () => {
    it('should return an encoded message', () => {
        const actual = encoder(unencodedInput)
        const expected = encodedOutput
        expect(actual).to.equal(expected)
    })
})