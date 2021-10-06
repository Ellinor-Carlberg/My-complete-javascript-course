'use strict';
/* 
//SCOPING IN PRACTICE
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    //firstName variable from global scobe
    firstName = 'ellinor';
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    //output with firstName variable from global block with new value from this block.
    console.log('firstName from global block with new value:', output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //new firstName variable
      const firstName = 'elli';

      const str = `Oh, and you are a millenial, ${firstName}`;
      //str with firstName variable from this if-block.
      console.log('firstName from if block:', str);
    }

    console.log(millenial);
    function add(a, b) {
      return a + b;
    }
    console.log(add(1, 2));
  }

  printAge();

  return age;
}

let firstName = 'Jonas';
calcAge(1991);
 */
//HOISTING IN PRACTICE

/* x = 5;
console.log(x);
var x;

y = 5;
console.log(y);
let y;
 */

/* console.log(z);
let z; */

//THIS IN PRACTICE
//This works, because arrow functions don´t have their own this keyword, they inherit the this keyword from their "parent"
const obj = {
  age: 32,
  firstName: 'Ellinor',
  pet: 'cat',
  msg: function () {
    const msgOne = `${this.firstName} is ${this.age} years old.`;
    const msgFromArrow = () => `${this.firstName} have a ${this.pet}.`;
    return `${msgOne} ${msgFromArrow()}`;
  },
};

console.log(obj.msg());

//This does not work. The regular functions this is undefined
/* 
const obj = {
    age: 32,
    firstName: 'Ellinor',
    pet: 'cat',
    msg: function () {
      const msgOne = `${this.firstName} is ${this.age} years old.`;
      const msgFromRegular = function() {
          return `${this.firstName} have a ${this.pet}.`
      } ;
      return `${msgOne} ${msgFromRegular()}`;
    },
  };
  
  console.log(obj.msg());
 */

//ARGUMENTS keyword
/* 
function add(a, b) {
  console.log(arguments);
  console.log(arguments[1]);
  console.log(arguments.length);
  return a + b;
}

add(1, 6, 10, 2, 30); */

//PRIMITIVE and REFERENS TYPE
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge, age);

const oldArray = [1, 2];
const newArray = oldArray;
oldArray.push(3);
console.log(newArray, oldArray);

const me = {
  firstName: 'Ellinor',
  age: 33,
};

/* const friend = me;
friend.firstName = 'lisa';

console.log(me, friend);

const clickAction = function () {
  this.textContent = 'hej';
};

const allh1 = document.querySelectorAll('h1');
for (let i = 0; i < allh1.length; i++) {
  allh1[i].addEventListener('click', clickAction);
}

console.log(document.querySelectorAll('h1'));
 */

//PRIMITIVE types
let lastName = 'william';
let oldLastName = lastName;
lastName = 'Davis';
console.log(oldLastName, lastName);

//REFERENCE types
const jessica = { firstName: 'jessica', lastName: 'william' };
/* const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(marriedJessica, jessica); */

//COPY object/reference types
//only shallow copy
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'davis';
console.log(jessica, jessicaCopy);

//prove of shallow copy

const maria = {
  firstName: 'maria',
  lastName: 'carlberg',
  livingWith: ['carl', 'ebba', 'sanna'],
};

const mariaCopy = Object.assign({}, maria);
console.log(mariaCopy, maria);

maria.livingWith.splice([1]);
console.log(mariaCopy, maria);
