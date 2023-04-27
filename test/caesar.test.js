const caesarModule = require('../src/caesar')
const {caesar} = caesarModule
const {produceAlteredAlphabet} = caesarModule
const {encoder} = caesarModule
const {decoder} = caesarModule
const expect = require('chai').expect

const input = 'Ides of March'
const encodeOutput = 'lghv ri pdufk'
const decodeOutput = 'ides of march'
const shiftRight = {'a': 'd', 'b': 'e', 'c': 'f', 'd': 'g', 'e': 'h', 'f': 'i', 'g': 'j', 'h': 'k', 'i': 'l', 'j': 'm', 'k': 'n', 'l': 'o', 'm': 'p', 'n': 'q', 'o': 'r', 'p': 's', 'q': 't', 'r': 'u', 's': 'v', 't': 'w', 'u': 'x', 'v': 'y', 'w': 'z', 'x': 'a', 'y': 'b', 'z': 'c'}
const shiftLeft = {'a': 'x', 'b': 'y', 'c': 'z', 'd': 'a', 'e': 'b', 'f': 'c', 'g': 'd', 'h': 'e', 'i': 'f', 'j': 'g', 'k': 'h', 'l': 'i', 'm': 'j', 'n': 'k', 'o': 'l', 'p': 'm', 'q': 'n', 'r': 'o', 's': 'p', 't': 'q', 'u': 'r', 'v': 's', 'w': 't', 'x': 'u', 'y': 'v', 'z': 'w'}

describe('caesar', () => {
    it('should return false if shift is 0.', () => {
        const actual = caesar(input, 0, true)
        expect(actual).to.be.false
    })

    it('should return false if shift is greater than 25.', () => {
        const actual = caesar(input, 26, true)
        expect(actual).to.be.false
    })
    it('should return false if shift is less than -25.', () => {
        const actual = caesar(input, -26, true)
        expect(actual).to.be.false
    })
    it('should return encoded message if encode is true', () => {
        const actual = caesar(input, 3, true)
        expect(actual).to.equal(encodeOutput)
    })
    it('should return decoded message if encode is false', () => {
        const actual = caesar(encodeOutput, 3, false)
        expect(actual).to.equal(decodeOutput)
    })
})

describe('produceAlteredAlphabet', () => {
    it('should shift right when shift is greater than 0', () => {
        const actual = produceAlteredAlphabet(3)
        expect(actual).to.eql(shiftRight)
    })
    it('should shift left when shift is less than 0', () => {
        const actual = produceAlteredAlphabet(-3)
        expect(actual).to.eql(shiftLeft)
    })
})

describe('encoder', () => {
    it('should return a message that has been encoded with the given alphabet', () => {
        const actual = encoder(input, shiftRight)
        expect(actual).to.equal(encodeOutput)
    })
})

describe('decoder', () => {
    it('should return a message that has been decoded with the given alphabet', () => {
        const actual = decoder(encodeOutput, shiftRight)
        expect(actual).to.equal(decodeOutput)
    })
})
