const calculateNumber = require("./1-calcul.js");
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber", function() {
        it("tetsing functions based on types", function(){
                expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
        });
        it("tetsing functions based on types", function(){
                expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
        });
	it("tetsing functions based on types", function(){
                expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
        });
	it("tetsing functions based on types", function(){
                expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
        });

})
