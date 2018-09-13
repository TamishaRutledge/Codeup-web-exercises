"use strict";

// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }
//
// var allCones = Math.floor(Math.random() *50) +50;
//
// console.log("Good morning! I'm starting my day with " + allCones + " cones in my inventory today.");
//
// do {
//     var conesSold = (Math.floor(Math.random() *5) +1);
//
//     if (allCones >= conesSold) {
//         console.log("The customer ordered " + conesSold + " cones.");
//         allCones = allCones - conesSold;
//         console.log("I now have " + allCones + " left in my inventory.");
//
//     } else if (allCones < conesSold) {
//         console.log("I'm sorry, I only have " + allCones + " left.");
//     }
//     if (allCones > 0) {
//         console.log("Next customer, please!");
//     }
//
// } while (allCones > 0);
// console.log("Yay! I sold them all, I can go home.");
//
// var fruits = ["apple", "pear", "avocado", "pomegranate", "tomato", "watermelon"];
// var veggies = ["celery", "squash", "bell peppers", "broccoli", "onion"];
// var nails = ["almond", "stilleto", "ballerina"];
// var vacay = ["Hawaii", "Turks and Caicos", "Japan", "Germany"];
//
//
// var writeOut = function (input) {
//     for (var i = 0; i < input.length; i++) {
//         console.log(input[i]);
//     }
// }
//
// writeOut(vacay);
//
//
//
//
//
//
//
//
//     function divisble(i) {
//         for (var i = 1; i<=100; i++){
//             if (i % 3 === 0){
//                 console.log("Fizz");
//             } else if (i % 5 === 0) {
//                 console.log("Buzz");
//             } else if (i % 15 === 0) {
//                 console.log("Fizzbuzz");
//             } else {
//                 console.log(i);
//             }
//         }
//     }
//
// console.log(divisble(1));

// function fizzbuzz(){
//     for(var i = 1; i < 101; i++){
//         var output = "";
//         if( i % 3 == 0 || i% 5==0) {
//             if (i % 3 == 0) {
//                 output += "fizz";
//             }
//             if (i % 5 == 0) {
//                 output += "buzz"
//             }
//         }else{ output = i }
//         console.log(output);
//     }
// }

// fizzbuzz();

// function fizzbuzz(){
//     for(var i = 1; i < 101; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             console.log("fizzbuzz");
//             continue;
//         }
//         if (i % 3 == 0) {
//             console.log("fizz");
//             continue;
//         }
//         if (i % 5 == 0) {
//             console.log("buzz");
//             continue;
//         }
//
//         console.log(i);
//     }
//
//
// }
// fizzbuzz();




//FUNCTION needs to take in a SENTENCE. RETURN the LENGTH of the longest word.



// function lengthOfLongestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return longest;
// }
// console.log(lengthOfLongestWord("Aretha Franklin passed away today."));


function lengthOfLongestWord(sentence){
    var longest = 0;
    var indexOfLongest = 0;

    var wordsArray = sentence.split(" ");
    for (var i = 0; i < wordsArray.length; i++){
        if (wordsArray[i].length > longest) {
            longest = wordsArray[i].length;
            indexOfLongest = i;
        }
    }

        return longet;
}






































