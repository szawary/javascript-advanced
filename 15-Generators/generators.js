'use strict';


// TÖMBÖT JÁRUNK BE
const names = ['Pisti', 'Laci', 'Ági', 'Feri'];
for (let name of names) {       // bejárjuk a tömböt
    console.log(name);          // tömb elemeinek kiírása
};                              // csak a tömbre működik a FOR OF ciklus

console.log('------');

// RANGE ITERÁTOR KÉSZÍTÉS - generátor függvény, *-al jelzük
function* makeRangeItarator(start = 0, end = 100, step = 1) { // default értéket állítok be
    let iterationCount = 0;
    for (let i = start; i <= end; i += step) {
        iterationCount += 1;
        yield i;  // a lépéseknél megáll és visszaad egy értéket
    }
    console.log('Az iteration Count hossza: ', iterationCount);
    return iterationCount;
};

const it = makeRangeItarator(10, 40, 2);  // paramétere, amivel dolgozik
for (const num of it) {
    console.log(num);
}

console.log('------');


// OBJEKTUM ÁTADÁSA GENERÁTOR FÜGGVÉNYNEK
const user = {
    name: 'John Doe',
    email: 'jd@gmail.com',
    age: 45,
    address: 'Budapest',
}

function* getObjectValues(obj) {
    // a kapott object kulcsainak kiolvasása
    const keys = Object.keys(obj);
    keys.sort();    // módosítja az eredeti tömböt, abc rendbe teszi
    for (const key of keys) {
        yield obj[key];
    }
};

const userValues = getObjectValues(user);

for (const val of userValues) {
    console.log(val);
};