console.log('Placeholder for unused item _ in array map');

const shimmerArrayUndefined = [...Array(6)].map((_,index)=>_)
const shimmerArrayIndex = [...Array(6)].map((_,index)=>index)
const falseBooleanArray = [...Array(6)].map((_,index)=>false)
// logs an array with 6 elements with an undefined value
console.log(shimmerArrayUndefined);

//logs an array with 6 elements with an index value
console.log(shimmerArrayIndex);

//logs 6 elements with false value

console.log(falseBooleanArray);


//Animation Delays / Time-Based Effects
[...Array(10)].forEach((_,i) =>{
    setTimeout(()=>{
        console.log(`fired after ${i *1000}ms`);
    }, i*1000)
})
