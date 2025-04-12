<h1 align="center"> <code>regex-simple-checks</code> </h1>

 Common regex checks that you can use in the JavaScript world without looking for them on Google!


### Features:

* Some common regex checks that we all need to do sometimes. :blush: 
* Call the functions as per your need and a boolean value is returned. 
* Light weight package.
* Many useful functions in the package.



### How to install:
```npm i @gurjinder7/regex-simple-checks```

### How to use:

* Import the package into your application as usual
  * ```import {containsNoDigit} from '@gurjinder7/regex-simple-checks'```
* Checking functions that return boolean:
  * ```containsAnyDigits(pattern)``` - returns `true` is the pattern contains a digit
  * ```containsAnyNonWordCharacter(pattern)``` - returns `true` if the pattern contains any non word character.
    * This is a broad search for symbols and includes whitespace as well.
  * ```containsNoDigit(pattern)``` - returns `true` if pattern contains only letters
  * ```containsNoSymbol(pattern)``` - returns `true` if patterns has no symbol
    * Can be used for alphanumeric pattern or only number and only digits patterns
  * ```containsAnySymbol(pattern)``` - returns `true` if one of the following symbol is there in the pattern
    * ```~`!@#$%^&*()_-+=|\}{]["':;<,>.?/```
  * ```containsThisSymbol(pattern, symbol)``` - returns `true` if the pattern contains the symbol.
    * `containsThisSymbol("qwe%asd","%")` - returns `true`
  * ```containsThisOrThatSymbol(pattern, symbol1, symbol2)``` - returns `true` if the pattern contains either of the symbols
    * `containsThisOrThatSymbold("jhkgjh&kKJh","@","&") - returns `true`
  * ```startsWithADigitAndEndsWithALetter(pattern)``` - returns `true` if the patterns starts and ends with one or more than one digit.
    * **pattern** : `digits-letters`
    * Eg: `12asdlkaskd`,`2asda` etc.
  * ```startsWithALetterAndEndsWithADigit(pattern)``` - returns `true` if the pattern starts with a letter and ends with a digit.
    * one or more than one letter and one or more than one digit.
    * **pattern** : `letters-digits`
    * Eg: `aada112`,`a2323`,`asda3` 
  * ```startsWithADigitAndEndsWithADigit(pattern)``` - returns `true` if the pattern start with a digit and ends with a digit.
    * one or more than one digit on both ends.
    * **pattern** : `digits-letters-digits`
    * Eg: `2asde2`,`23asdssad12`
  * ```startsWithALetterAndEndsWithALetter(pattern)``` - returns `true` if the pattern start and ends with one or more letter.
    * **pattern** : `letters-digits-letters` 
    * Eg; `asd332asd`, `a32423432a`
  
* Match function that returns index:
  * ```firstDigitMatchIndex(pattern)```- returns index of first match of the **digit** in the pattern, otherwise `-1`
  * ```firstNonWordMatchIndex(pattern)```- returns index of first match of the **non-word** in the pattern, otherwise `-1`
  * ```firstWhiteSpaceMatchIndex(pattern)```- returns index of first match of the **white space** in the pattern, otherwise `-1`
  * ```firstSymbolMatchIndex(pattern,  symbol)```- returns index of first match of the **symbol argument** in the pattern, otherwise `-1`


#### Note: make sure to send the argument(s) as needed otherwise regex passes the test on empty values and returns `true`.

