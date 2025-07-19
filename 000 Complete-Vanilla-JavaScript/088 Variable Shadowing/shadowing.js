/* 
Shadowing happens when a variable declared in an inner scope has the same name as one in an outer scope.
The inner declaration hides or "shadows" the outer one in its scope.

*/

let x = "outer";
function test() {
  let x = "Inner";
  console.log(x);
}

test();

console.log(x);

// Block-Scoped Shadowing (Let/Const-safe)

let a = 5;

{
  let a = 10; // Block-scoped shadowing
  console.log(a); // 10
}

console.log(a); // 5

let ab = 100;

function outer() {
  let ab = 200;
  function inner() {
    console.log(ab);
  }
  inner();
}
outer();

