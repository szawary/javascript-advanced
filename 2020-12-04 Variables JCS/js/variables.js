// Define variables.
var name = 'Satya';
const name2 = 'Piri';
let name3 = 'Béci';

// Redefine variables.
var name = 'Józsi'; // NOT overwrite !!!, this is a new variable, prewious var is unable.
name = 'Józsi'; // Redefine!! overwrite!!

// name2 = 'Peti'; // NOT possible, this is constant. Error

name3 = 'Pali'; // new value get name3

/* Variable types.

    - Primitives:
        - string
        - number
            - NaN (this is a type of number)
        - boolean ( true, false )
        - null ( const IDontKnow = null; ) -> starting value
        - underfined ( let itIsUnderfined; ) -> it has no value.
        - bigint (const bigNumber = 4n;) / const bigNumber2 = BigInt(3491824ö91283ö91284ö9182rö932842);
        - symbol (
                const sym1 = Symbol(); // it is alway uniqe key )
                const user = {};
                const user[sym1] = 'Joe';

    - Collections:
        - array     const arr = [0,1,2,3,4,5]; console.log(arr[2]);
                    arr[0]=5; // modify frist element value
                    arr.push(6); // add an element to the end
                    arr.unshift(8) // insert before to the first element
                    arr.pop(); // delete the last element
                    arr.shift(); // delete the first element

        - object    // everything is object
*/

const user = {
    name: 'Laszlo Szabo',
    age: 55,
    address: 'Bp. XXI. Kiss tér 22.',
    email: 'valami@gmail.com',
    salary: 4000,
};
console.log(user.address);
user.salary = 5000;
console.log(user.salary);

user.departnemt = 'accounting';
console.log(user.departnemt);

console.log(user.departnemt.length);

user.hello = function () {
    return `Helló, a nevem ${this.name}`;
};
console.log(user.hello());

// changing a part of address
user.address = user.address.replace('Bp. XXI.', 'Kecskemét');  // string is unmutabel
console.log(user.address);

