console.log("Reduce Method Challenges");

/* Example 1: Convert array of strings into an object with lengths */

const names = ["Alice", "Bob", "Charlie"];
/* 
{
  Alice: 5,
  Bob: 3,
  Charlie: 7
}
*/
const nameLength = names.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log(nameLength);

// const names = ["Alice", "Bob", "Charlie"];
// Now I want to return the name with minimum length
const shortestName = names.reduce((shortest, current) => {
  return current.length < shortest.length ? current : shortest;
});

console.log(shortestName);

// const names = ["Alice", "Bob", "Charlie"];
const longestName = names.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});
console.log(longestName);

/* 
Why no initial value at the end?
Usually, reduce looks like this:
array.reduce((acc, item) => { ... }, initialValue);

But if you don’t provide an initial value, JavaScript automatically does this:
1. Takes the first element of the array (names[0]) as the initial accumulator.
2. Starts the loop from the second element (names[1]).

So in your code:
longest starts as "Alice" (first name in the array).
The loop starts comparing from "Bob" onward.

const names = ["Alice", "Bob", "Charlie"];
// reduce starts with:
// longest = "Alice"
// current = "Bob" (then Charlie, etc.)
*/

/* 
When to provide an initial value?

You should give an initial value if:

The array might be empty.

You want a specific type, like a number, object, or string.

You want to be very explicit.
*/

const longestName2 = names.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, ""); // Initial value is an empty string
console.log(longestName2);
// This version will work even if names is an empty array (it will return ""), whereas the version without an initial value would throw an error if the array is empty.

//  Example 2: Group users by role

const users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Mark", role: "admin" },
  { name: "Lucy", role: "user" },
];

/* Goal:
{
  admin: ["John", "Mark"],
  user: ["Jane", "Lucy"]
}
*/
const groupedByRole = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  acc[user.role].push(user.name);
  return acc;
}, {});

console.log(groupedByRole);

// Another Example

const pets = [
  { type: "dog", name: "Rex" },
  { type: "cat", name: "Whiskers" },
  { type: "dog", name: "Buddy" },
  { type: "parrot", name: "Polly" },
];
/* Build an object where the keys are the type, and the values are arrays of names.
{
  dog: ["Rex", "Buddy"],
  cat: ["Whiskers"],
  parrot: ["Polly"]
} */
const groupByType = pets.reduce((acc, pet) => {
  if (!acc[pet.type]) {
    acc[pet.type] = [];
  }
  acc[pet.type].push(pet.name);
  return acc;
}, {});

console.log(groupByType);
