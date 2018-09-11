"use strict";

function wait(milliSeconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliSeconds);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function userCommits(username = 'TamishaRutledge') {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${gitToken}`}})
        .then(response => response.json())
        .then(data => {
            for(event of data){
                if (event.type === "PushEvent") {
                    let l = event.payload.commits.length;
                    return event.payload.commits[l -1].url;
                }
            }
        })
        .then(url => {
            return fetch(url, {headers: {'Authoriation': `token ${gitToken}`}});
        })
}
 console.log(userCommits());