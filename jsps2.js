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
    var packageCost = 99;
    var total = numOrdered * packageCost;
    var finalPrice = total - (total * discount)
    if (numOrdered >= 10 && numOrdered <= 19) {
        var discount = .10;
        console.log("Discount: " + total * discount);
        cosole.log("Total: " + finalPrice)
    }
    else if (numOrdered >= 20 && numOrdered <= 49) {
        var discount = .20;
        console.log("Discount: " + total * discount);
        cosole.log("Total: " + finalPrice)
    }
    else if (numOrdered >= 50 && numOrdered <= 99) {
        var discount = .30;
        console.log("Discount: " + total * discount);
        cosole.log("Total: " + finalPrice)
    }
    else if (numOrdered >= 100) {
        var discount = .40;
        console.log("Discount: " + total * discount);
        cosole.log("Total: " + finalPrice)
    }
}
function timeCalculator() {
    var secondInput = parseInt(prompt("Number of seconds"));
    if (secondInput >= 60) {
        console.log(secondInput / 60);
    }
    else if (secondInput >= 3600) {
        console.log(secondInput / 3600);
    }
    else if (secondInput >= 86400) {
        console.log(secondInput / 86400);

    }
    else {
        console.log(secondInput);
    }
}

function hotDogCalculator() {
// Put your solution to Exercise #4 here.
}
