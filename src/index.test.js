import {
  startsWithADigitAndEndsWithADigit,
  startsWithADigitAndEndsWithALetter,
  startsWithALetterAndEndsWithADigit,
  startsWithALetterAndEndsWithALetter,
  containsAnyDigits,
  containsAnyNonWordCharacter,
  containsAnyWhiteSpace,
  containsNoDigit,
  containsThisOrThatSymbol,
  containsThisSymbol,
  containsNoSymbol,
  containsAnySymbol
} from "./index.js";


test("checks if pattern starts and ends with a digit", () => {
  expect(startsWithADigitAndEndsWithADigit("123asdasd123")).toBeTruthy();
  expect(startsWithADigitAndEndsWithADigit("asdasd123")).toBeFalsy();
  expect(startsWithADigitAndEndsWithADigit("123asd$asd2")).toBeFalsy();
  expect(startsWithADigitAndEndsWithADigit("1asdasd3")).toBeTruthy();

});

test("checks if pattern starts and ends with a letter", () => {
    expect(startsWithALetterAndEndsWithALetter("sdf223asdfasd")).toBeTruthy();
    expect(startsWithALetterAndEndsWithALetter("asda@sd")).toBeFalsy();
    expect(startsWithALetterAndEndsWithALetter("123asdasd23")).toBeFalsy();
    expect(startsWithALetterAndEndsWithALetter("asadsd234asdasd")).toBeTruthy();
  
});

test("checks if pattern starts with a digit and ends with a letter", () => {
    expect(startsWithADigitAndEndsWithALetter("123asdasdasd")).toBeTruthy();
    expect(startsWithADigitAndEndsWithALetter("asdasd123")).toBeFalsy();
    expect(startsWithADigitAndEndsWithALetter("123asd&asd")).toBeFalsy();
    expect(startsWithADigitAndEndsWithALetter("1asdasd")).toBeTruthy();
  
});

test("checks if pattern starts with a letter and ends with a digit", () => {
    expect(startsWithALetterAndEndsWithADigit("asdasd123")).toBeTruthy();
    expect(startsWithALetterAndEndsWithADigit("12asdasd123")).toBeFalsy();
    expect(startsWithALetterAndEndsWithADigit("asdas$d22")).toBeFalsy();
    expect(startsWithALetterAndEndsWithADigit("asdasd322")).toBeTruthy();
    expect(startsWithALetterAndEndsWithADigit("")).toBeFalsy();
});

test("checks if pattern contains any digit", () => {
    expect(containsAnyDigits("123asdasd#$")).toBeTruthy();
    expect(containsAnyDigits("asdasdkjh*(asd")).toBeFalsy();
    expect(containsAnyDigits("!@#asdasd")).toBeFalsy();
  
  });

  test("checks if pattern contains any symbols (includes white space)", () => {
    expect(containsAnyNonWordCharacter("123as3 asd")).toBeTruthy();
    expect(containsAnyNonWordCharacter("asdasd123")).toBeFalsy();
    expect(containsAnyNonWordCharacter("123asdasd")).toBeFalsy();
    expect(containsAnyNonWordCharacter("123!@#!@asdasd")).toBeTruthy();
  
  });

  test("checks if pattern contains any white space", () => {
    expect(containsAnyWhiteSpace("123as sd123")).toBeTruthy();
    expect(containsAnyWhiteSpace("asdasd123")).toBeFalsy();
    expect(containsAnyWhiteSpace("123asdasd")).toBeFalsy();
    expect(containsAnyWhiteSpace(" ")).toBeTruthy();
    
  });

  test("checks if pattern contains No digit", () => {
    expect(containsNoDigit("asdasd")).toBeTruthy();
    expect(containsNoDigit("as123dasd")).toBeFalsy();
    expect(containsNoDigit("as$dasd")).toBeFalsy();
  
  });

  test("checks if pattern contains a symbol (any)", () => {
    expect(containsThisSymbol("jkhgjhg#kjkjaasd",'#')).toBeTruthy();
    expect(containsThisSymbol("asdasd123",'@')).toBeFalsy();
    expect(containsThisSymbol("123asdasd",'g')).toBeFalsy();
    expect(containsThisSymbol("1asda?asd",'?')).toBeTruthy();
  });

  
  test("checks if pattern contains one of the symbol ", () => {
    expect(containsThisOrThatSymbol("123asd#sd123",'#','$')).toBeTruthy();
    expect(containsThisOrThatSymbol("asdasd123",'@','!')).toBeFalsy();
    expect(containsThisOrThatSymbol("123asdasd",'(','%')).toBeFalsy();
    expect(containsThisOrThatSymbol("1asdjak^&*%asd3",'%','&')).toBeTruthy();
  });

  test("checks if pattern contains No symbols", () => {
    expect(containsNoSymbol("asdasd878AS")).toBeTruthy();
    expect(containsNoSymbol("as123$dasd")).toBeFalsy();
    expect(containsNoSymbol("43dASDasd23")).toBeTruthy();
    expect(containsNoSymbol("12312!3")).toBeFalsy();

  });

  test("checks if pattern contains symbols", () => {
    expect(containsAnySymbol("asd#a%sd")).toBeTruthy();
    expect(containsAnySymbol("as123dasd")).toBeFalsy();
    expect(containsAnySymbol("asdasd")).toBeFalsy();
  
  });