var orangeJuiceMain = function (ExpectedGuests, GlassPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var OrangePerGuest = 4 * GlassPerGuest;
  var myOutputValue = "Number of Oranges: " + OrangePerGuest * ExpectedGuests;
  return myOutputValue;
};

var paintMain = function (DpL, Rooms, Coats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var SurfaceArea = 3 * 3 * Rooms * Coats;
  var myOutputValue = "Total Cost: $" + DpL * (SurfaceArea / 300);
  return myOutputValue;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return "You just rolled a " + diceNumber + "!";
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "the door shall not open";
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " but you are nearly there!";
  } else {
    myOutputValue += " nope, this is far from the right phrase.";
  }
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  if (input * 2 == diceNumber) {
    myOutputValue =
      "Player guessed " +
      input +
      ". Dice rolls " +
      diceNumber +
      ". Player wins!";
  } else if (input * 2 != diceNumber) {
    myOutputValue =
      "Player guessed " +
      input +
      ". Dice rolls " +
      diceNumber +
      ". Player loses!";
  }
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
