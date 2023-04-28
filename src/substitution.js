const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // Helper function to change the values of the alphabet according to the given alphabet
  const produceNewAlphabet = (alphabet = '') => {
    // Starts with the standard alphabet as an object with matching key:value pairs
    const newAlphabet = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'}
    // Splits the substitute alphabet into an array
    let subAlphabet = alphabet.split('')
    // Loops back through the keys and assigns them the substitue character as their value
    let i = 0
    for (key in newAlphabet) {
      const subCharacter = subAlphabet[i]
      newAlphabet[key] = subCharacter
      i++
    }
    // Returns the new alphabet object
    return newAlphabet
  }

  // Helper function that encodes a message with a given aplhabet
  const encoder = (input = '', alphabet = {}) => {
  // Message split into an array
  const message = input.toLowerCase().split('')
  // Loops through each element in the array and the alphabet
    for (let i = 0; i < message.length; i++) {
      const character = message[i]
      for (key in alphabet) {
        const letter = alphabet[key]
        // When the array matches the alphabet, the array is updated with the new "letter".
        if (key === character) message[i] = letter
      }
    }
    // Returns the array rejoined into a string
    return message.join('')
  }

  // Helper function that decodes a message with a given alphabet
  const decoder = (input = '', alphabet = {}) => {
  // Message is split into an array
  const message = input.toLowerCase().split('')
  // Loops through the array and the alphabet
    for (let i = 0; i < message.length; i++) {
      const character = message[i]
      for (key in alphabet) {
        const letter = alphabet[key]
        // When the "letter" matches the alphabet, it is replaced via the alphabet
        if (letter === character) message[i] = key
      }
    }
    // Returns the array rejoined into a string
    return message.join('')
  }

  // Helper function to check the given alphabet for duplicate characters.
  const hasMultiples = (alphabet = '') => {
    // An array to hold characters as they are encountered
    const characterRepository = []
    // Looping through the string
    for (character of alphabet) {
      // If the character is in the collecting array, returns true
      if (characterRepository.includes(character)) return true
      // Adds the character to the array
      characterRepository.push(character)
    }
    // Returns false if the loop finishes without any duplicates
    return false
  }

  const substitution = (input = '', alphabet = '', encode = true) => {
    // Returns false if an unusable input or alphabet is given
    if (alphabet.length !== 26 || input.length === 0) return false
    // Checks for duplicates via helper function
    if (hasMultiples(alphabet)) return false
    // Subbed alphabet object from helper function
    const newAlphabet = produceNewAlphabet(alphabet)
    // If set to encode, encodes the input via helper function
    if (encode === true) return encoder(input, newAlphabet)
    // If set to decode, decodes the input via helper function
    if (encode === false) return decoder(input, newAlphabet)
  }

  return {
    substitution,
    produceNewAlphabet, 
    encoder, 
    decoder, 
    hasMultiples, 
  }
})()

module.exports = { 
  substitution: substitutionModule.substitution, 
  produceNewAlphabet: substitutionModule.produceNewAlphabet, 
  encoder: substitutionModule.encoder, 
  decoder: substitutionModule.decoder, 
  hasMultiples: substitutionModule.hasMultiples, 
  }
