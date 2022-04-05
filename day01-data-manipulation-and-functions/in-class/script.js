var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var fahrenheitToCelsiusMain = ((input - 32) * 5) / 9;
  var myOutputValue = fahrenheitToCelsiusMain;
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  // We will use the conversion where 1 km = 0.621 miles
  var Miles = input * 0.621;
  var roadTripCostBaseMain = Math.round((Miles / 9) * 2.2 * 100) / 100;
  var myOutputValue = "$" + roadTripCostBaseMain;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  // We will use the conversion where 1 km = 0.62 miles
  var miles = input * 0.62;
  var ferrariCost = (miles / 9) * 2.2;
  var trainCost = (miles / 9) * 2;
  var roadTripCostComfortableMain =
    "$" + Math.round((ferrariCost - trainCost) * 100) / 100;
  return roadTripCostComfortableMain;
};

var iceMachineMain = function (input) {
  // Use the conversion of 1 gram = 0.0022 pounds
  var CubesPerGuest = 2 * 4 * 1.5 * 0.0022;
  var CubesNeeded = CubesPerGuest * input;
  var iceMachineMain = CubesNeeded / 5;
  var myOutputValue = "Number of hours: " + iceMachineMain + " hours";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  // Assuming that per quarter, they mean quarter of a year?
  var PintsPerDay = input * 2;
  var Kegs = PintsPerDay / 124;
  var KegsPerQuarter = Math.ceil(Kegs * 90);
  var myOutputValue = "Number of kegs per quarter: " + KegsPerQuarter + " kegs";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var NumberOfPlans = Math.ceil(input / 50);
  var CostOfPlans = NumberOfPlans * 19.99;
  var PricePerGB = CostOfPlans / input;
  var myOutputValue = "Cost per GB: $" + PricePerGB.toFixed(2);
  return myOutputValue;
};
