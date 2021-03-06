(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstname: "Tamisha",
        lastname: "Rutledge",
    }

    person.logLastnameFirstname = function (){
        console.log("Hello from " + this.firstname + " " + this.lastname);
    }

    console.log(person.firstname);
    console.log(person.lastname);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.logLastnameFirstname();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //forEach loop with some ifs and elses
    shoppers.forEach(function (shopper){
        if (shopper.amount - 200 > 0) {
            console.log(shopper.name + ", your total amount was: $" + shopper.amount.toFixed(2) + "; you have received a 12% discount, you're new amount is: $" + (shopper.amount - (shopper.amount* (12 / 100))).toFixed(2));
        } else {
            console.log(shopper.name + ", your total amount was: $" + shopper.amount.toFixed(2) + "; you have not purchased enough items to qualify for a discount. Your bill is: $" + shopper.amount.toFixed(2));
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "No Excuses",
            author: {
                firstname: "Brian",
                lastname: "Tracy",
            }
        },
        {
            title: "I'm Judging You, The Do-Better Manual",
            author: {
                firstname: "Luvvie",
                lastname: "Ajayi",
            }
        },
        {
            title: "Fast Food Genocide",
            author: {
                firstname: "John",
                lastname: "Furmund, M.D.",
            }
        },
        {
            title: "Who Move My Cheese",
            author: {
                firstname: "Spencer",
                lastname: "Johnson",
            }
        },
        {
            title: "Misadventures of Awkward Black Girl",
            author: {
                firstname: "Issa",
                lastname: "Rae",
            }
        },
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstname);
    console.log(books[0].author.lastname);
    console.log(books[1].title);
    console.log(books[1].author.firstname);
    console.log(books[1].author.lastname);
    console.log(books[2].title);
    console.log(books[2].author.firstname);
    console.log(books[2].author.lastname);
    console.log(books[3].title);
    console.log(books[3].author.firstname);
    console.log(books[3].author.lastname);
    console.log(books[4].title);
    console.log(books[4].author.firstname);
    console.log(books[4].author.lastname);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// Loop (element, index, array)
    for (var i = 0; i < books.length; i++){
        console.log("Book # " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstname + " " + books[i].author.lastname);
        console.log("---------------")
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();


















