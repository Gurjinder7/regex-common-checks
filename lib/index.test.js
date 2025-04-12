"use strict";

var _index = require("./index.js");
test("checks if pattern starts and ends with a digit", () => {
  expect((0, _index.startsWithADigitAndEndsWithADigit)("123asdasd123")).toBeTruthy();
  expect((0, _index.startsWithADigitAndEndsWithADigit)("asdasd123")).toBeFalsy();
  expect((0, _index.startsWithADigitAndEndsWithADigit)("123asd$asd2")).toBeFalsy();
  expect((0, _index.startsWithADigitAndEndsWithADigit)("1asdasd3")).toBeTruthy();
});
test("checks if pattern starts and ends with a letter", () => {
  expect((0, _index.startsWithALetterAndEndsWithALetter)("sdf223asdfasd")).toBeTruthy();
  expect((0, _index.startsWithALetterAndEndsWithALetter)("asda@sd")).toBeFalsy();
  expect((0, _index.startsWithALetterAndEndsWithALetter)("123asdasd23")).toBeFalsy();
  expect((0, _index.startsWithALetterAndEndsWithALetter)("asadsd234asdasd")).toBeTruthy();
});
test("checks if pattern starts with a digit and ends with a letter", () => {
  expect((0, _index.startsWithADigitAndEndsWithALetter)("123asdasdasd")).toBeTruthy();
  expect((0, _index.startsWithADigitAndEndsWithALetter)("asdasd123")).toBeFalsy();
  expect((0, _index.startsWithADigitAndEndsWithALetter)("123asd&asd")).toBeFalsy();
  expect((0, _index.startsWithADigitAndEndsWithALetter)("1asdasd")).toBeTruthy();
});
test("checks if pattern starts with a letter and ends with a digit", () => {
  expect((0, _index.startsWithALetterAndEndsWithADigit)("asdasd123")).toBeTruthy();
  expect((0, _index.startsWithALetterAndEndsWithADigit)("12asdasd123")).toBeFalsy();
  expect((0, _index.startsWithALetterAndEndsWithADigit)("asdas$d22")).toBeFalsy();
  expect((0, _index.startsWithALetterAndEndsWithADigit)("asdasd322")).toBeTruthy();
  expect((0, _index.startsWithALetterAndEndsWithADigit)("")).toBeFalsy();
});
test("checks if pattern contains any digit", () => {
  expect((0, _index.containsAnyDigits)("123asdasd#$")).toBeTruthy();
  expect((0, _index.containsAnyDigits)("asdasdkjh*(asd")).toBeFalsy();
  expect((0, _index.containsAnyDigits)("!@#asdasd")).toBeFalsy();
});
test("checks if pattern contains any symbols (includes white space)", () => {
  expect((0, _index.containsAnyNonWordCharacter)("123as3 asd")).toBeTruthy();
  expect((0, _index.containsAnyNonWordCharacter)("asdasd123")).toBeFalsy();
  expect((0, _index.containsAnyNonWordCharacter)("123asdasd")).toBeFalsy();
  expect((0, _index.containsAnyNonWordCharacter)("123!@#!@asdasd")).toBeTruthy();
});
test("checks if pattern contains any white space", () => {
  expect((0, _index.containsAnyWhiteSpace)("123as sd123")).toBeTruthy();
  expect((0, _index.containsAnyWhiteSpace)("asdasd123")).toBeFalsy();
  expect((0, _index.containsAnyWhiteSpace)("123asdasd")).toBeFalsy();
  expect((0, _index.containsAnyWhiteSpace)(" ")).toBeTruthy();
});
test("checks if pattern contains No digit", () => {
  expect((0, _index.containsNoDigit)("asdasd")).toBeTruthy();
  expect((0, _index.containsNoDigit)("as123dasd")).toBeFalsy();
  expect((0, _index.containsNoDigit)("as$dasd")).toBeFalsy();
});
test("checks if pattern contains a symbol (any)", () => {
  expect((0, _index.containsThisSymbol)("jkhgjhg#kjkjaasd", '#')).toBeTruthy();
  expect((0, _index.containsThisSymbol)("asdasd123", '@')).toBeFalsy();
  expect((0, _index.containsThisSymbol)("123asdasd", 'g')).toBeFalsy();
  expect((0, _index.containsThisSymbol)("1asda?asd", '?')).toBeTruthy();
});
test("checks if pattern contains one of the symbol ", () => {
  expect((0, _index.containsThisOrThatSymbol)("123asd#sd123", '#', '$')).toBeTruthy();
  expect((0, _index.containsThisOrThatSymbol)("asdasd123", '@', '!')).toBeFalsy();
  expect((0, _index.containsThisOrThatSymbol)("123asdasd", '(', '%')).toBeFalsy();
  expect((0, _index.containsThisOrThatSymbol)("1asdjak^&*%asd3", '%', '&')).toBeTruthy();
});
test("checks if pattern contains No symbols", () => {
  expect((0, _index.containsNoSymbol)("asdasd878AS")).toBeTruthy();
  expect((0, _index.containsNoSymbol)("as123$dasd")).toBeFalsy();
  expect((0, _index.containsNoSymbol)("43dASDasd23")).toBeTruthy();
  expect((0, _index.containsNoSymbol)("12312!3")).toBeFalsy();
});
test("checks if pattern contains symbols", () => {
  expect((0, _index.containsAnySymbol)("asd#a%sd")).toBeTruthy();
  expect((0, _index.containsAnySymbol)("as123dasd")).toBeFalsy();
  expect((0, _index.containsAnySymbol)("asdasd")).toBeFalsy();
});