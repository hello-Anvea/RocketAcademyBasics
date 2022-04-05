var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var diceNumber = Math.floor(randomDecimal) + 1;
  return diceNumber;
};

var appSetupMain = function (input) {
  var randomDiceNumber = rollDice();
  if (randomDiceNumber == input) {
    myOutputValue =
      "You guessed " +
      input +
      ". Number rolled is " +
      randomDiceNumber +
      ". You win!";
  } else
    myOutputValue =
      "You guessed " +
      input +
      ". Number rolled is " +
      randomDiceNumber +
      ". You lose.";
  return myOutputValue;
};

let guesses = 0;
var pastRolls = [0];
var diceRoll = function () {
  var randomDec = Math.random() * 6;
  var diceNum = Math.floor(randomDec) + 1;
  return diceNum;
};
var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDice = diceRoll();
  pastRolls.push(randomDice);
  var previousGuess = pastRolls[guesses];
  guesses = guesses + 1;
  if (randomDice == input) {
    var myOutputValue =
      "Your last roll was " +
      previousGuess +
      ". You just rolled a " +
      randomDice +
      ". You guessed " +
      input +
      ". You win!";
  } else {
    myOutputValue =
      "Your last roll was " +
      previousGuess +
      ". You just rolled a " +
      randomDice +
      ". You guessed " +
      input +
      ". You lose.";
  }
  return myOutputValue;
};

let wins = 0;
let losses = 0;
var winRate = (wins / (wins + losses)) * 100;
var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var dice = diceRoll();
  if (input == dice) {
    wins = wins + 1;
  } else losses = losses + 1;
  if (input == dice) {
    var myOutputValue =
      "You win " +
      winRate +
      "% of the time. You just rolled a " +
      dice +
      ". You guessed " +
      input +
      ". You win!";
  } else
    myOutputValue =
      "You win " +
      winRate +
      "% of the time. You just rolled a " +
      dice +
      ". You guessed " +
      input +
      ". You lose!";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var score = 0;
var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var dice = diceRoll();
  if (Math.abs(dice - input) == 1) {
    score = score + 1;
  }
  if (input == dice) {
    score = score + 2;
  }
  var myOutputValue =
    "You guessed " + input + ". You rolled a " + dice + ". Score: " + score;
  return myOutputValue;
};

var score1 = 0;
var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var dice = diceRoll();
  if (dice == input) {
    score1 = score1 + 5;
  } else if (Math.abs(dice - input) == 3) {
    score1 = score1 + 2;
  } else if (Math.abs(dice - input) == 2) {
    score1 = score1 + 3;
  } else if (Math.abs(dice - input) == 1) {
    score1 = score1 + 4;
  } else if (Math.abs(dice - input) == 4) {
    score1 = score1 + 1;
  }
  var myOutputValue =
    "You guessed " +
    input +
    ". You rolled " +
    dice +
    ". Your score now is " +
    score1 +
    ".";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
