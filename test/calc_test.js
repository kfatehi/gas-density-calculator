var assert = require('assert');

var calc = require('../src/calc.js');

describe("calc#getDensity()", function() {
  describe("Helium at STP", function() {
    var options = {
      molecularWeightGramMole: 4.002602,
      temperatureKelvin: 273.15,
      pressureKiloPascal: 101.325
    }
    it("should be 0.1786 kg/m3", function() {
      assert.equal(calc.getDensity(options), 0.1786);
    });
  });
});
