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
            res.should.have.status(200);
            res.body.should.be.a("object")
            done();
         })
   });

});

/* Referance
 * digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
**/