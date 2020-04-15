const assert = require('chai').assert;
const func = require('../functions/findClosest.function');

var arr = [0,11,13,17,19,26,30,52];
var arr2 = [0,3,6,9,10,11,15];
var arrEmpty = [];
var arr4 = [2,6,8,12,16,19,19,19,20,20,26,30,32,37,38,52,62,63,70];
var arrNestedEnd = [1,2,3,6,8,[1,6,9]];
var arrNestedMiddle = [1,5,7,12,[13,14],15,17];
var arrString = '[1]';
var arrNull = null;
var arrUndefined = undefined;
var num = 20;
var num2 = 0;
var num3 = 12;
var numObject = {a:1};
var numNull = null;
var numUndefined = undefined;


describe("Code Coverage Tests", function() {
    it("Direct hit", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr4, num)), JSON.stringify({num: 20, index: 8}));
    })
    it("Close hit", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr, num)), JSON.stringify({num: 19, index: 4}));
    })
    it("First zero hit", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr, num2)), JSON.stringify({num: 0, index: 0}));
    })
    it("Last from couple of closest hits", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr, num3)), JSON.stringify({num: 13, index: 2}));
    })
    it("No close hit", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr2, num)), JSON.stringify({num: 15, index: 6}));
    })
    it("Nested array at the end (low-level arrays will be ignored)", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrNestedEnd, num)), JSON.stringify({num: 8, index: 4}));
    })
    it("Nested array in the middle (low-level arrays will be ignored)", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrNestedMiddle, num)), JSON.stringify({num: 17, index: 6}));
    })
    it("Empty array", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrEmpty, num)), JSON.stringify({num: null, index: null}));
    })
    it("Not an array", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrString, num3)), JSON.stringify({num: null, index: null}));
    })
    it("NaN instead of number", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr2, numObject)), JSON.stringify({num: null, index: null}));
    })
    it("First null", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrNull, num)), JSON.stringify({num: null, index: null}));
    })
    it("Second null", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr2, numNull)), JSON.stringify({num: null, index: null}));
    })
    it("Two nulls", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrNull, numNull)), JSON.stringify({num: null, index: null}));
    })
    it("First undefined", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrUndefined, num)), JSON.stringify({num: null, index: null}));
    })
    it("Second undefined", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arr2, numUndefined)), JSON.stringify({num: null, index: null}));
    })
    it("Two undefineds", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrUndefined, numUndefined)), JSON.stringify({num: null, index: null}));
    })
    it("One undefined and one null", () => {
        assert.strictEqual(JSON.stringify(func.findClosestNumberInArray(arrNull, numUndefined)), JSON.stringify({num: null, index: null}));
    })
})