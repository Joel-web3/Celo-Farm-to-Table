const { expect } = require("chai");

describe("Trace Contract", function() {
	it("Should return the right product properties when queried", async function() {
    	const Trace = await ethers.getContractFactory("Trace");
    	const trace = await Trace.deploy();
    	await trace.deployed();

    	const tx = await trace.addProduct("1", "Apple", "Farmer Joe", "Location 1");
    	await tx.wait();

    	const product = await

 trace.getProduct("1");

    	expect(product.name).to.equal("Apple");
    	expect(product.farmer).to.equal("Farmer Joe");
    	expect(product.location).to.equal("Location 1");
	});
});
