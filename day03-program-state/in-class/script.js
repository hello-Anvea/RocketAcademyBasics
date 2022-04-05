var secretWords = ["banana", "chisel", "faucet"];

var generateNumber = function (input) {
  var randomDigit = Math.random() * 3;
  var randomD = Math.floor(randomDigit);
  return randomD;
};

var correctguesses = 2;

var secretWordBaseMain = function (input) {
  var firstDigit = generateNumber();
  var secondDigit = generateNumber();
  var firstWord = secretWords[1];
  var secondWord = secretWords[2];

  if ((input == firstWord || input == secondWord) && correctguesses != 0) {
    correctguesses = correctguesses - 1;
    var myOutputValue =
      "You guessed " +
      input +
      ". That's a secret word! You need " +
      correctguesses +
      "correct guesses more to win!";
  } else if (
    (input != firstWord || input != secondWord) &&
    correctguesses != 0
  ) {
    var myOutputValue =
      "You guessed " +
      input +
      ". That's not a secret word! You need " +
      correctguesses +
      "correct guesses more to win!";
  } else {
    myOutputValue = "You win! All gud.";
  }
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  // To write down the series of 3 words
  // Generate 2 random numbers between 1-3
  // If input = word1 OR word2, wins +1, guesses + 1
  // If wins =/= 2, to prompt for input again
  // If input =/= word1 OR word2, error message + number of guesses more needed (i.e. 2 - wins)
  // Prompt for input again
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var within = function (input) {
  var randomDigit = Math.random() * 3;
  var randomD = Math.floor(randomDigit) + 1;
  return randomD;
};

var rollDice = function (input) {
  var randomDigitt = Math.random() * 6;
  var randomDd = Math.floor(randomDigitt) + 1;
  return randomDd;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var withinNumber = within();
  var rolledDice = rollDice();
  if (input < rolledDice - withinNumber || input > rolledDice + withinNumber) {
    var myOutputValue =
      "You guessed " +
      input +
      ". The within number is " +
      withinNumber +
      ". The rolled number is " +
      rolledDice +
      ". You lose!";
  } else
    myOutputValue =
      "You guessed " +
      input +
      ". The within number is " +
      withinNumber +
      ". The rolled number is " +
      rolledDice +
      ". You win!";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var withinNum = within();
  var rolledDice1 = rollDice();
  var rolledDice2 = rollDice();
  if (
    rolledDice1 - withinNum < input ||
    input < rolledDice1 + withinNum ||
    rolledDice2 - withinNum < input ||
    input < rolledDice2 + withinNum
  ) {
    var myOutputValue =
      "You guessed " +
      input +
      ". The within number is " +
      withinNum +
      ". The rolled number is " +
      rolledDice1 +
      " and " +
      rolledDice2 +
      ". You win!";
  } else
    myOutputValue =
      "You guessed " +
      input +
      ". The within number is " +
      withinNum +
      ". The rolled number is " +
      rolledDice1 +
      " and " +
      rolledDice2 +
      ". You lose!";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
