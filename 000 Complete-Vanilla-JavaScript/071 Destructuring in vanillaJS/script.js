console.log('Destructuring');

const numbers = [1,2,3]
const [a,b,c] = numbers

console.log(a,b,c); //1,2,3

// skipping values 

const [first,,third] = numbers
console.log(third); //3

// Default Values

const [x,y,z,p=7] = numbers

console.log(p); //7

// Object Destructuring

const person ={
    name:'aditya',
    age: '31',
    city: 'jabalpur'
}

const {name, city} = person

console.log(name, city);

// Renaming Variables

const {name:username, age:userAge} = person;
console.log(username, userAge);

// Default Values

const {country = 'India'} = person;
console.log(country);

// Nested Destructuring

const user = {
  id: 101,
  profile: {
    firstName: "aditya",
    lastName: "dubey"
  }
};

const {
    profile: {firstName}
} = user

console.log(firstName);

// function parameter destructing - gravy of react functional component

function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet({ name: "aditya", age: 31 });

// Array Destructuring

function sum([a, b]) {
  return a + b;
}

console.log(sum([5, 10])); // 15