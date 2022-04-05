var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "Hello " + input + ", how are you today?";
  return myOutputValue;
};

var metricMain = function (distanceInKm) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var KMtoMiles = 0.62;
  var ConvertedMiles = KMtoMiles * distanceInKm;
  var myOutputValue = "Miles: " + ConvertedMiles;
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var Train1speed = 200;
  var Train1time = 2;
  var TokyoDistance = Train1speed * Train1time;
  var Train2time = Train1time - input;
  var Train2speed = TokyoDistance / Train2time;
  if (input >= 2) {
    myOutputValue = "Train 1 would have already reached Tokyo";
  } else {
    var myOutputValue = "Speed Needed: " + Train2speed;
  }
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var AnglePerMin = 360 / 60;
  var AnglePerHour = 360 / 12;
  var Mins = input % 60;
  var Hours = Math.floor(input / 60) + 1;
  var MinsAngle = Mins * AnglePerMin;
  var HoursAngle = Hours * AnglePerHour;
  var myOutputValue = MinsAngle - HoursAngle;
  return myOutputValue;
};
