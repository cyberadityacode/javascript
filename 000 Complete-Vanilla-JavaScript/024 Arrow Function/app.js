/*
// function declaration 
function square(num){
    return num*num;
} */

    // function expression
/* const square = function(num){
    return num*num;
};
 */
// Arrow function expression
/* 
const square = (num) =>{
    return num*num;
}
 */
const square = (num) => num*num;
const add = (a,b) => a+b;

/* 
setTimeout(() =>{
    console.log('hi');
},3000) */

//to give random value from 1-10
const random = () => Math.floor(Math.random()*10)+1; 
