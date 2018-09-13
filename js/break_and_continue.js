"use strict";

function isNumeric(n) {
    return !isNaN(parseFloat(n));
}

function isOdd(n) {
    return n % 2 !== 0;
}

var userNumber;

do {
    userNumber = prompt("Please input an odd number between 1 and 50.");

    if(isOdd(userNumber) && isNumeric(userNumber) && userNumber >= 1 && userNumber <= 50) {
        break;
    }
} while(true);

for(var i = 1; i <= 50; i+=2) {
    if(i == userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log("Here's an odd number " + i);
}