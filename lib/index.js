"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWithALetterAndEndsWithALetter = exports.startsWithALetterAndEndsWithADigit = exports.startsWithADigitAndEndsWithALetter = exports.startsWithADigitAndEndsWithADigit = exports.firstWhiteSpaceMatchIndex = exports.firstSymbolMatchIndex = exports.firstNonWordMatchIndex = exports.firstDigitMatchIndex = exports.containsThisSymbol = exports.containsThisOrThatSymbol = exports.containsNoSymbol = exports.containsAnyWhiteSpace = exports.containsAnySymbol = exports.containsAnyNonWordCharacter = exports.containOnlyLetters = exports.containAnyDigits = void 0;
/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containAnyDigits("!@#asdasd")
 * @description - Checks if the pattern contains any digit
 */
const containAnyDigits = pattern => {
  const checker = /[\d]/g;
  return checker.test(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns number - matched index or -1
 * @example - firstDigitMatchIndex("asd4asd")
 * @description - Returns the first index of the digit in the pattern OR -1 if no digit is found
 */
exports.containAnyDigits = containAnyDigits;
const firstDigitMatchIndex = pattern => {
  const checker = /[\d]/g;
  const checkArray = checker.exec(pattern);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containsAnyNonWordCharacter("123as3 asd")
 * @description - checks if pattern contains any symbols (includes white space)
 */
exports.firstDigitMatchIndex = firstDigitMatchIndex;
const containsAnyNonWordCharacter = pattern => {
  const checker = /\W/g;
  return checker.test(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns number - matched index or -1
 * @example - firstNonWordMatchIndex("asdasd dsa")
 * @description - Returns the first index of the non word symbol in the pattern OR -1 if none is found
 */
exports.containsAnyNonWordCharacter = containsAnyNonWordCharacter;
const firstNonWordMatchIndex = pattern => {
  const checker = /\W/g;
  const checkArray = checker.exec(pattern);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containOnlyLetters("as$dasd")
 * @description - checks if pattern contains only letters and No digit or a special character
 */
exports.firstNonWordMatchIndex = firstNonWordMatchIndex;
const containOnlyLetters = pattern => {
  const checker = /\b[a-zA-Z]{1,}\b/g;
  return checker.test(pattern) && !containsAnySymbol(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containsAnyWhiteSpace("sdas sd")
 * @description - checks if pattern contains any white space
 */
exports.containOnlyLetters = containOnlyLetters;
const containsAnyWhiteSpace = pattern => {
  const checker = /\s/g;
  return checker.test(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns number - matched index or -1
 * @example - firstWhiteSpaceMatchIndex("asd asd")
 * @description - Returns first matched index of a white space in the pattern or else -1
 */
exports.containsAnyWhiteSpace = containsAnyWhiteSpace;
const firstWhiteSpaceMatchIndex = pattern => {
  const checker = /\s/g;
  const checkArray = checker.exec(pattern);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containsNoSymbol("asd#asd")
 * @description - Checks if the pattern is contains digits or letters or combinations only
 */
exports.firstWhiteSpaceMatchIndex = firstWhiteSpaceMatchIndex;
const containsNoSymbol = pattern => {
  const checker = /^[0-9a-zA-Z]+$/g;
  return checker.test(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containAnySymbol("asdasd!")
 * @description - Checks if the pattern contains any symbol
 */
exports.containsNoSymbol = containsNoSymbol;
const containsAnySymbol = pattern => {
  const checker = /[~`!@#$%^&*()_\-=+{[\]}\|\:;'"\?\/>\.<,]/g;
  return checker.test(pattern);
};

/**
 * @param searchString - Requried* - the symbol to look for in the pattern
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - containsThisSymbol("jkhgjhg#kjkjaasd",'#')
 * @description - Checks if the pattern contains the symbol mentioned
 */
exports.containsAnySymbol = containsAnySymbol;
const containsThisSymbol = (searchString, pattern) => {
  const checker = new RegExp(`[\\${pattern}]`);
  return checker.test(searchString);
};

/**
 * @param searchString - Requried* - the symbol to look for in the pattern
 * @param pattern -  Required* - a string pattern
 * @returns number - first matched index or -1
 * @example - firstSymbolMatchIndex("#","asdasd#")
 * @description - Checks if the pattern contains the symbol and returns its first matched index or else -1
 */
exports.containsThisSymbol = containsThisSymbol;
const firstSymbolMatchIndex = (searchString, pattern) => {
  const checker = new RegExp(`[\\${pattern}]`);
  const checkArray = checker.exec(searchString);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};

/**
 * @param searchString -  Required* - a string pattern
 * @param symbol1 - Requried* - the symbol to look for in the pattern
 * @param symbol2 - Requried* - the symbol to look for in the pattern
 * @returns boolean (true/false)
 * @example - containsThisOrThatSymbol("123asd#sd123",'#','$')
 * @description - checks if pattern contains one of the symbol 
 */
exports.firstSymbolMatchIndex = firstSymbolMatchIndex;
const containsThisOrThatSymbol = (searchString, symbol1, symbol2) => {
  const checker = new RegExp(`[\\${symbol1}]|[\\${symbol2}]`);
  return checker.test(searchString);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - startsWithADigitAndEndsWithALetter("123asdasdasd")
 * @description - Checks if a pattern is strictly alphanumeric (no symbols) starting with a digit and ends with a letter
 */
exports.containsThisOrThatSymbol = containsThisOrThatSymbol;
const startsWithADigitAndEndsWithALetter = pattern => {
  const checker = /\b[0-9]{1,}[a-zA-Z]{1,}\b/g;
  return checker.test(pattern) && containsNoSymbol(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - startsWithALetterAndEndsWithADigit("asdasd123")
 * @description - Checks if a pattern is strictly alphanumeric (no symbols) starting with a letter and ends with a digit
 */
exports.startsWithADigitAndEndsWithALetter = startsWithADigitAndEndsWithALetter;
const startsWithALetterAndEndsWithADigit = pattern => {
  const checker = /\b[a-zA-Z]{1,}[0-9]{1,}\b/g;
  return checker.test(pattern) && containsNoSymbol(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - startsWithADigitAndEndsWithADigit("123asdasd123")
 * @description - Checks if a pattern is strictly alphanumeric (no symbols) starting with a digit and ends with a digit
 */
exports.startsWithALetterAndEndsWithADigit = startsWithALetterAndEndsWithADigit;
const startsWithADigitAndEndsWithADigit = pattern => {
  const checker = /\b[0-9]{1,}[a-zA-Z]{1,}[0-9]{1,}\b/g;
  return checker.test(pattern) && containsNoSymbol(pattern);
};

/**
 * @param pattern -  Required* - a string pattern
 * @returns boolean (true/false)
 * @example - startsWithALetterAndEndsWithALetter("sdf223asdfasd")
 * @description - Checks if a pattern is strictly alphanumeric (no symbols) starting with a letter and ends with a letter
 */
exports.startsWithADigitAndEndsWithADigit = startsWithADigitAndEndsWithADigit;
const startsWithALetterAndEndsWithALetter = pattern => {
  const checker = /\b[a-zA-Z]{1,}[0-9]{1,}[a-zA-Z]{1,}\b/g;
  return checker.test(pattern) && containsNoSymbol(pattern);
};
exports.startsWithALetterAndEndsWithALetter = startsWithALetterAndEndsWithALetter;