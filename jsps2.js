function moneyCounting() {
    var pennies = parseInt(prompt("Enter the number of pennies")) * 0.01;
    var nickles = parseInt(prompt("Enter the number of nickles")) * 0.05;
    var dimes = parseInt(prompt("Enter the number of dimes")) * 0.10;
    var quarters = parseInt(prompt("Enter the number of quarters")) * 0.25;
    var sum = pennies + nickles + dimes + quarters;
    if (sum === 1) {
        console.log("Congratulations! You won!");
    }
    else if (sum < 1) {
        console.log("The amount you entered was less than one dollar.");
    }
    else if (sum > 1) {
        console.log("The amount you entered was more than one dollar.");
    }
}


function softwareSales() {
    var numOrdered = parseInt(prompt("Enter the number of packages ordered."));
    var packageCost = 100;
    var total = numOrdered * packageCost;
    if (numOrdered >= 10 && numOrdered <= 19) {
        console.log("Your discount is " + (total * .10) + " dollars.");
        console.log("The total amount after the discount is " + (total - (total * .10)) + " dollars.");
    }
    else if (numOrdered >= 20 && numOrdered <= 49) {
        console.log("Your discount is " + (total * .20) + " dollars.");
        console.log("The total amount after the discount is " + (total - (total * .20)) + " dollars.");
    }
    else if (numOrdered >= 50 && numOrdered <= 99) {
        console.log("Your discount is " + (total * .30) + " dollars.");
        console.log("The total amount after the discount is " + (total - (total * .30)) + " dollars.");
    }
    else if (numOrdered >= 100) {
        console.log("Your discount is " + (total * .40) + " dollars.");
        console.log("The total amount after the discount is " + (total - (total * .40))+ " dollars.");
    }
	else{
		console.log("Your discount is " + 0 + " dollars.");
		console.log("The total amount after the discount is " + (total) + " dollars.");
	}
}

function timeCalculator() {
    var secondInput = parseInt(prompt("Number of seconds"));
    var minutes = function(x) {
        console.log("Minutes: " + Math.floor(x / 60));
        return (x % 60);
    }
    var hours = function(x) {
        console.log("Minutes: " + Math.floor(x / 3600));
        return (x % 3600);
    }
    var days = function(x) {
        console.log("Minutes: " + Math.floor(x / 86400));
        return (x % 86400);
    }
    if (secondInput >= 60 && secondInput < 3600) {
        secondInput = minutes(secondInput);
        console.log("Seconds: " + secondInput);
    }
    else if (secondInput >= 3600 && secondInput < 86400) {
        secondInput = hours(secondInput);
        secondInput = minutes(secondInput);
        console.log("Seconds: " + secondInput);
    }
    else if (secondInput >= 86400) {
        secondInput = days(secondInput);
        secondInput = hours(secondInput);
        secondInput = minutes(secondInput);
        console.log("Seconds: " + secondInput);
    }
    else console.log("Seconds: " + secondInput);
}
function hotDogCalculator() {
// Put your solution to Exercise #4 here.
}
