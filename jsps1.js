function printPoem() {
	console.log("Roses are red,");
	console.log("Violets are blue,");
	console.log("I know programming's hard,");
	console.log("But you'll make it through.");
}
printPoem()



function printName() {
	var firstName = prompt("Please enter your first name: ");
	var lastName = prompt("Please enter your last name: ");
	console.log("Nice to meet you " + lastName + ", " + firstName + "."); 
}



function profitPrediction() {
	var projectedSales = parseInt(prompt("Projected amount of total sales for next year"));
	var profitPercentage = parseFloat(prompt("Profit Percentage"))/100;
	console.log("Your projected profit on " + projectedSales +  " dollars is " + (profitPercentage * projectedSales) + " dollars.");

}


function totalPurchase() {
	var item1 = parseFloat(prompt("Price of item 1"));
	var item2 = parseFloat(prompt("Price of item 2"));
	var item3 = parseFloat(prompt("Price of item 3"));
	var item4 = parseFloat(prompt("Price of item 4"));
	var item5 = parseFloat(prompt("Price of item 5"));
	var taxRate = parseFloat(.07);
	var subTotal = item1+item2+item3+item4+item5;
	var salesTax = subTotal * taxRate;
	var totalAmount = subTotal + salesTax
	console.log("The subtotal of the sales is " + subTotal + " dollars.");
	console.log("The amount of the sales tax is " + salesTax + " dollars.");
	console.log("The total amount is " + totalAmount + " dollars.");

}


