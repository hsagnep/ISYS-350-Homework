function moneyCounting() {
//Prompt user to number amount of pennies, nickles, dimes, and quarters they have. Multiply it by their respective values to get a dollar amount.
    var pennies = parseInt(prompt("Enter the number of pennies")) * 0.01;
    var nickles = parseInt(prompt("Enter the number of nickles")) * 0.05;
    var dimes = parseInt(prompt("Enter the number of dimes")) * 0.10;
    var quarters = parseInt(prompt("Enter the number of quarters")) * 0.25;
//Sum together the pennies,nickles,dimes, and quarters to get the total amount you have.
    var sum = pennies + nickles + dimes + quarters;
   //If the sum of your pennies, nickles, and quarters are equal to 1 you win the game.
    if (sum === 1) {                                                                            
        console.log("Congratulations! You won!");
    }
    //If the sum of your pennies, nickles, and quarters are less than 1 you lose the game.
    else if (sum < 1) {
        console.log("The amount you entered was less than one dollar.");
    }
  //If the sum of your pennies, nickles, and quarters are greater than 1 you lose the game.
    else if (sum > 1) {
        console.log("The amount you entered was more than one dollar.");
    }
}

function softwareSales() {
//Prompt the user to ask how many packages they ordered.
    var numOrdered = parseInt(prompt("Enter the number of packages ordered."));
    var packageCost = 100;
//Total cost before the discount is the number of packages ordered multiplied by the price of each package
    var total = numOrdered * packageCost;
//If the number of packages ordered is greater than or equal to 10 and less than or equal to 19 give a 10%(.10) discount. Repeat steps for other discount percentages and respective ranges.
    if (numOrdered >= 10 && numOrdered <= 19) {
//The discount is your total multiplied by the discount percentage. 
        console.log("Your discount is " + (total * .10) + " dollars.");
//The total amount being paid after the discount is total minus the (total multiplied by discount).
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
 //If the number ordered is less than 10 packages there will be no discount given.
	else{
		console.log("Your discount is " + 0 + " dollars.");
		console.log("The total amount after the discount is " + (total) + " dollars.");
	}
}

function timeCalculator() {
//Get input of seconds from user
    var secondInput = parseInt(prompt("Number of seconds"));
//Calculates how many seconds are left after finding how many days, hours, and minutes there are.
    var seconds = Math.floor(((secondInput % 86400) % 3600) % 60);
//Calculates how many minutes there are in N number of seconds after finding how many days and hours there are.
    var minutes = Math.floor(((secondInput % 86400) % 3600) / 60);
//Calculates how many hours there are in N number of seconds after finding how many days there are.
    var hours = Math.floor((secondInput % 86400) / 3600);
//Calculates how many days there are in N number of seconds.
    var days = Math.floor(secondInput / 86400);
//If the input is greater than or equal to 60 and less than 3600 this code will execute. Outputting minutes and seconds.
    if (secondInput >= 60 && secondInput < 3600) {
        console.log("Minutes: " + (minutes));
        console.log("Seconds: " + (seconds));
    }
//If the input is less than or equal to 3600 and less than 86400 this code will execute. Outputting hours, minutes, and seconds.
    else if (secondInput >= 3600 && secondInput < 86400) {
        console.log("Hours: " + (hours));
        console.log("Minutes: " + minutes);
        console.log("Seconds: " + (seconds));
    }
//If the input is greater or equal to 86400 then this code will execute. Outputting days, hours, minutes, and seconds.
    else if (secondInput >= 86400) {
        document.write("Days: " + (days));
        document.write("Hours: " + (hours));
        document.write("Minutes: " + (minutes));
        document.write("Seconds: " + (seconds));
    }
//If the input is less than 60 then this code will execute. Outputting seconds.
    else if (secondInput < 60) {
        document.write("Seconds: " + secondInput);
    }
}

function colorMixer() {
//Prompt user for the colors they have.
    var firstColor = prompt("Enter first color: ").toLowerCase();
    var secondColor = prompt("Enter second color: ").toLowerCase();
    var primaryColors = ["red", "blue", "yellow"];
//Checks to see if user input is in the list of primaryColors.
    if (primaryColors.includes(firstColor) && primaryColors.includes(secondColor)) {
//If the user input is in the list of primaryColors the logic for finding the secondaryColors will start.
//If firstColor or secondColor is equal to the string "red" and if firstColor or secondColor is equal to "blue" then output "When you mix red and blue, you get purple.".
        if ((firstColor == "red" || secondColor == "red") && (secondColor == "blue" || firstColor == "blue")) {
            console.log("When you mix red and blue, you get purple.");
        }
//If firstColor or secondColor is equal to the string "red" and if firstColor or secondColor is equal to "yellow" then output "When you mix red and yellow, you get orange.".
        else if ((firstColor == "red" || secondColor == "red") && (secondColor == "yellow" || firstColor == "yellow")) {
            console.log("When you mix red and yellow, you get orange.");
        }
//If firstColor or secondColor is equal to the string "blue" and if firstColor or secondColor is equal to "yellow" then output "When you mix blue and yellow, you get green.".
        else if ((firstColor == "blue" || secondColor == "blue") && (secondColor == "yellow" || firstColor == "yellow")) {
            console.log("When you mix blue and yellow, you get green.");
        }
    }
//If the input for firstColor and secondColor are the same color then print the input because it two same colors will yield the same color.
    else if (firstColor == secondColor) {
        console.log("When you mix " + firstColor + " and " + secondColor + " , you get " + firstColor + ".");


    }
  //If either input of firstColor or secondColor is not in the list of primaryColors then print out "One of the colors you entered was not a primary color.".
    else {
        console.log("One of the colors you entered was not a primary color.");
    }
}
