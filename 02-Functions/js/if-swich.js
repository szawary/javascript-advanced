'use strict';

const firstNumber = 10;
const secondNumber = 20;

if (firstNumber === secondNumber) { // az ifen belül igaz lesz, akkor lefut az utasítás
    console.log('Egyenlő');
} else if (firstNumber > secondNumber) {   // az else if nem kötelez elem, de bármennyi lehet belőle
    console.log('A firstNumber nagyobb');
} else {
    console.log('A secondNumber nagyobb'); // ez sem kötelező elem. záró rész. 
}


const grade = 5;
if (grade === 1) {
    console.log('Elégtelen');
} else if (grade === 2) {
    console.log('Elégséges');
} else if (grade === 3) {
    console.log('Közepes');
} else if (grade === 4) {
    console.log('Jó');
} else if (grade === 5) {
    console.log('Jeles');
} else {
    console.log('Ez nem osztályzat.')
}

console.log('----- switch ------')

switch (grade) {
    case 1:
        console.log('Elégtelen');
        break;                      // Ezzel kiléptetem a folyamatból.
    case 2:
        console.log('Elégséges');
        break;
    case 3:
        console.log('Közepes');
        break;
    case 4:
        console.log('Jó');
        break;
    case 5:
        console.log('Jeles');
        break;
    default:
        console.log('Ez nem osztályzat');  // Ezt soha sem hagyjuk ki, hibás adat estetén.
}


// Ha tömb lenne, de ne ezzel, hanem obj.

const arr = ['Elégtelen', 'Elégséges', 'Közepes', 'Jó', 'Jeles'];
console.log(arr[grade - 1]);   // a grade 1-5 közötti szám, az indexek pedig 0-4 között vannak.

// és ha objektum, ez az utolsó a profi megoldás.

const gradeObj = {
    1: 'Elégtelen',
    2: 'Elégséges',
    3: 'Közepes',
    4: 'Jó',
    5: 'Jeles',
}
console.log(gradeObj[grade]);
