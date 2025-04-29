'use strict'
const fruits = ['apple','banana','cherry', 'peach','mango'];

/* for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
} */


// of prints element; in print index
for(const fruit of fruits){
    // debugger;
    console.log(fruit);
}
const person = {
    firstName:'aditya',
    lastName:'dubey'
}

for (const key in person){
    // console.log(key);
    console.log(key, ':', person[key]);
}
//get keys in array
const personKeys = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);

console.log('------');

//use for of to iterate over keys

for(let pk of personKeys){
    console.log(pk);
}

/* Use case: Showing a list of items like:

Weather forecasts

E-commerce product listings

Chat messages

Notifications */

/* const forecasts = [
  { day: "Monday", temp: 28 },
  { day: "Tuesday", temp: 31 },
  { day: "Wednesday", temp: 29 }
];

for (const forecast of forecasts) {
  console.log(`${forecast.day}: ${forecast.temp}°C`);
} */