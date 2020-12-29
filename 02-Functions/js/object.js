// creat new object

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'learing', 'walking'],
    sayHi: function () {    // this is a method, because this is a funciton
        console.log(this.firstName + ' ' + this.lastName + ' says: Hi!');   // this key word!!
    },
    sayHello(message = 'Hi!!') {    // short form, with default parameter
        console.log(this.firstName + ' ' + this.lastName + ' says: ' + message);   // this key word!!
    },
}
console.log(person.firstName);
console.log(person.age);
// console.log(person['firstName']);

person.age = 33;
console.log(person.age);
console.log(person.sayHi());

person.firstName = 'Jane';
console.log(person.sayHi());
console.log(person.sayHello('Hello'));

console.log(person.hobbies[0]);