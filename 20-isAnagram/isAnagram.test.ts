import { isAnagram } from "./isAnagram";
import { expect } from "chai";
import "mocha";

describe("the isAnagram(str1, str2) function", function () {
  it("should return a boolean", function () {
    expect(isAnagram("read", "red"), "the output is not a boolean").to.be.a(
      "boolean"
    );
  });

  it("should FAIL these auxillary test cases (str2 is not an anagram of str1)", function () {
    expect(isAnagram("help", "hell")).to.be.false;
    expect(isAnagram("help", "yelp")).to.be.false;
    expect(isAnagram("sun", "bun")).to.be.false;
    expect(isAnagram("grass", "glass")).to.be.false;
    expect(isAnagram("aabbcd", "aabbcc")).to.be.false;
  });

  it("should PASS these auxillary test cases (str2 is an anagram of str1)", function () {
    expect(isAnagram("battle", "tablet")).to.be.true;
    expect(isAnagram("silent", "listen")).to.be.true;
    expect(isAnagram("Fired", "fried")).to.be.true;
    expect(isAnagram("race", "Care")).to.be.true;
    expect(isAnagram("Part", "traP")).to.be.true;
    expect(isAnagram("knee", "keen")).to.be.true;
    expect(isAnagram("abc", "cba")).to.be.true;
    expect(isAnagram("big", "gib")).to.be.true;
    expect(isAnagram("rail safety", "fairy tales")).to.be.true;
  });
});
