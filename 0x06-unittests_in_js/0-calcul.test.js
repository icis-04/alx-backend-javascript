const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber", function() {
	it("test the calculateNumber function" ,function () {
		assert.equal(calculateNumber(1,3), 4);
	});
	it("test the calculateNumber function", function () {
                assert.equal(calculateNumber(-4.5,-3.6), -8);
        });
	it("test the calculateNumber function", function () {
                assert.equal(calculateNumber(-1, 3), 2);
        });
	it("test the calculateNumber function", function () {
                assert.equal(calculateNumber(4.5,3.5), 9);
        });
	it("test the calculateNumber function", function () {
                assert.equal(calculateNumber(-1,-3), -4);
        });
})
