// const user = {}  //empty object
const userOne = {
    firstName: 'Aditya'
}  
const userTwo = {
    firstName: 'Aditya'
}  

//2 objects are created and stored in same memory location, to confirm go to memory console and take snapshot and check within system.context
/*
system / Context@178995 is same for both object; address is different for both users
*/

/*
primitive data type are stored in the same memory location
if, content within them is same. 
example empty string a1 and a2 will get the same memory allocation.
*/

const userThree = {
    firstName:'aditya',
    'last-name':'dubey',
    aditya:'dc'
}

userThree.posting = 'ujjain'

console.log(userThree.firstName);
console.log(userThree["last-name"]);
console.log(userThree.aditya);
console.log(userThree.posting);
console.log(userThree['posting']);
//if you try to access a key which is absent, it will respond undefined.

// userThree.is-Alive = true; //invalid left hand side in assignment

userThree['isAlive'] = true

//object inside an object

const objSample = {
    firstName : 'aditya',
    lastName : 'dubey',
    place : {
        city : 'jabalpur',
        pinCode : '482002',
        state: 'MP'
    }
}
// //uncaught reference error when you use const variable, albeit no issue wrt let
// objSample = {
//     someName: 1
// }

// access state name 
// console.log(objSample['place']['state']);

//to delete property from an object use delete keyword

// example

console.log(objSample);
console.log( delete objSample.firstName);
console.log(objSample);

Object.seal(objSample);


console.log( delete objSample.lastName); //return false


//to prevent object from alteration of property

Object.freeze(objSample)


console.log('lastName' in objSample); //true because lastName property exist in object
