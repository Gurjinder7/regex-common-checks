"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWithALetterAndEndsWithALetter = exports.startsWithALetterAndEndsWithADigit = exports.startsWithADigitAndEndsWithALetter = exports.startsWithADigitAndEndsWithADigit = exports.firstWhiteSpaceMatchIndex = exports.firstSymbolMatchIndex = exports.firstNonWordMatchIndex = exports.firstDigitMatchIndex = exports.containsThisSymbol = exports.containsThisOrThatSymbol = exports.containsNoSymbol = exports.containsNoDigit = exports.containsAnyWhiteSpace = exports.containsAnySymbol = exports.containsAnyNonWordCharacter = exports.containsAnyDigits = void 0;
const containsAnyDigits = pattern => {
  const checker = /[\d]/g;
  return checker.test(pattern);
};
exports.containsAnyDigits = containsAnyDigits;
const firstDigitMatchIndex = pattern => {
  const checker = /[\d]/g;
  const checkArray = checker.exec(pattern);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};
exports.firstDigitMatchIndex = firstDigitMatchIndex;
const containsAnyNonWordCharacter = pattern => {
  const checker = /\W/g;
  return checker.test(pattern);
};
exports.containsAnyNonWordCharacter = containsAnyNonWordCharacter;
const firstNonWordMatchIndex = pattern => {
  const checker = /\W/g;
  const checkArray = checker.exec(pattern);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};
exports.firstNonWordMatchIndex = firstNonWordMatchIndex;
const containsNoDigit = pattern => {
  const checker = /\b[a-zA-Z]{1,}\b/g;
  console.log(containsAnySymbol(pattern));
  return checker.test(pattern) && !containsAnySymbol(pattern);
};
exports.containsNoDigit = containsNoDigit;
const containsAnyWhiteSpace = pattern => {
  const checker = /\s/g;
  return checker.test(pattern);
};
exports.containsAnyWhiteSpace = containsAnyWhiteSpace;
const firstWhiteSpaceMatchIndex = pattern => {
  const checker = /\s/g;
  const checkArray = checker.exec(pattern);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};
exports.firstWhiteSpaceMatchIndex = firstWhiteSpaceMatchIndex;
const containsNoSymbol = pattern => {
  const checker = /^[0-9a-zA-Z]+$/g;
  return checker.test(pattern);
};
exports.containsNoSymbol = containsNoSymbol;
const containsAnySymbol = pattern => {
  const checker = /[~`!@#$%^&*()_\-=+{[\]}\|\:;'"\?\/>\.<,]/g;
  return checker.test(pattern);
};
exports.containsAnySymbol = containsAnySymbol;
const containsThisSymbol = (value, pattern) => {
  const checker = new RegExp(`[\\${pattern}]`);
  return checker.test(value);
};
exports.containsThisSymbol = containsThisSymbol;
const firstSymbolMatchIndex = (value, pattern) => {
  const checker = new RegExp(`[\\${pattern}]`);
  const checkArray = checker.exec(value);
  if (!!checkArray) {
    return checkArray.index;
  }
  return -1;
};
exports.firstSymbolMatchIndex = firstSymbolMatchIndex;
const containsThisOrThatSymbol = (value, pattern1, pattern2) => {
  const checker = new RegExp(`[\\${pattern1}]|[\\${pattern2}]`);
  return checker.test(value);
};
exports.containsThisOrThatSymbol = containsThisOrThatSymbol;
const startsWithADigitAndEndsWithALetter = value => {
  const checker = /\b[0-9]{1,}[a-zA-Z]{1,}\b/g;
  return checker.test(value) && containsNoSymbol(value);
};
exports.startsWithADigitAndEndsWithALetter = startsWithADigitAndEndsWithALetter;
const startsWithALetterAndEndsWithADigit = value => {
  const checker = /\b[a-zA-Z]{1,}[0-9]{1,}\b/g;
  return checker.test(value) && containsNoSymbol(value);
};
exports.startsWithALetterAndEndsWithADigit = startsWithALetterAndEndsWithADigit;
const startsWithADigitAndEndsWithADigit = value => {
  const checker = /\b[0-9]{1,}[a-zA-Z]{1,}[0-9]{1,}\b/g;
  return checker.test(value) && containsNoSymbol(value);
};
exports.startsWithADigitAndEndsWithADigit = startsWithADigitAndEndsWithADigit;
const startsWithALetterAndEndsWithALetter = value => {
  const checker = /\b[a-zA-Z]{1,}[0-9]{1,}[a-zA-Z]{1,}\b/g;
  return checker.test(value) && containsNoSymbol(value);
};
exports.startsWithALetterAndEndsWithALetter = startsWithALetterAndEndsWithALetter;