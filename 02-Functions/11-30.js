'use strict';

// function functionName (parameterek azaz bemeneti adatok) {
//     utasítások;
//    return visszatéréséi érték; ezzel jön vissza függvény
// }


function sum(a, b) {
    return a + b;
}

const sum2 = (a, b) => a + b;



function log(value) {
    // const value = sum(10, 20);
    console.log(value);
}

//const value = sum(10, 30);
//log(value);

log(sum2(45, 323));
log(sum(10, 50));

const numbers = [1, 2, 3, 4, 5];
//hozzáad egy elemet
const appendElement = (arr, value) => arr.push(value);
appendElement(numbers, 6);
console.log(numbers);

//elem eltávoléítás
const removeElement = (arr, index) => arr.splice(index, 1);
//arr.splice (index, 1) honnan és hányat töröljön !
removeElement(numbers, 1);//egyes indexű törlése
console.log(numbers);

// adott elem megkeresése (index, vagy -1 ha nincs benne)
const getElement = (arr, value) => arr.indexOf(value);
console.log(getElement(numbers, 3)); // keresem a háromas számot.
console.log(getElement(numbers, 2)); // keresem a háromas számot.


// tömb ürítése
const clearArray = (arr) => {
    arr = [];
    return arr;
};
clearArray(numbers);
console.log(clearArray(numbers));


const ints = [1, 2, 3, 4, 5, 6];

function getEvenElements(arr) {
    const even = []; // páros számokat gyűjtjük ebbe
    for (let i = 0; i < ints.length; i += 1) {
        if (arr[i] % 2 === 0) { // maradék nélkül osztható kettővel, nincs maradék
            even.push(arr[i]);
        }
    }
    return even;
}

console.log(getEvenElements(ints));

const evenFilter = (item) => item % 2 === 0;
const everyThirdElementFilter = (item, index) => (index + 1) % 3 === 0;
const result = ints.filter(evenFilter); // item = tömb elemei
// amelyikre igaz lesz a feltétel belerakja egy új tömbbe
console.log('functional: ', result);
console.log(ints.filter(everyThirdElementFilter));

// if helyett filtert használunk.

// sztringból tömböt készít
const abcd = 'helló szervusz szia';
console.log(abcd.split(''));
console.log(abcd.split(' '));

function sample(a) {
    // if (a % 2 ===0) {
    //     return 'Páros';
    // } else {
    //     return 'Páratlan'
    // }
    return a % 2 === 0 ? 'Páros' : 'Páratlan';
}

// object a visszatéréris érték
function sample2(a) {
    return {
        original: a,
        doupled: a * 2,
        tirpled: a * 3,
    }
}
console.log(sample2(10));