const chai = require("chai");
const assert = chai.assert;
var expect = chai.expect;
chai.config.truncateThreshold=0;
const funcFile = require("../tests/javascript/triDecroissant/funcFile");

var tableau = [];
var tableau2 = [];
var tableau3 = [];

for (var i = 1; i < 10; i++){
  tableau.push(i);
}

for (var i = 1; i < 100; i++){
  tableau2.push(i);
}

for (var i = 1; i < 1000; i++){
  tableau3.push(i);
}

const shuffledTableau = tableau.sort((a, b) => 0.5 - Math.random());
const shuffledTableau2 = tableau2.sort((a, b) => 0.5 - Math.random());
const shuffledTableau3 = tableau3.sort((a, b) => 0.5 - Math.random());




describe("triDecroissant", function() {
  it("should test", function() {
    expect(funcFile.triDecroissant(shuffledTableau),"devrait retourner le tableau trié").to.equal(tableau.sort(function(a, b) {
      return a + b;
    }))
  });
  it("should test2", function() {
    expect(funcFile.triDecroissant(shuffledTableau2),"devrait retourner le tableau trié").to.equal(tableau2.sort(function(a, b) {
      return a + b;
    }))
  });
  it("should test3", function() {
    expect(funcFile.triDecroissant(shuffledTableau3),"devrait retourner le tableau trié").to.equal(tableau3.sort(function(a, b) {
      return a + b;
    }))

  });
});