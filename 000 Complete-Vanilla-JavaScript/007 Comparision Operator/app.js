//comparision operators

// const userOneAge= 20;
// const userTwoAge= 18;

// console.log(userOneAge==userTwoAge); //returns false

const userOneAge= '20';
const userTwoAge= 20;

console.log(userOneAge==userTwoAge); //returns true

//=== strict equality compares value as well as type
console.log(userOneAge===userTwoAge); //returns false
console.log(parseInt(userOneAge)===userTwoAge); //returns true



console.log(parseInt(userOneAge)!=userTwoAge); //returns false
console.log(userOneAge!=userTwoAge); //returns false
console.log(userOneAge!==userTwoAge); //returns true, returns true as value and type arent same



