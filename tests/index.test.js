const mocha = require("mocha");
const { expect } = require("chai");
const { add, sub } = require("../app/index");

describe("Basic testing", () => {

   it("first test", () => {
      expect(sub(2, 4))
         .equal(-2)
   });

   it("second test", () => {
      expect(add(2, 4))
         .equal(6)
   });
});