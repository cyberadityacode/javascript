function add(a,b){
    console.log(arguments);
    return a+b
}

// return sum of any value passed through an argument

function sumAnything(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum= sum+ arguments[i]
    }
    return sum
}

// task- to convert arguments into array
//by using Array.from()

function demo(){
    const args = Array.from(arguments);
    console.log(args);
}

// Method 2: Using Spread Operator (only with rest ...args)
function demo2(...args){
    console.log(args);
}
