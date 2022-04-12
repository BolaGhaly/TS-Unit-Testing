import { greetFriend } from "./greetFriend";
import { expect } from "chai";
import "mocha";
const { faker } = require("@faker-js/faker");

describe("the greetFriend(name) function", function () {
  it("should return a string", function () {
    let submittedSolution = greetFriend("Luke");
    expect(submittedSolution, "the output is not a string").to.be.a("string");
  });

  it("should return a proper greeting adhering to this format: 'Hello, insertValueOfNameHere!", function () {
    let submittedSolution = greetFriend("Mark");
    expect(submittedSolution).to.equal("Hello, Mark!");
  });

  it("should pass all twenty randomized test cases", function () {
    for (let i = 0; i < 20; i++) {
      let randomName = faker.name.findName();
      let submittedSolution = greetFriend(randomName);
      expect(submittedSolution).to.equal(`Hello, ${randomName}!`);
    }
  });
});
