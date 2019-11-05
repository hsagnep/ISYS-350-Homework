function propertyTax(value) {
// Put your solution to Exercise #1 here.
    var assesementValue = value * .6;
    var propertyTax = (assesementValue * .0072).toFixed(2);
    //console.log("Assessment Value is " + assesementValue)
    console.log("The Property tax is " + propertyTax);
    //Value being passed is 10000 but different results?
}

function futureValue(P,i,t) {
// Put your solution to Exercise #2 here.
    return (P * (1+i) ** t).toFixed(2);
}

function testScores() {
// Put your solution to Exercise #3 here.
    var gradeArray = Array()
    for (i=0,i<5,i++){
        gradeArray[i] = prompt(" Enter Grade " + i);
    }
    function calcAverage(gradeArray){
        var total = 0;
        for (i=0,i < gradeArray.length,i++){
            total += gradeArray[i];
        }
         console.log((total) / gradeArray.length);
    }
    function determineGrade(gradeArray){
        var response = Array("The letter grade for the 1st score is ", "The letter grade for the 2nd score is ","The letter grade for the 3rd score is ", "The letter grade for the 4th score is ", "The letter grade for the 5th score is ");
        for (i = 0, i < gradeArray.length,i++){
            if (gradeArray[i] < 60){
                console.log(response[-1] + "F" + ".");
            }
            else if (gradeArray[i] >= 60 && gradeArray[i] <= 69){
                console.log(response[-2] + "D" + ".";)
            }
            else if (gradeArray[i] >= 70 && gradeArray[i] <= 79){
                console.log(response[-3] + "C" +".");
            }
            else if (gradeArray[i] >= 80 && gradeArray[i] <= 89){
                console.log(response[-4] + "B" + ".");
            }
            else if (gradeArray[i] >= 90 && gradeArray[i]){
                console.log(response[-5] + "A" + ".");
            }

        }
    }
}
function paintJob(squareFeet) {
// Put your solution to Exercise #4 here
    var requiredPaint = (squareFeet /112);
    var requiredLabor = (squareFeet / 112) * 8;
    var billedPaint = requiredPaint * 15;
    var billedLabor = requiredLabor * 35;
    var totalBill = billedPaint + billedLabor;
    console.log(requiredPaint + " gallons of paint are required.");
    console.log(requiredLabor + " hours of labor are required.");
    console.log("The cost of the paint is $" + billedPaint + ".");
    console.log("The labor charges are $" + billedLabor + ".");
    console.log("The total cost is $" + totalBill + ".");

}
