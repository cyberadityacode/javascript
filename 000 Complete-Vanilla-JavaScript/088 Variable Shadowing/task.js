let x = 1;

{
  let x = 2;
  {
    let x = 3;
    console.log(x); // ?
  }
  console.log(x); // ?
}

console.log(x); // ?
