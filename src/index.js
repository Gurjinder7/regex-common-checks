export const containsAnyDigits = (pattern) => {
    const checker = /[\d]/g
    return checker.test(pattern)

}

export const firstDigitMatchIndex = (pattern) => {
    const checker = /[\d]/g
    const checkArray = checker.exec(pattern)
    if (!!checkArray) {
        return checkArray.index
    }
    return -1
}

export const containsAnyNonWordCharacter = (pattern) => {
    const checker = /\W/g
    return checker.test(pattern)

}

export const firstNonWordMatchIndex = (pattern) => {
    const checker = /\W/g
    const checkArray = checker.exec(pattern)
    if (!!checkArray) {
        return checkArray.index
    }
    return -1
}

export const containsNoDigit = (pattern) => {
    const checker = /\b[a-zA-Z]{1,}\b/g
    console.log(containsAnySymbol(pattern))
    return checker.test(pattern) && !containsAnySymbol(pattern)

}


export const containsAnyWhiteSpace = (pattern) => {
    const checker = /\s/g
    return checker.test(pattern)

}

export const firstWhiteSpaceMatchIndex = (pattern) => {
    const checker = /\s/g
    const checkArray = checker.exec(pattern)
    if (!!checkArray) {
        return checkArray.index
    }
    return -1
}

export const containsNoSymbol = (pattern) => {
    const checker = /^[0-9a-zA-Z]+$/g
    return checker.test(pattern) 
}

export const containsAnySymbol = (pattern) => {
    const checker = /[~`!@#$%^&*()_\-=+{[\]}\|\:;'"\?\/>\.<,]/g
    return checker.test(pattern)
}


export const containsThisSymbol = (value, pattern) => {
    const checker = new RegExp(`[\\${pattern}]`);

    return checker.test(value) 
}


export const firstSymbolMatchIndex = (value, pattern) => {
    const checker = new RegExp(`[\\${pattern}]`);
    const checkArray = checker.exec(value)
    if (!!checkArray) {
        return checkArray.index
    }
    return -1
}

export const containsThisOrThatSymbol = (value, pattern1, pattern2) => {
    const checker = new RegExp(`[\\${pattern1}]|[\\${pattern2}]`);
    return checker.test(value)
}


export const startsWithADigitAndEndsWithALetter = (value) => {
    const checker = /\b[0-9]{1,}[a-zA-Z]{1,}\b/g
    return checker.test(value) && containsNoSymbol(value)
}


export const startsWithALetterAndEndsWithADigit = (value) => {
    const checker = /\b[a-zA-Z]{1,}[0-9]{1,}\b/g
    return checker.test(value) && containsNoSymbol(value)
}

export const startsWithADigitAndEndsWithADigit = (value) => {
    const checker = /\b[0-9]{1,}[a-zA-Z]{1,}[0-9]{1,}\b/g
    return checker.test(value) && containsNoSymbol(value)
}

export const startsWithALetterAndEndsWithALetter = (value) => {
    const checker = /\b[a-zA-Z]{1,}[0-9]{1,}[a-zA-Z]{1,}\b/g
    return checker.test(value) && containsNoSymbol(value)
}
