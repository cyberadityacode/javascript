const nums = [1,1,2,1,1,1]
//reduce - reduces the value of array to single unit
/* 
nums.reduce((accumulator, currentValue, index, array)=> {
    console.log(accumulator);
    return accumulator + currentValue
},1077) */

const sum = nums.reduce((accumulator, currentValue, index, array)=> {
    console.log(accumulator);
    return accumulator + currentValue
},0)

const mul = nums.reduce((accumulator, currentValue, index, array)=> {
    console.log(accumulator);
    return accumulator * currentValue
})


// map filter and forEach utility is higher