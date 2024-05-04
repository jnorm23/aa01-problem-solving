/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/
//Step 1.Understanding the problem
//       Given a number, we need to determine if it is within 5 of 100.
//Step 2.Make a plan
//       1.Define a function called within5Of100 that takes a number as input.
//       2.Calculate the absolute difference between the given number and 100.
//       3.If the absolute difference is less than or equal to 5, return true; otherwise, return false.
//Step 3.Carry out the plan

function within5Of100(number) {
    // Calculate the absolute difference between the given number and 100
    var difference = Math.abs(number - 100);
    
    // Check if the difference is less than or equal to 5
    if (difference <= 5) {
        return true;
    } else {
        return false;
    }
}

//Step 4.Look back and improve your solution
//     Testing the function with some example inputs
console.log(within5Of100(95));   // >> true
console.log(within5Of100(100));  // >> true
console.log(within5Of100(105));  // >> true
console.log(within5Of100(90));   // >> false
console.log(within5Of100(106));  // >> false


/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/

// console.log(within5Of100(94));  //=> false
// console.log(within5Of100(95));  //=> true
// console.log(within5Of100(100)); //=> true
// console.log(within5Of100(105)); //=> true
// console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
