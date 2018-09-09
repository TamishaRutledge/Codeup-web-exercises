"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Always refresh the page so the console doesn't think you are trying to reassign const or lets//

let  tripleLanguages = users.filter(user => user.languages.length > 2 );
console.log(tripleLanguages);

let emailAddresses = users.map(user => user.email);
console.log(emailAddresses);

const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience/users.length;
},0);
 console.log(totalYears);
//
// // I DON'T NEED THE NUMBER 19....I NEED THE EMAIL STRING!!!!
let longestEmail = users.reduce((acc, user) => {
    if (user.email.length > acc.length){
        acc = user.email;
    }
    return acc;
}, "");
 console.log(longestEmail);

//Eplisis is a spread syntax
let allTheNames = users.reduce((prev, curr) => [prev, curr.name], []).join(',');
console.log("Your instructors are" + allTheNames);
