'use strict'

/**
 * Integer division
 * @param {Number} numerator
 * @param {Number} denominator
 */
function intDiv(numerator, denominator) {
    let remainder = numerator % denominator;
    return {
        quotient: (numerator - remainder) / denominator, // Частное
        remainder // Остаток
    };
}

/**
 * Returns sum of two string-based non-negative integers
 * @param {String} a
 * @param {String} b
 */
function sumBigIntegers(a, b) {
    if (typeof a != 'string' || typeof b != 'string') {
        throw new TypeError('Input values must have String type');
    }
    if (a.match(/\D/g) || b.match(/\D/g)) {
        throw new Error('Input strings must only consist of numbers');
    }
    let maxLength = Math.max(a.length, b.length);
    while (a.length < maxLength) {
        a = '0' + a;
    }
    while (b.length < maxLength) {
        b = '0' + b;
    }
    let additionalUnit = 0, result = '';
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = +a[i] + +b[i] + additionalUnit;
        let div = intDiv(sum, 10);
        result = `${div.remainder}${result}`
        additionalUnit = div.quotient;
    }
    if (additionalUnit) {
        result = `${additionalUnit}${result}`
    }
    return result;
}

module.exports = sumBigIntegers;
