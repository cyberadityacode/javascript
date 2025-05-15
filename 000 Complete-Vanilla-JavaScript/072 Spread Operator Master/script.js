console.log("Spread Master");

// Challenge- Level 1
/* 
Create a new array that is a 
copy of the original using the spread operator.
*/
const fruits = ["apple", "banana", "mango"];
const newArraySpread = [...fruits];
console.log(fruits, newArraySpread);

/* Changes to newArraySpread will not affect the 
original fruits array (since it's a new copy, 
not a reference). 
because using the spread operator to 
create a shallow copy of the fruits array.*/

const newArrayDeep = fruits;
console.log(fruits, newArrayDeep); //Seems replica of aforementioned
// but its a deep copy, which also copies the reference (address) not just the values

console.log(fruits === newArrayDeep); //true since, same reference
console.log(fruits === newArraySpread); //false, since, same values but different reference

//Arrays are objects, and objects are compared by reference, not by value.

const a = [1, 2, 3];
const b = [1, 2, 3];
let c = a;

console.log(a == b); // false
console.log(a === b); // false

console.log(a == c); // true
console.log(a === c); // true

//Level 2. Combine Two Arrays

const arr1 = [1, 2];
const arr2 = [3, 4];
// Merge to form [1, 2, 3, 4]
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// Level 3 - Spread in Function Arguments
//Use the spread operator to pass elements of an array as arguments to a function.

function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];

// use Spread to call add()
console.log(add(...nums));

/* Intermediate Level */

// Level 4 - Clone an Object

// Clone the following object using the spread operator

const person = { username: "aditya", age: 31 };
const clonePerson = { ...person };
console.log(person, clonePerson);

// Level 5 - Merge Two Objects
// Use the spread operator to combine two objects into one.

const obj1 = { a: 1 };
const obj2 = { b: 2 };

// Result should be { a: 1, b: 2 }
const mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

// Level 6. Remove Duplicate Elements
// Use spread and Set to remove duplicates from an array.

// Use Set and spread to remove duplicates
/* A Set is a collection of unique values — 
it only keeps one copy of each value, 
even if you try to add duplicates. */

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(arr)];
console.log(uniqueNumbers);

// play - how many duplicated values existed in arr
console.log(arr.length - uniqueNumbers.length); //2

//Level 7. Use Spread in Array Destructuring

/* Use spread to assign the first item of the array to one variable,
 and the rest to another array */

const colors = ["red", "green", "blue", "yellow"];

// Destructure using spread
// Expected: first = "red", rest = ["green", "blue", "yellow"]

const [first, ...rest] = colors
console.log(first);
console.log(rest);

