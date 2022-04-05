var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var dice1 = rollDice();
  var dice2 = rollDice();
  // Determine if player wins
  if (input == dice1 || input == dice2 || dice1 + dice2 == 11) {
    var myOutputValue =
      "The dice rolls are " + dice1 + " and " + dice2 + ". Player wins!";
  } else {
    myOutputValue =
      "The dice rolls are " + dice1 + " and " + dice2 + ". Player loses!";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (input == "chicken rice" || input == "nasi lemak") {
    var myOutputValue = "rice";
  } else if (input == "hokkien mee" || input == "laksa") {
    myOutputValue = "noodle";
  } else myOutputValue = "others";
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  // Generate 4 digits
  var randomInteger1 = Math.ceil(Math.random() * 10);
  var randomInteger2 = Math.ceil(Math.random() * 10);
  var randomInteger3 = Math.ceil(Math.random() * 10);
  var randomInteger4 = Math.ceil(Math.random() * 10);
  if (
    input == randomInteger1 ||
    input == randomInteger2 ||
    input == randomInteger3 ||
    input == randomInteger4
  ) {
    var myOutputValue =
      "Player guessed " +
      input +
      " while the winning numbers are " +
      randomInteger1 +
      randomInteger2 +
      randomInteger3 +
      randomInteger4 +
      ". There is a match! Player wins!";
  } else
    myOutputValue =
      "Player guessed " +
      input +
      " while the winning numbers are " +
      randomInteger1 +
      randomInteger2 +
      randomInteger3 +
      randomInteger4 +
      ". There is a match! Player loses!";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var menu = [
    "chicken rice",
    "roti prata",
    "nasi lemak",
    "hokkien mee",
    "bak kut teh",
    "laksa"
  ];
  var randomInteger = Math.ceil(Math.random() * 5);
  if (input == menu[randomInteger]) {
    var myOutputValue =
      "You guessed " +
      input +
      " while Uncle's dish is " +
      menu[randomInteger] +
      ". You win a free meal!";
  } else
    myOutputValue =
      "You guessed " +
      input +
      " while Uncle's dish is " +
      menu[randomInteger] +
      ". You do not get a free meal :( ";
  return myOutputValue;
};

var randomDigit = function () {
  var randomDecimal = Math.ceil(1000 + Math.random() * 9999);
  return randomDecimal;
};
var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var winningDigit = randomDigit();
  if (Math.abs(input - winningDigit) < 1000) {
    var myOutputValue =
      "The winning number is " +
      winningDigit +
      ". You guessed " +
      input +
      ". Hence you win!";
  } else
    var myOutputValue =
      "The winning number is " +
      winningDigit +
      ". You guessed " +
      input +
      ". Hence you lose!";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
