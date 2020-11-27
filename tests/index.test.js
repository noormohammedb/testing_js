const mocha = require("mocha");
const { expect, assert, should } = require("chai");
const { add, sub, split } = require("../app/index");
should();

describe("Basic testing", () => {

   it("first test", () => {
      const result = sub(2, 4);
      expect(result).equal(-2);
      assert.typeOf(result, "Number")
   });

   it("second test", () => {
      const result = add(2, 4);
      expect(result).equal(6);
      assert.equal(result, 6);
   });

   it("3rd test", () => {
      const result = "add(2, 5);"
      result.should.be.a('string');
   });
});

describe("learn with doc", () => {
   it("double done", (done) => {
      // done();
      // setImmediate(done)
      setImmediate(done)
   });
});