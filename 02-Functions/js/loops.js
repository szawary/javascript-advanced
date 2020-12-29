// Egyesével iratom ki a számokat.

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

console.log('------')

// A loopokat arra használjuk, hogy valamilyen feladatok
// ismételjen folyamatosan.
// FOR, WHILE, FOR .. IN, FOR .. OF, DO .. WHILE

// for (ciklusválozó = kezdőérték; feltétel; léptetés) {
//      ciklusmag;    
//  }

for (let i = 1; i < 10; i += 1) {
    console.log(i);
}

console.log('------')

// ciklusváltozó = kezdőérték;
// while (feltétel) {
//    ciklusmag;
//    feltétel;
//  }

let x = 1;
while (x < 10) {
    console.log(x);
    x += 1;
}

// Ha meg tudjuk számolni, hogy hány lépés lesz, akkor FOR.
// Ettől eddig.

// Ha nem tudjuk, hogy mennyi ciklus lesz előre, akkor While.
// Addig amíg.


console.log('------')
// Do .. while, ez egyszer mindenképpen lefut, hátul tesztelős, 
// lefuttatja az utalsításokat, majd pedig vizsgálja a feltétlet,
// ha nem felel meg, akkor kilép.
let y = 1;
do {
    console.log(y);
    y += 1;
} while (y < 10)


console.log('------')

// Minden objektumnál const-ot kell használni!

const person = {
    firstName: 'John',
    lastName: 'Dow',
    age: 30
};

//a propertynek a neve kerül bele

for (const key in person) {
    // ha for .. in-t használok, akkor meg kell vizsgálni
    //hogy az az ő tulajdonsága-e
    if (person.hasOwnProperty(key)) {
        console.log(key);
        //a key minden esetben egy string
        //ezért csak itt person[key]
        console.log(person[key]);

        console.log(key, ':', person[key]);

    }
}
//  for .. of, mindig az értékeken megy végig
//  for .. in, mindig a kulcsokon megy végig
for (const key of Object.keys(person)) {
    console.log(person[key]);
}
// a for of tömbben fogja visszaadni az értékeket.


// Tömb létrehozása
const arr = [1, 2, 3, 4, 5, 6, 7];
// ezredik elem
arr[1000] = 1000;
// erőforrás pocsékolás az alábbi:
for (let x = 0; x < arr.length; x += 1) {
    console.log(arr[x]);
}
// ez is 993szor undefined értéket vizsgál
for (const value of arr) {
    console.log(value);
}

// a jó megoldás
for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
        console.log(arr[key]);
    }
}
