'use strict';

try {
    // ha hiba van, akkor a catch ágba ugri,
    // majd fut tovább.
    console.log(bubu);

} catch (error) {
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
};

console.log('done');

const jsonData = `
    {
        "firstName": "John",
        "lastName": "Doe",

    }
    `;

try {
    const user = JSON.parse(jsonData);
    //console.log(user);
    if (!user.firstName || !user.lastName || !user.age) {
        throw new ReferenceError('Hiányzó property');
    }
} catch (error) {
    if (error instanceof ReferenceError) {
        //console.log('Referencia hiba');
        console.error('Egyedi hiba:', error.message);
    } else if (error instanceof SyntaxError) {
        console.error('Szintatikai hiba');
    } else {
        console.error(error.message);
    }
} finally {
    // ez a rész minden egyes esetben lefut
    console.log('parse ready :-)');

    //const user = {
    //    firstName: 'Jane',
    //    lastName: 'Doe',
    //    age: 30,
};
//console.error(error);


console.log('RUN');



// aszinkonr kód esetében a hibakezelés
const parse = (data) => JSON.parse(data);
setTimeout(() => {
    try {
        const user = parse(jsonData);
        console.log(user);
    } catch (error) {
        console.error('My catch block:', error);
    }
});