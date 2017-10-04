let userInput, userQuestion, defaultText;
userQuestion = "What is your number?";
defaultText = "Type your answer here.";
userInput = prompt(userQuestion, defaultText);
let integer;
integer = (Number.isInteger(userInput));
  if (true) {
    $("#response").html("This is an integer!");
  }
  if (false) {
    $("#response").html("This is not an integer!");
  }
