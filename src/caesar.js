// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'}

  const produceAlteredAlphabet = (shift = 0) => {
    const alteredAlphabet = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'}
    let shiftedLetters = Object.values(alteredAlphabet)
    if (shift > 0) {
      while (shift > 0) {
        const removed = shiftedLetters.shift()
        shiftedLetters.push(removed)
        shift--
      }
    }
    if (shift < 0) {
      while (shift < 0) {
        const removed = shiftedLetters.pop()
        shiftedLetters.unshift(removed)
        shift++
      }
    }
    let i = 0
    for (key in alteredAlphabet) {
      const shiftedLetter = shiftedLetters[i]
      alteredAlphabet[key] = shiftedLetter
      i++
    }
    return alteredAlphabet
  }

  const encoder = (input = '', alphabet = {}) => {
    const message = input.toLowerCase().split('')
      for (let i = 0; i < message.length; i++) {
        const character = message[i]
        for (key in alphabet) {
          const letter = alphabet[key]
          if (key === character) message[i] = letter
        }
      }
      console.log(message.join(''))
      return message.join('')
  }

  const decoder = (input = '', alphabet = {}) => {
    const message = input.toLowerCase().split('')
      for (let i = 0; i < message.length; i++) {
        const character = message[i]
        for (key in alphabet) {
          const letter = alphabet[key]
          if (letter === character) message[i] = key
        }
      }
      console.log(message.join(''))
      return message.join('')
  }

  const caesar = (input = '', shift = 0, encode = true) => {
    // Returns false if an unusable shift is given
    if (shift === 0 || shift < -25 || shift > 25) return false
    // Shifted alphabet object
    const shiftedAlphabet = produceAlteredAlphabet(shift)
    // If set to encode, replace the characters in input with the corresponding letter from the shifted alphabet
    if (encode === true) return encoder(input, shiftedAlphabet)
    if (encode === false) return decoder(input, shiftedAlphabet)
  }

  return {
    caesar,
    produceAlteredAlphabet,
    encoder,
    decoder,
  };
})();

module.exports = { 
  caesar: caesarModule.caesar,
  produceAlteredAlphabet: caesarModule.produceAlteredAlphabet,
  encoder: caesarModule.encoder,
  decoder: caesarModule.decoder,
 };
