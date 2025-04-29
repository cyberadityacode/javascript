const colors = ['red','green','yellow','pink', 'black']


// const color1 = colors[0]

//pick 1st element from colors and piut on color1
// const [color1] = colors

//color1 will have 1st element; color2 will have 2nd green
// const [color1,color2] = colors

//skips 1st and 2nd value and store yellow on color3
const [,,color3] = colors

const user = {
    username: 'aditya',
    age:32,
    address: {
        city: 'jabalpur',
        state: 'MP'
    },
}

// object destructuring in js
// const {username,age} = user

//create your own variable
// const {name: username, age= userage} = user;
//give address object
// const {address} = user

// if you want only city
//multi level destructuring
//now, call city if you want to call city name
const { address: {city}} = user;


//access color4
const {3: color4} = colors


/* We can pass object in an argument of 
a function */

/* 
function intro(obj){
    console.log(obj); //this will log whole user object
} */

// what if you want to only pass age in an argument
// from a user object

function intro({age}){ //this extract age key from an object
    console.log(age);
}

intro(user) 

// same destructuring can be done with array

const TempColors = ['red','green','yellow','pink', 'black']/* 

function introColor(colorObject){
    console.log(colorObject); //logs entire array
} */

// what if you want to log first 3 elements of an array

function introColor([a,b,c]){
    console.log(a,b,c); //logs first 3 elements of an array
} 

introColor(TempColors)