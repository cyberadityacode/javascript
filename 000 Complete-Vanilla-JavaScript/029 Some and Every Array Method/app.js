const evenNumbers =[0,2,4,6,8]

/* evenNumbers.some((num, i, array)=>{
    console.log(num,i,array);
}) */
console.log(evenNumbers.some((num)=>{
    console.log(num);
    }))

    //return true if you return truthy value in some
    // it is running 5 times, even if it return true one time,
    // it will cumulatively return true.
    //some = ek bhi true hoga to return value true hoga

const checkEvenSome = evenNumbers.some((num)=>{
    return num%2 ===1 
})

const checkEvenEvery = evenNumbers.every((num)=>{
    return num%2 ===0 
})