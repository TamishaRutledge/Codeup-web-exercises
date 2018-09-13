"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var enterNumber = confirm("Would you like to enter a number?");
// var number = prompt("Please enter a number.");
//
// function isEvenOrOdd(number) {
//     if (parseInt(number) % 2 === 0) {
//         return ("Your Number Is Even");
//     } else {
//         return ("Your Number Is Odd");
//     }
// }
//
// function add100(number) {
//     return (number+100);
// }
//
// function negativeOrPositive(number) {
//     if (parseInt(number) < 0) {
//         return ("Your number is negative.");
//     } else {
//         return ("Your number is positive.");
//     }
// }
//
// if (enterNumber) {
//     alert(isEvenOrOdd(number));
//     alert("your number plus 100 is: " + (add100 (parseInt(number))));
//     alert(negativeOrPositive(parseInt(number)));
// } else {
//     alert("Number not entered.");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var enterColor = confirm("Would you like to enter the name of a color?");
//
// function analyzeColor(input) {
//     if (input === "blue") {
//         return ("blue is the color of the sky");
//     } else if (input === "red") {
//         return ("Strawberries are red");
//     } else if (input === "cyan") {
//         return ("I don't know anything about cyan");
//     } else (input != "blue" || input != "red" || input != "cyan");
//         return ("You entered an inappropriate color");
// }
//
// if (enterColor) {
//     var choiceColor = prompt("Enter the name of a color please.");
//     alert(analyzeColor(choiceColor));
// }   else {
//     alert("You did not want to enter a color.");
 // }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// function analyzeColor(colors) {
//     return randomColor;
// }
// console.log(analyzeColor(colors));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var choiceColor = prompt("Enter the name of a color please.");
// //
// function analyzeColor(choiceColor) {
//     return choiceColor;
// }
//
// alert(analyzeColor("The color you chose was: " + choiceColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var discountCode = [0, 1, 2, 3, 4, 5];
// var luckyNumber = discountCode[Math.floor((Math.random() * 5))];
// var discountedPrice = prompt("what was your purchase total?");
//
// function calculateTotal(luckyNumber) {
//     if (luckyNumber === 0) {
//         return discountedPrice;
//     } else if (luckyNumber === 1) {
//         return (discountedPrice - (discountedPrice* .1));
//     } else if (luckyNumber === 2) {
//         return (discountedPrice - (discountedPrice* .25));
//     } else if (luckyNumber === 3) {
//         return (discountedPrice - (discountedPrice* .35));
//     } else if (luckyNumber === 4) {
//         return (discountedPrice - (discountedPrice* .5));
//     } else (luckyNumber === 5)
//         return (discountedPrice - discountedPrice);
//
//
// }
//
// alert("Your discount number is: " + luckyNumber);
// alert("Your total price is: $ " + calculateTotal(luckyNumber));








/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = prompt("what was your purchase total?");
//
// function calculateTotal(luckyNumber) {
//     if (luckyNumber === 0) {
//         return totalBill;
//     } else if (luckyNumber === 1) {
//         return (totalBill - (totalBill* .1));
//     } else if (luckyNumber === 2) {
//         return (totalBill - (totalBill* .25));
//     } else if (luckyNumber === 3) {
//         return (totalBill - (totalBill* .35));
//     } else if (luckyNumber === 4) {
//         return (totalBill - (totalBill* .5));
//     } else if (luckyNumber === 5) {
//         return (totalBill - (totalBill * .75));
//     } else (luckyNumber === 6)
//     return (totalBill - totalBill);
//
//
// }
//
// alert("Your discount number is: " + luckyNumber);
// alert("Your total price is: $ " + calculateTotal(luckyNumber));

// var hitMe = function () {
//     return Math.floor((Math.random() * 100) + 1)
// }
// var count = 0;
// if (confirm("Do you want to play a game?")) {
//     while (count <= 21) {
//         if (confirm("Your score is " + count + ". Do you want another card?")){
//             count += hitMe();
//         } else {
//             break;
//         }
//     }
//     if (count > 21) {
//         alert("You busted!!!");
//     }
//     else {
//         alert("Your score is " + count);
//     }
// }

if (confirm("Do you want to play a game?")) {
    var magicNumber = Math.floor((Math.random() * 100) + 1);
    var ourGuess;

    do {
        ourGuess = parseInt(prompt("Guess a number between 1 and 100"))
        if (ourGuess < magicNumber) {
            alert("Your guess is too low");
        } else if (ourGuess > magicNumber) {
            alert("Your guess is too high");
        }
    } while (ourGuess !== magicNumber)
    alert("Congratulations, you guessed it!!")
}


























