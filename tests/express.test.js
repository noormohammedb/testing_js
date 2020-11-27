process.env.NODE_ENV = 'test';

const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();

const server = require("../app/express");

chai.use(chaiHttp)

describe("testing express app", () => {

   it("GET /", (done) => {
      console.log("starts requesting");
      chai.request(server)
         .get('/')
         .end((err, res) => {
            if (!err) {
               // console.log(res);
            } else {
               console.error(err);
            }
            done(err);
         })
   });

});