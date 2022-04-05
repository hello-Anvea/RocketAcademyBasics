// Generate random dice number;
var randomDigit = function () {
  var randomDecimal = Math.random() * 6;
  var diceNumber = Math.floor(randomDecimal) + 1;
  return diceNumber;
};

var round = 1;
var myOutputValue = "";

var generatePair = function (click, input) {
  var Dice1 = randomDigit();
  var Dice2 = randomDigit();
  var myOutputValue =
    "Welcome Player " +
    round +
    ". <br>You rolled " +
    Dice1 +
    " for Dice 1 and " +
    Dice2 +
    " for Dice 2. <br> Choose the order of the dice.<br>Which dice throw is the first numeral of the combined number? Enter 1 or 2.";
  if (input == 1) {
    pair = Dice1 + "" + Dice2;
    myOutputValue = "Your paired number is " + pair + ". ";
  } else {
    pair = Dice2 + "" + Dice1;
    myOutputValue = "Your paired number is " + pair + ". ";
  }
  return myOutputValue;
};

var main = function (input) {
  var p1Dice = generatePair(click, input);
  myOutputValue += "It is now Player 2's turn";
  var round = round + 1;
  var p2Dice = generatePair(click, input);
  myOutputValue = p1Dice + " " + p2Dice;
  return myOutputValue;
};
