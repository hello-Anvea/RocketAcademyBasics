var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var counter = 0;
  var myOutputValue = "";
  while (counter < input) {
    counter = counter + 1;
    myOutputValue += "👍";
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";
  var outerCounter = 0;
  while (outerCounter < input) {
    var innerCounter = 0;
    while (innerCounter < input - 1) {
      myOutputValue += "👍";
      innerCounter = innerCounter + 1;
    }
    myOutputValue += "👍 <br>";
    outerCounter = outerCounter + 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var outerCounter = 0;
  var myOutputValue = "";
  while (outerCounter < input) {
    var innerCounter = 0;
    while (innerCounter < outerCounter) {
      myOutputValue += "👍";
      innerCounter = innerCounter + 1;
    }
    myOutputValue += "👍 <br>";
    outerCounter = outerCounter + 1;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "";
  for (var outerCounter = 0; outerCounter < input; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < input - 1; innerCounter += 1) {
      if (
        (0 < innerCounter < input && outerCounter == 0) ||
        (0 < innerCounter < input && outerCounter == input - 1) ||
        innerCounter == 0
      ) {
        myOutputValue += "✊";
      } else myOutputValue += "👍";
    }
    if (outerCounter == 0 || outerCounter == input) {
      myOutputValue += "✊<br>";
    } else myOutputValue += "✊<br>";
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
