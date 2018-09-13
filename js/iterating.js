(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    console.log("********");

    var names = ["Iron Man", "Thor", "Groot", "Okoye"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The number of elements on the array is " + names.length);

    console.log("******");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("*******");

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

        console.log("*******")
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    function avengers(names){
        console.log(names + ", Thanos is coming...he's coming!");
    }

    names.forEach(avengers);

    console.log("*********");
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var skin = ["Origins", "Keihls", "Drunk Elephant", "Shiesdo", "Cure", "Aveeno"];

    function first(skin){
        console.log(skin[0]);
    }
    first(skin);
    function second(skin){
        console.log(skin[1]);
    }
    second(skin);
    function secondToLast(skin) {
        console.log(skin[skin.length -2]);
    }
    secondToLast(skin);
    function last(skin){
        console.log(skin[skin.length -1]);
    }
    last(skin);

console.log("*********");

})();
