console.log("arrays");


const arrVar = [
    'apple',
    'banana',
    'grapes',
    'dates'
];

console.log(arrVar[0]); //apple at zeroth index
console.log(arrVar[4]); //undefined

arrVar[0] = 'guava';

console.log(arrVar[0]);

/*
you can add 10th index value,
it will create empty array to fill the middle left over indexes
*/

//task - add value to the last index of an array without creating empty array

console.log(arrVar);
arrVar[arrVar.length] = 'papaya';
console.log(arrVar);

//there is another way to add element to the last index
// use push method
arrVar.push('cherry')
console.log(arrVar);
arrVar.pop('cherry')
console.log(arrVar);
