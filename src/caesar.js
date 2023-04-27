// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  // Helper function to shift the values of the alphabet according to the shift parameter
  const produceAlteredAlphabet = (shift = 0) => {
    // Starts with the standard alphabet as an object with matching key:value pairs
    const alteredAlphabet = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'}
    // Extracts the values into an array
    let shiftedLetters = Object.values(alteredAlphabet)
    // Logic to determine right shift or left shift. Positive is right. Negative is left.
    if (shift > 0) {
      while (shift > 0) {
        // Moves the given number of letters from the front of the alphabet to the back.
        const removed = shiftedLetters.shift()
        shiftedLetters.push(removed)
        shift--
      }
    }
    if (shift < 0) {
      while (shift < 0) {
        // Moves the given number of letters from the back of the alphabet to the front.
        const removed = shiftedLetters.pop()
        shiftedLetters.unshift(removed)
        shift++
      }
    }
    // Loops back through the keys and assigns them the shifted letter as their value
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
