// Game options
options = ["scissors", "paper", "stone"];

// Generate random number between 1 to 3
var randomDigit = function () {
  var randomDecimal = Math.random() * 1;
  var diceNumber = Math.floor(randomDecimal);
  return diceNumber;
};

// Set initial game states
var currentMode = "Waiting for username";
var userName = "";
var select = "";

// Track wins for general
var wins = 0;
var losses = 0;
var ties = 0;
var rounds = 0;

// Korean mode track previous, where 1 is computer, 2 is player and 3 is tie
var lastWinner = 0;
var currentWinner = 0;
var koreanWins = 0;
var koreanLosses = 0;

// Normal game logic
var normalMode = function (userName, currentMode, input) {
  if (input != "paper" && input != "stone" && input != "scissors") {
    Message = "Please key in a valid option.";
    return Message;
  } else Message = "";
  var computerChoice = options[randomDigit()];
  if (computerChoice == "scissors" && input == "paper") {
    losses = losses + 1;
    Message =
      "The computer chose scissors ✂️.<br>You chose paper 🗒. <br><br> You lose! Bummer. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "paper" && input == "scissors") {
    wins = wins + 1;
    Message =
      "The computer chose paper 🗒.<br>You chose scissors ✂️. <br><br> You win! Woohoo. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "stone" && input == "scissors") {
    losses = losses + 1;
    Message =
      "The computer chose stone 💎.<br>You chose scissors ✂️. <br><br> You lose! Bummer. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "scissors" && input == "stone") {
    wins = wins + 1;
    losses = losses + 1;
    Message =
      "The computer chose scissors ✂️.<br>You chose stone 💎.<br><br> You win! Woohoo. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "paper" && input == "stone") {
    losses = losses + 1;
    Message =
      "The computer chose paper 🗒.<br>You chose stone 💎.<br><br> You lose! Bummer. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else if (computerChoice == "stone" && input == "paper") {
    wins = wins + 1;
    Message =
      "The computer chose stone 💎.<br>You chose paper 🗒.<br><br> You win! Woohoo. Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  } else {
    ties = ties + 1;
    Message =
      "You chose " +
      input +
      ". <br>Computer chose " +
      computerChoice +
      ". <br><br>It's a tie! 👔 Now you can type 'scissors' 'paper' or 'stone' to play another round!";
  }
  return Message;
};

// Reversed Mode
var koreanMode = function (userName, currentMode, input) {
  if (input != "paper" && input != "stone" && input != "scissors") {
    Message = "Please key in a valid option.";
    return Message;
  } else Message = "";
  var computerChoice = options[randomDigit()];
  if (computerChoice == "scissors" && input == "paper") {
    losses = losses + 1;
    currentWinner = 1;
    Message = "You chose " + input + ". Computer chose " + computerChoice + ".";
  } else if (computerChoice == "paper" && input == "scissors") {
    wins = wins + 1;
    currentWinner = 2;
    Message = "You chose " + input + ". Computer chose " + computerChoice + ".";
  } else if (computerChoice == "stone" && input == "scissors") {
    losses = losses + 1;
    currentWinner = 1;
    Message = "You chose " + input + ". Computer chose " + computerChoice + ".";
  } else if (computerChoice == "scissors" && input == "stone") {
    wins = wins + 1;
    currentWinner = 2;
    Message = "You chose " + input + ". Computer chose " + computerChoice + ".";
  } else if (computerChoice == "paper" && input == "stone") {
    losses = losses + 1;
    currentWinner = 1;
    Message = "You chose " + input + ". Computer chose " + computerChoice + ".";
  } else if (computerChoice == "stone" && input == "paper") {
    wins = wins + 1;
    currentWinner = 2;
    Message +=
      "You chose " + input + ". Computer chose " + computerChoice + ".";
  } else {
    ties = ties + 1;
    Message +=
      "You chose " +
      input +
      ". Computer chose " +
      computerChoice +
      ". It's a tie!";
  }
  if (currentWinner == 1 && (lastWinner == 2 || lastWinner == 0)) {
    Message += " Computer: muk-jji-ppa!";
    lastWinner = currentWinner;
  } else if (currentWinner == 2 && (lastWinner == 1 || lastWinner == 0)) {
    Message += " Player: muk-jji-ppa!";
    lastWinner = currentWinner;
  } else if (currentWinner == 3 && lastWinner == 3) {
    Message += "It's a tie!";
    lastWinner = 0;
  } else if (currentWinner == 1 && lastWinner == 1) {
    koreanLosses = koreanLosses + 1;
    Message +=
      " Computer wins! <br><br>Times played: " +
      rounds +
      "<br> Wins: " +
      koreanWins +
      "<br> Losses: " +
      koreanLosses +
      "<br> Ties: " +
      ties;
    lastWinner = 0;
  } else if (currentWinner == 2 && lastWinner == 2) {
    koreanWins = koreanWins + 1;
    Message +=
      " Player wins! <br><br>Times played: " +
      rounds +
      "<br> Wins: " +
      koreanWins +
      "<br> Losses: " +
      koreanLosses +
      "<br> Ties: " +
      ties;
    lastWinner = 0;
  } else
    Message +=
      "<br><br>Number of rounds: " + rounds + "<br> Last Winner:" + lastWinner;
  return Message;
};

var main = function (input) {
  if (currentMode == "Waiting for username") {
    userName = input;
    currentMode = "Choose mode";
    var myOutputValue =
      "Hello " +
      userName +
      ". Now choose 1 for normal mode and 2 for Korean mode.";
  } else if (currentMode == "Choose mode" && input == "1") {
    currentMode = "sps";
    myOutputValue =
      "Chosen mode: Normal. Now you can type 'scissors' 'paper' or 'stone' to play a round!";
    // myOutputValue = normalMode(userName, currentMode, input);
  } else if (currentMode == "Choose mode" && input == "2") {
    currentMode = "mjp";
    myOutputValue =
      "Chosen mode: Korean. Now you can type 'scissors' 'paper' or 'stone' to play a round!";
  } else if (currentMode == "sps") {
    rounds = rounds + 1;
    myOutputValue = normalMode(userName, currentMode, input);
    myOutputValue +=
      "<br><br>Times played: " +
      rounds +
      "<br> Wins: " +
      wins +
      "<br> Losses: " +
      losses +
      "<br> Ties: " +
      ties;
  } else if (currentMode == "mjp") {
    rounds = rounds + 1;
    myOutputValue = koreanMode(userName, currentMode, input);
  } else myOutputValue = "You are still lost";
  return myOutputValue;
};
