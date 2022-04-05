// Game options
options = ["scissors", "paper", "stone"];

// Generate random number between 1 to 3
var randomDigit = function () {
  var randomDecimal = Math.random() * 3;
  var diceNumber = Math.floor(randomDecimal);
  return diceNumber;
};

// Set initial game states
var currentMode = "Waiting for input";
var userName = "";

// Track wins
var wins = 0;
var rounds = 0;

// Normal game logic
var normalMode = function (userName, input) {
  var computerChoice = options[randomDigit()];
  if (computerChoice == "scissors" && input == "paper") {
    Message =
      "The computer chose scissors ✂️.<br>You chose paper 🗒. <br><br> You lose! Bummer. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "paper" && input == "scissors") {
    wins = wins + 1;
    Message =
      "The computer chose paper 🗒.<br>You chose scissors ✂️. <br><br> You win! Woohoo. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "stone" && input == "scissors") {
    Message =
      "The computer chose stone 💎.<br>You chose scissors ✂️. <br><br> You lose! Bummer. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "scissors" && input == "stone") {
    wins = wins + 1;
    Message =
      "The computer chose scissors ✂️.<br>You chose stone 💎.<br><br> You win! Woohoo. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "paper" && input == "stone") {
    Message =
      "The computer chose paper 🗒.<br>You chose stone 💎.<br><br> You lose! Bummer. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "stone" && input == "paper") {
    wins = wins + 1;
    Message =
      "The computer chose stone 💎.<br>You chose paper 🗒.<br><br> You win! Woohoo. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else {
    Message =
      "You chose " +
      input +
      ". Computer chose " +
      computerChoice +
      ". It's a tie! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }
  return Message;
};

// Reversed Mode where scissors beat stone, stone beats paper, and paper beats scissors.
var reversedMode = function (userName, input) {
  var computerChoice = options[randomDigit()];
  if (computerChoice == "scissors" && input == "reversed paper") {
    wins = wins + 1;
    Message =
      "The computer chose scissors ✂️.<br>You chose paper 🗒. <br><br> You WIN! Bamboozled!  Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "paper" && input == "reversed scissors") {
    Message =
      "The computer chose paper 🗒.<br>You chose scissors ✂️. <br><br> You LOSE! Bamboozled! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "stone" && input == "reversed scissors") {
    wins = wins + 1;
    Message =
      "The computer chose stone 💎.<br>You chose scissors ✂️. <br><br> You WIN! Bamboozled! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "scissors" && input == "reversed stone") {
    Message =
      "The computer chose scissors ✂️.<br>You chose stone 💎.<br><br> You LOSE! Bamboozled! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "paper" && input == "reversed stone") {
    wins = wins + 1;
    Message =
      "The computer chose paper 🗒.<br>You chose stone 💎.<br><br> You You WIN! Bamboozled! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "stone" && input == "reversed paper") {
    Message =
      "The computer chose stone 💎.<br>You chose paper 🗒.<br><br> You LOSE! Bamboozled! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else {
    Message =
      "You chose " +
      input +
      ". Computer chose " +
      computerChoice +
      ". It's a tie! Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }
  return Message;
};

var main = function (input) {
  if (currentMode == "Waiting for input") {
    // Set the name
    userName = input;
    currentGameMode = "sps";
  } else currentMode == "sps";
  if (
    ((currentMode = "sps") && input == "scissors") ||
    input == "stone" ||
    input == "paper"
  ) {
    rounds = rounds + 1;
    var myOutputValue = normalMode(userName, input);
  } else if (
    ((currentMode = "sps") && input == "reversed scissors") ||
    input == "reversed stone" ||
    input == "reversed paper"
  ) {
    rounds = rounds + 1;
    myOutputValue = reversedMode(userName, input);
  } else myOutputValue = "Please key in a valid input";
  if (wins > rounds / 2) {
    myOutputValue +=
      ". So far, you've been winning " + wins + "/" + rounds + ". Pretty good!";
  } else if (wins < rounds / 2) {
    myOutputValue +=
      ". <br><br>So far, " +
      userName +
      " you've been winning " +
      wins +
      "/" +
      rounds +
      ". Keep trying!";
  } else myOutputValue = "Now key in 'scissors', 'paper' or 'stone' to play!";
  return myOutputValue;
};
