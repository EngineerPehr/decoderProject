const polybiusModule = (function () {
  // The squares used for encodeing and decoding respectively
  const polybiusSquare = {'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22, 'h': 32, 'i': 42, 'j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54, 'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55}
  const decoderSquare = {11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k', 13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'}

  // Helper function to encode messages
  const encoder = (input = '') => {
    // Message split into an array
    const message = input.toLowerCase().split('')
    // Loops through each element in the array and the polybius square
      for (let i = 0; i < message.length; i++) {
        const character = message[i]
        for (key in polybiusSquare) {
          const coordinate = polybiusSquare[key]
          // When the array matches the polybius square, the array is updated with the new coordinate
          if (key === character) message[i] = coordinate
        }
      }
      // Returns the array rejoined into a string
      return message.join('')
  }

  // Helper function to decode messages
  const decoder = (input = '') => {
    // Splits the input at the spaces, effectively creating word-sized blocks of coordinates
    const splitInput = input.split(' ')
    // Loops through each block
      for (let i = 0; i < splitInput.length; i++) {
        const string = splitInput[i]
        // Splits each block into an array of coordinate pairs
        const pairs = string.split('').map((currentNum, i) => (i % 2 === 0 ? string.slice(i, i + 2) : null)).filter(Boolean);
        // Loops through each pair
        for (let j = 0; j < pairs.length; j++) {
          const pair = pairs[j]
          // Loops through the Decoder Square to find the matching coordinates
          for (key in decoderSquare) {
            const letter = decoderSquare[key]
            // When the array matches the decoder square, the coordinates are replaced with the corresponding letter
            if (key === pair) pairs[j] = letter
          }
        }
        // The block of coordinates is replaced with the newly formed word
        splitInput[i] = pairs.join('')
      }
      // The words are then joined back together, with spaces in between if needed
      return splitInput.join(' ')
  }

  const polybius = (input = '', encode = true) => {
    // Checks to see if the input is to be encoded or decoded
    if (encode === true) return encoder(input)
    if (encode === false) {
      // Checks to see if the input to be decoded is formatted properly. If it isn't, it returns false
      if (input.split(' ').join('').length % 2 != 0) return false
      return decoder(input)
    }
  }

  return {
    polybius,
    encoder,
    decoder
  }
})()

module.exports = { 
  polybius: polybiusModule.polybius,
  encoder: polybiusModule.encoder,
  decoder: polybiusModule.decoder
 }
