const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("calculateNumber - SUM", function() {
	it("tetsing functions based on types", function(){
		assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
	});
	it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUM', -5, 4.5), 0);
        });
	it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUM', 7, 8), 15);
        });
	it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUM', 1.4, 0), 1);
        });
})
describe("calculateNumber - SUBTRACT", function() {
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUBTRACT', 1.4, -1.4), 2);
        });
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUBTRACT', -1.4, -3.7), 3);
        });
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUBTRACT', 12, 6), 6);
        });
})
describe("calculateNumber", function() {
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('DIVIDE', -9, 4.5), -1.8);
        });
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('DIVIDE', 0, 4.5), 0);
        });
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
        it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
})
