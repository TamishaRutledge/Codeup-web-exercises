"use strict";


function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }

}  showMultiplicationTable(5);


for (var i = 1; i<11; i++) {
    var numberSpecs = Math.floor(Math.random() * 180) + 20;
    if (numberSpecs % 2 === 0) {
        console.log(numberSpecs + " is even.");
    } else {
        console.log(numberSpecs + " is odd.");
    }
}

// i is counting columns and j is counting rows!
var output;
for (i = 1; i <= 9; i++) {
    output = "";
    for (var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

// start at 100, count down by 5 until you get to 5
for (var i = 100; i > 0; i-=5) {
    console.log(i);
}

function divisble(num) {
    for (var i = 1; i<=100; i++){
        if (i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 15 === 0) {
            console.log("Fizzbuzz");
        } else
            console.log(i);
    }
}

console.log(divisble(1));