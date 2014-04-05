gas-density-calculator
---

install: `npm install gas-density-calcuator`

example:

```javascript
var calc = require('gas-density-calculator');

var density = calc.getDensity({
  molecularWeightGramMole: 4.002602,
  temperatureKelvin: 273.15,
  pressureKiloPascal: 101.325
});

// do something with `density`
```
