function tuitionCount() {
// Put your solution to Exercise #1 here.
    var tuition = 8000;
    for (i = 0; i < 5; i++) {
        tuition += (tuition * .03);
    }
    console.log("The tuition amount will be " + Math.floor(tuition) + " dollars.");
}


function budgetAnalysis() {
// Put your solution to Exercise #2 here.


}


function penniesFromHeaven() {
// Put your solution to Exercise #3 here.
    var days = 1;
    var pennies = 1;
    while (pennies <= 100000000) {
        pennies += 2 ** days;
        days += 1;
    }
    console.log("It takes " + (days+1) + " days to reach $1,000,000.");
}



function hiLo() {
// Put your solution to Exercise #4 here
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guess = 101;
    while (guess != randomNumber) {
        guess = parseInt(prompt("Enter Guess: "));
        if (guess < randomNumber) {
            console.log("Guess was too low");
        }
        else if (guess > randomNumber) {
            console.log("Guess was too high");
        }
        else if (guess == randomNumber) {
            console.log("You Won");
            break;
        }
    }
}

//function hiLo() {
//// Put your solution to Exercise #4 here
//    var randomNumber = Math.floor(Math.random() * 100) + 1;
//    var guess = parseInt(prompt("Enter Guess: "));
//    while (guess != randomNumber) {
//        if (guess < randomNumber) {
//            console.log("Guess was too low");
//        }
//        else if (guess > randomNumber) {
//            console.log("Guess was too high");
//        }
//        else if (guess == randomNumber) {
//            console.log("You Won");
//            break;
//        }
//        randomNumber = Math.floor(Math.random() * 100) + 1;
//    }
//}
