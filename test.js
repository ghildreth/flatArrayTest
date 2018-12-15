var assert = require('assert');
var flattenUsingStack = require('./flattenArray.js')
var flattenRecursively = require('./flattenArray.js')
// describe('Array', function() {
// 	describe('#indexOf()', function() {
// 		it('should return -1 when the value is not present', function() {
// 			assert.equal([1,2,3].indexOf(4), -1);
// 		})
// 	})
//})

describe('file', function () {
	it('should flatten an array', function() {
		var result = flattenUsingStack([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10 ])

		assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})
	it('should throw on non-array', function () {
		assert.throws(function () {
			flattenUsingStack('test')
		}, TypeError)
	})
})
describe('file', function () {
	it('should flatten an array', function() {
		var result = flattenRecursively([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10 ])

		assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})
	it('should throw on non-array', function () {
		assert.throws(function () {
			flattenRecursively('test')
		}, TypeError)
	})
})

