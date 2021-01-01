'use strict';

const jsonUrl = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-15.epl-stats.json';

// párhuzamos végrehajtást tesz lehetővé
// csak egyszer ad eredmény, vagy ezt vagy azt

/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hiba');
        resolve(5);
    }, 3000);
});

promise1.then(                  // csak az egyik fut le!!!
    data => console.log(data),
    err => console.error(err), // itt megszűnik a promise, vagy ez vagy az a kimenet.
);
 */

console.time('pr'); // indítok egy órát a konzolon

fetch(jsonUrl).then(
    // resp => console.log(resp),
    // resp => resp.json(),
    function (response) {
        return response.json();
    },
).then( // sikeresség esetén ez fut le
    data => {
        console.log(data);
        console.timeEnd('pr');
    },
).catch( // mi van akkor ha hiba történik
    err => console.error(err),
);
// bármennyi then és catch águnk lehet!!
