
console.log('------- 12. feladat, tömb számai csökkenő sorrendben, egyéb típusok a tömb végén  ------');

function bubbleSortDesc(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

function filterByNumbers(arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i])
        }
    }
    return numbers;
}

function filterByNotNumbers(arr) {
    const notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number') {
            notNumbers.push(arr[i])
        }
    }
    return notNumbers;
}

function customSorting(arr) {
    const numbers = filterByNumbers(arr);
    const notNumbers = filterByNotNumbers(arr);
    const sortedArr = bubbleSortDesc(numbers);
    return sortedArr.concat(notNumbers);
}


function customSorting2(arr) {
    const numbers = [];
    const notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number' || Number.isNaN(arr[i])) {  // a számok közül kiemelem a NaN típusakat is.
            notNumbers.push(arr[i]);
            // arr.splice(i, 1);        // honnantól és mennyit akarok kitörölni
        }
        else {
            numbers.push(arr[i])
        }
    }
    const sortedArray = bubbleSortDesc(numbers);
    return sortedArray.concat(notNumbers);  // concat metódus tömb összefűzésre
}


const sample = [435, true, NaN, 'hello', 567, 8, 33, 346, 'szia', 67, false, 678, 225];
console.log(customSorting(sample));
console.log(customSorting2(sample));



console.log('--- 13. feladat --- tömbbe beszúrás ---');

function bubbleSortAsc(arr) {    // növekvő sorrend
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

const sample2 = [234, 423, 23, 41, 56, 7, 33]

function custom13(arr) {
    const inputNumber = parseInt(prompt('Adj meg egy számot'), 10); // a parseInt paramétereként megadom, hogy milyen számrendszert akarok használni
    arr.push(inputNumber);
    const sortedArray = bubbleSortAsc(arr);
    console.log(inputNumber, typeof inputNumber)        // amit kapok a prompt-ból az mindig string lesz, de a parseInt-tel átalakítom
    console.log(sortedArray);
}

custom13(sample2);


console.log('--- v2---');

function getIndex(arr, value) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > value) {
            return i;
        }
    }
}

function custom13v2(arr) {
    let sortedArray = bubbleSortAsc(arr);
    const inputNumber = parseInt(prompt('Adj meg egy számot'), 10); // a parseInt paramétereként megadom, hogy milyen számrendszert akarok használni
    const index = getIndex(sortedArray, inputNumber);
    sortedArray.splice(index, 0, inputNumber);
    return sortedArray;
}

console.log(custom13v2(sample2));