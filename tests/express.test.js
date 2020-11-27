process.env.NODE_ENV = 'test';

const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("chai").should();

const server = require("../app/express");

chai.use(chaiHttp)

describe("testing express app", () => {

   it("GET /", (done) => {
      chai.request(server)
         .get('/')
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object")
            done();
         })
   });

   const postData = { message: "Hello World", status: 5325 };

   it("POST /", (done) => {
      chai.request(server)
         .post('/')
         .send(postData)
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object")
            console.log(res.body);
            res.body.should.have.property("message");
            done();
         })
   });

});

/* Referance
 * digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
**/