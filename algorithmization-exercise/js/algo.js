'use strict'; // minden javascript fájlt ezzel kezdünk alapként!!!

// tömb létrehozása const változóval
const tomb = [23, 12, 5, 7, 997, 54, 123, 847, 0, 334, 290, 763, 998];

// 1. egész számokat tartlamzó tömb legkisebb elemének megkeresése.
function getMinElementFromAnArray(arr) {
    // min nevü változónak beállítom a arr nevü tömb 0.-dik elemét.
    let min = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        // ha az intArr tömb i-edik eleme kissebb a min változótól, akkor 
        if (arr[i] < min) {
            // van egy új legkisebb érétkem, az intArr i-edik eleme
            min = arr[i];
        }
    }
    console.log('Legkisebb eleme a tömbnek:', min);
}
getMinElementFromAnArray(tomb);

//paraméterként egy tömböt adok meg neki
getMinElementFromAnArray([123423, 512351, 4134, 1341, 234, 1324, 12345]);

// 2. egész számokat tartlamzó tömb legnagyobb elemének megkeresése.
function getMaxElementFromAnArray(arr) {
    // max nevü változónak beállítom a arr nevü tömb 0.-dik elemét.
    let max = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        // ha az intArr tömb i-edik eleme nagyobb a max változótól, akkor 
        if (arr[i] > max) {
            // van egy új legnagyobb érétkem, az arr i-edik eleme
            max = arr[i];
        }
    }
    console.log('Legnagyobb eleme a tömbnek:', max);
}
getMaxElementFromAnArray(tomb);

// 3.1. A tömb elemeinek szám
let db = 0;
for (let h = 0; h < tomb.length; h += 1) {
    db += 1;
}
console.log('A tomb elemeinak darabszáma:', db)

// 4. A tömb elemeinek összege
let sum = 0;
for (let h = 0; h < tomb.length; h += 1) {
    sum += tomb[h];
}
console.log('A tömb elemeinke összege:', sum);

// 3.2. A tömb átlagának számítása
let atlag = sum / db;
console.log('A tömb átlaga:', atlag);

// 5. A tömb páros elemeinek száma:
let parosdb = 0;
for (let h = 0; h < tomb.length; h += 1) {
    if (tomb[h] % 2 == 0) {
        parosdb += 1;
    }
}
console.log('A tömbben ennyi páros szám van:', parosdb);



function vowelsAndConsonants(txt) {
    for (let i = 0; i < txt.length; i += 1) {
        if (txt[i] === 'a' || txt[i] === 'i' || txt[i] === 'o') {
            console.log(txt[i]);
        }
    } console.log('end');

    for (let i = 0; i < txt.length; i += 1) {
        if (txt[i] === 'j' || txt[i] === 'v' || txt[i] === 's' ||
            txt[i] === 'c' || txt[i] === 'r' || txt[i] === 'p' ||
            txt[i] === 't' || txt[i] === 'l') {
            console.log(txt[i]);
        }
    } console.log('end');

}
const text = "javascriptloops";
vowelsAndConsonants(text);


function vowelsAndConsonants(txt) {
    for (let i = 0; i < txt.length; i += 1) {
        if (txt[i] === 'a' || txt[i] === 'e' || txt[i] === 'i' || txt[i] === 'o' || txt[i] === 'u') {
            console.log(txt[i]);
        }
    } console.log('end');
    for (let i = 0; i < txt.length; i += 1) {
        if (txt[i] !== 'a' && txt[i] !== 'e' && txt[i] !== 'i' && txt[i] !== 'o' && txt[i] !== 'u') {
            console.log(txt[i]);
        }
    } console.log('end');

}

vowelsAndConsonants(text);



// 8. Lineáris keresés, van egy tömböm és megkap egy értéket,
// amit keresek. Végig kell gyalogolnom a tömbön.

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            return 'igen';
        }
    }
    return 'nem';
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('A keresett szám benne van a tömbben?', linearSearch(number, 5)); // megadom paraméternek a tömböt és amit keresek.

console.log('új keresés: ', linearSearch(tomb, 42));


// Binary search, csak rendezett tömbön működik, magyarul sorban van
// rakva.

function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;          // a tömb utolsó elemének indexét adja.

    while (start <= end) {            // megnézem, hogy van-e eleme a tömbnek.
        let mid = Math.floor((start + end) / 2);  // Megkeresem a középső elemet.

        if (arr[mid] === search) {    // ha a középső a keresettel egyenlő
            return true               // akkor true
        }
        else if (arr[mid] < search)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

console.log('A keresett szám benne van a tömbben?', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4));

// a Math.floor lefele kerekíti a paraméterként kapott számokat.


// Bubbles Shorting, buborékos rendezés.
// Mindig az egymás melletti elemet vizsgálja meg.

function bubblosSort(arr) {
    let swapped;                           // ebben a változóban csak azt tárolom, hogy a tömb rendezett-e vagy sem.

    do {                                  // egyszer mindenképpen le fog futni
        swapped = false;                  // azt mondjuk hogy biztos nem rendezett még
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {    // ha kisebb mint a soron következő
                let temp = arr[i];
                arr[i] = arr[i + 1];      // az elemeket megcseréljük. 
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

const arr = [435, 567, 8, 33, 346, 67, 678, 225];



// Lebegőpontos számok, vagyis nem egész számok. Nem a változónak van típusa, hanem
// a változó értéke hordozza magában a típust. 
const lebego = [1.23, 3.44];
console.log(lebego);


// 6. feladat: második legkisebb szám megtalálása.
// const tomb = [23, 12, 5, 7, 997, 54, 123, 847, 0, 334, 290, 763, 998];

console.log(bubblosSort(tomb));
let masodikszam = bubblosSort(tomb);
console.log(masodikszam[1]);


// 7. feladat: harmadik legnagyobb szám.

function darabszam(arr) {
    let db = 0;
    for (let h = 0; h < tomb.length; h += 1) {
        db += 1;
    }
    console.log('A tomb elemeinak darabszáma:', db)
}

let harmadiknagy = darabszam(tomb);

let index = tomb.length - 3;
console.log(index);
console.log(tomb[index]);


