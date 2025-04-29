//shift is oppoite of pop

const fruits = ['apple','banana','cherry','date']
console.log(fruits);
fruits.shift(); //removes the first element from an array and returns it
//shift() shift the index of all elements by 1
console.log(fruits);

fruits.unshift('apple'); //inserts new element at the start of an array and returns it
console.log(fruits);

//concat 
const vegetable = ['ladyfinger', 'cabage','bottleguard'];
console.log(vegetable);
/**Combines two or more arrays. 
 * This method returns a new array 
 * without modifying any existing arrays. */
const fruitVegFusion = fruits.concat(vegetable)
console.log(fruits); //same? i already said, it doesnt modify existing array, it create new array

console.log(fruitVegFusion);


//indexOf()Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

console.log(fruits.indexOf('banana')); 

//includes()

console.log(fruits.includes('cherry')); //true because cherry exists in an array
console.log(fruits.includes('papaya')); //false because papaya doesnt exists in an array

/**
 * Reverses the elements in an array in place.
 *  This method mutates 
 * the array and returns a reference to the same array.
 */
console.log(fruits.reverse()); 

console.log(fruits);
//sort()
/**
 * Sorts an array in place.
 *  This method mutates the array and 
 * returns a reference to the same array
 */
console.log(vegetable.sort()); 

//slice()

/**
 * Returns a copy of a section of an array.
 *  For both start and end, a negative index can be used to indicate an offset from the end of the array.
 *  For example, -2 refers to the second to last element of the array
 */

console.log(fruitVegFusion);
console.log(fruitVegFusion.slice(1,3)); //index 1 to 3 sliced

//splice()

/**
 * Removes elements from an array and,
 *  if necessary, inserts new elements in their place,
 *  returning the deleted elements.
 */

console.log(fruitVegFusion);
console.log(fruitVegFusion.splice(2,3));
console.log(fruitVegFusion); //changes the original array too
