# decoder_assessment

## Caesar Module Functions

There are four functions within the Caesar Module. They are:

 - `produceAlteredAlphabet`
 - `encoder`
 - `decoder`
 - `caesar`

 The first three are helper functions that the main function `caesar` relies on to work.

 ### produceAlteredAlphabet

`produceAlteredAlphabet` takes the an object containing the standard alphabet with the letters as matching key:value pairs. It then shifts the values a specified number of times, aka the shift value, so that the key:value pairs are no longer matching. This works with both positive and negative shift values, shifting right and left respectively.

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

