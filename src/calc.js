
module.exports = {

  /* Use the ideal gas law
   * ρ = (P * M.W.) / (R * T)
   */
  getDensity: function(options) {
    var R = 8.3144621,
        MW = options.molecularWeightGramMole,
        P = options.pressureKiloPascal,
        T = options.temperatureKelvin;
    var ρ = (P * MW) / (R * T);

    return ρ;
  }
}
