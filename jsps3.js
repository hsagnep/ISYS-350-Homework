function tuitionCount() {
  // Put your solution to Exercise #1 here.
  var tuition = 8000;
  for (i = 0; i < 5; i++) {
    tuition += tuition * 0.03;
  }
  console.log(
    "The tuition amount will be " + Math.floor(tuition) + " dollars."
  );
}

function budgetAnalysis() {
  var budget = parseInt(prompt("Enter budget: "));
  var total = 0;
  while (total < budget) {
    total += parseInt(prompt("Enter expenses"));
  }
  if (total >= budget) {
    console.log(
      "You overspent your budget by " + (total - budget) + " dollars."
    );
  }
}

function penniesFromHeaven() {
  var days = 1;
  var pennies = 1;
  while (pennies <= 100000000) {
    pennies += 2 ** days;
    days += 1;
  }
  console.log("It takes " + (days + 1) + " days to reach $1,000,000.");
}

function hiLo() {
  setInterval(function() {
    setTimeout(() => 1, 1);
  }, 1);
  var randomNumber = 94;
  var currentGuess;
  while (currentGuess !== randomNumber) {
    currentGuess = parseInt(prompt("Enter guess"));
    if (currentGuess < randomNumber) {
      console.log("Your guess " + currentGuess + ", was to low.");
    } else if (currentGuess > randomNumber) {
      console.log("Your guess " + currentGuess + ", was to high.");
    }
  }
  console.log("You guessed the right number, " + randomNumber + ".");
}
