"use strict";
//
//
// function showMultiplicationTable(num) {
//     for (var i = 1; i < 11; i++) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
//
// }  showMultiplicationTable(5);
//
//
// for (var i = 1; i<11; i++) {
//     var numberSpecs = Math.floor(Math.random() * 180) + 20;
//     if (numberSpecs % 2 === 0) {
//         console.log(numberSpecs + " is even.");
//     } else {
//         console.log(numberSpecs + " is odd.");
//     }
// }
//
// // i is counting columns and j is counting rows!
// var output;
// for (i = 1; i <= 9; i++) {
//     output = "";
//     for (var j = 1; j <= i; j++) {
//         output += i;
//     }
//     console.log(output);
// }
//
// // start at 100, count down by 5 until you get to 5
// for (var i = 100; i > 0; i-=5) {
//     console.log(i);
// }
//
// function divisble(num) {
//     for (var i = 1; i<=100; i++){
//         if (i % 3 === 0){
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 15 === 0) {
//             console.log("Fizzbuzz");
//         } else
//             console.log(i);
//     }
// }
//
// console.log(divisble(1));

// function capitalLetter(string) {
//     var string = toString().toLowerCase();
//     var stringSplit = string.toString().split(" ");
//     for (var i = 0; i < stringSplit.length; i++) {
//         stringSplit[i] = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].substring(1, stringSplit[i].length);
//         string = stringSplit.join(" ");
//     }
//     return string;
// }
// console.log(capitalLetter("the QUICK bRown FOX JUMPED over the lazy dog."));


// function capitalLetter(str) {
//     str = str.toLowerCase().split(" ");
//
//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }
//
//     return str.join(" ");
// }
// console.log(capitalLetter("the QUICK brown FOX jumped OVER tHe lazY dog."));

// function multiply(a, b) {
//     return("i").repeat(a).repeat(b).length;
// }
// multiply(7, 7);

var sort = function (a, b, c, d, e) {
    var highest = [a, b, c, d, e]
    highest = highest.sort(function (a, b) {
        return b - a;
    });
    return highest;
}
console.log(sort(-16, 17, -2.5, -18, 26));

function eighty(a, b) {
    if ((a || b) === 80 || (a + b === 80)){
        return true;
    } else {
        return false;
    }
}
console.log(eighty(40, 20));

function pyAdding(str) {
    str = str.toLowerCase();
    if (str.substring(0,2) === "py"){
        return str;
    } else {
        str = "py"+str;
        return str;
    }

}
console.log(pyAdding("Romania"));


function highestNumber(a,b,c) {
    return Math.max(a,b,c);
}
console.log(highestNumber(49,"79",43));
























