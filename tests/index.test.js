const mocha = require("mocha");
const { expect } = require("chai");
const { add, sub, split } = require("../app/index");

describe("Basic testing", () => {

   it("first test", () => {
      expect(sub(2, 4))
         .equal(-2)
   });

   it("second test", () => {
      expect(add(2, 4))
         .equal(6)
   });

   it("3rd test", () => {
      expect(split("lorem ipsum"))
         .to.be.a("object")
   });
});

describe("learn with doc", () => {
   it("double done", (done) => {
      // done();
      // setImmediate(done)
      setImmediate(done)
   });
});