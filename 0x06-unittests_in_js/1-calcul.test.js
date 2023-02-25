const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("calculateNumber", function() {
	it("tetsing functions based on types", function(){
		assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
	});
	it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
	it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
	it("tetsing functions based on types", function(){
                assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
})
