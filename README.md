# decoder_assessment

## Caesar Module Functions

There are four functions within the Caesar Module. They are:

 - `produceAlteredAlphabet`
 - `encoder`
 - `decoder`
 - `caesar`

 The first three are helper functions that the main function `caesar` relies on.

 ### produceAlteredAlphabet

`produceAlteredAlphabet` takes an object containing the standard alphabet with the letters as matching key:value pairs. It then shifts the values a specified number of times, aka the shift value, so that the key:value pairs are no longer matching. This works with both positive and negative shift values, shifting right and left respectively.

Before:
```javascript
{'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'}
```

After - Shifted right 3 times:
```javascript
{'a': 'd', 'b': 'e', 'c': 'f', 'd': 'g', 'e': 'h', 'f': 'i', 'g': 'j', 'h': 'k', 'i': 'l', 'j': 'm', 'k': 'n', 'l': 'o', 'm': 'p', 'n': 'q', 'o': 'r', 'p': 's', 'q': 't', 'r': 'u', 's': 'v', 't': 'w', 'u': 'x', 'v': 'y', 'w': 'z', 'x': 'a', 'y': 'b', 'z': 'c'}
```

### encoder and decoder

`encoder` and `decoder` work in similar ways. They loop though a string that has been broken into an array via the `.split()` method. They then loop through an altered alphabet that has been provided by `produceAlteredAlphabet`. When the current character in the array matches the key or value respectively, that character is replaced with the corresponding value or key respectively. It then returns the array as a string via the `.join()` method.

### caesar

`caesar` is the main function that contains the helper functions. It also has logic to check that the shift parameter is within functional limits. It controls if `encoder` or `decoder` are used based on setting of the encode parameter.

## Polybius Module Functions

There are three functions within the Polybius Module. They are:

 - `encoder`
 - `decoder`
 - `polybius`

 The first two are helper functions that the main function `polybius` relies on.

 ### encoder

 `encoder` loops though a string that has been broken into an array via the `.split()` method. It then loops through the Polybius Square object. When the current letter in the array matches the key, that letter is replaced with the corresponding coordinates. It then returns the array as a string of numbers via the `.join()` method. 

 Polybius Square:
 ```javascript
 {'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22, 'h': 32, 'i': 42, 'j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54, 'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55}
 ```

### decoder

`decoder` loops though the input that has been broken into an array of strings via the `.split()` method. It then loops each string, and breaks it down into pairs of coordinates. It then loops through the Decoder Square object. When the current pair in the array matches the key, that pair is replaced with the corresponding letter, and joined into a word via `.join()`. It then replaces the string of numbers with the word in the original array. The original array is then returned as a string via the `.join()` method.

 Decoder Square:
 ```javascript
 {11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k', 13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'}
 ```

 ### polybius

 `polybius` is the main function and contains the helper functions. It also adds logic to determine if `encoder` or `decoder` should be used. If `decoder` is selected, it verifies that the input has been properly encoded by ensuring that there are an even amount of numbers within the input, ignoring spaces.

 ## Substitution Module

 There are five functions in the Substitution Module. They are:

 - `produceNewAlphabet`
 - `encoder`
 - `decoder`
 - `hasMultiples`
 - `substitution`

 The first four are helper functions that the main function `substitution` relies on.

 ### produceNewAlphabet

 `produveNewAlphabet` works in a similar maner to `produceAlteredAlphabet`. It takes an object containing the standard alphabet with the letters as matching key:value pairs. It then makes an array out of the given alphabet string. It then loops through the object, assigning new values to each key. It then returns the object with the values representing the new alphabet, while the keys remain as the standard alphabet.

Before:
 `'hfoasub&32!*@^mp:.<>17dqlx'`

After:
```javascript
{'a': 'h', 'b': 'f', 'c': 'o', 'd': 'a', 'e': 's', 'f': 'u', 'g': 'b', 'h': '&', 'i': '3', 'j': '2', 'k': '!', 'l': '*', 'm': '@', 'n': '^', 'o': 'm', 'p': 'p', 'q': ':', 'r': '.', 's': '<', 't': '>', 'u': '1', 'v': '7', 'w': 'd', 'x': 'q', 'y': 'l', 'z': 'x'}
```

 ### encoder and decoder

`encoder` and `decoder` work identically to the `encoder` and `decoder` functions in the Caesar Module. They loop though a string that has been broken into an array via the `.split()` method. They then loop through an new alphabet that has been provided by `produceNewAlphabet`. When the current character in the array matches the key or value respectively, that character is replaced with the corresponding value or key respectively. It then returns the array as a string via the `.join()` method.

### hasMultiples

`hasMultiples` loops through a given string, storing each encountered character in an array. In the each iteration, it checks if the current character is in the array of previous characters. If it is, then the loop ends and it returns true. If it finishes the loop without encountering a duplicate character, it returns false.

Returns true:
`'hfoasub&32!*@^mp:.>>17dqlx'`

Returns false:
`'hfoasub&32!*@^mp:.<>17dqlx'`

### substitution

`substitution` is the main function combining the helper functions. It also includes logic to check for valid inputs, substitution alphabets, and whether to use `encoder` or `decoder`.