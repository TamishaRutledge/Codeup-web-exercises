"use strict";

var i = 2;
while (i <= 65536) {
    console.log(i);
    i *= 2;
}

var allCones = Math.floor(Math.random() *50) +50;

console.log("Good morning! I'm starting my day with " + allCones + " cones in my inventory today.");

do {
    var conesSold = (Math.floor(Math.random() *5) +1);

    if (allCones >= conesSold) {
        console.log("The customer ordered " + conesSold + " cones.");
        allCones = allCones - conesSold;
        console.log("I now have " + allCones + " left in my inventory.");

    } else if (allCones < conesSold) {
        console.log("I'm sorry, I only have " + allCones + " left.");
    }
    if (allCones > 0) {
        console.log("Next customer, please!");
    }

} while (allCones > 0);
console.log("Yay! I sold them all, I can go home.");



