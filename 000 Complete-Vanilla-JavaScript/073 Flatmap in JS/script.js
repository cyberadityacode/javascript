console.log("combile filter with map function in js");

const arr = [2,3,4,5,6,7]

// Square and return even numbers

const output = arr.filter(x=> x%2 ==0).map(x=> x**2)
console.log(arr);
console.log(output);

// flat the map by passing ternary operator within args.
const squareEven = arr.flatMap(x=> x%2==0 ? x**2 : [])
console.log(squareEven);
