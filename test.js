'use strict'

const chai = require('chai');

const sumBigIntegers = require('./index.js');

describe('sumBigIntegers', () => {
    it('Sums zeros', () => {
        chai.assert.equal(sumBigIntegers('0', '0'), '0');
    });
    it('Sums regular numbers', () => {
        chai.assert.equal(sumBigIntegers('1', '2'), '3');
        chai.assert.equal(sumBigIntegers('11', '8'), '19');
        chai.assert.equal(sumBigIntegers('1', '14'), '15');
    });
    it('Sums regular numbers and zeros', () => {
        chai.assert.equal(sumBigIntegers('1', '0'), '1');
        chai.assert.equal(sumBigIntegers('19', '0'), '19');
        chai.assert.equal(sumBigIntegers('0', '99'), '99');
    });
    it('Sums big numbers', () => {
        chai.assert.equal(sumBigIntegers('111111111111111111111111111111111111111111111111111111111111', '911111111111111111111111111111111111111111111111111111111111'), '1022222222222222222222222222222222222222222222222222222222222');
    });
    it('Throws error on non-string values', () => {
        chai.assert.throws(() => {
            sumBigIntegers(1, '0');
        }, TypeError, 'Input values must have String type');
        chai.assert.throws(() => {
            sumBigIntegers('1', {});
        }, TypeError, 'Input values must have String type');
        chai.assert.throws(() => {
            sumBigIntegers(() => { }, '1');
        }, TypeError, 'Input values must have String type');
    });
    it('Throws error on illegal symbols', () => {
        chai.assert.throws(() => {
            sumBigIntegers('-1', '0');
        }, Error, 'Input strings must only consist of numbers');
        chai.assert.throws(() => {
            sumBigIntegers('1', 'a');
        }, Error, 'Input strings must only consist of numbers');
        chai.assert.throws(() => {
            sumBigIntegers('1', '!');
        }, Error, 'Input strings must only consist of numbers');
        chai.assert.throws(() => {
            sumBigIntegers('*', '2');
        }, Error, 'Input strings must only consist of numbers');
    });
});
