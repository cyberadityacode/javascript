/* const user = {
    firstName :'Aditya',
    lastName :'Dubey',
    age: 32
}

// new Date().getFullYear() //2025
//Functional Programming

function getAgeYear(age){
    return new Date().getFullYear() - age
}

getAgeYear(user.age)
 */
/* In order to make this FP to OOP 
lets put our function to user obj itself */

const user = {
  firstName: "Aditya",
  lastName: "Dubey",
  age: 32,
  getAgeYear: function () {
    return new Date().getFullYear() - user.age;
  },
};

//to access our function obj
user.getAgeYear();
user.age; //32 - this is not  encapsulation as we can't hide properties

//https://chatgpt.com/c/6802f002-9d2c-8009-a799-3fd5b9f09c7a

/* If we want to create multiple users, do we have to 
create object over & over again? 
*/

// Factory Function
/* https://chatgpt.com/c/6802f002-9d2c-8009-a799-3fd5b9f09c7a
A factory function is just a regular function that returns an object.
Think of it like a factory that creates and returns "product" objects.

It’s an alternative to using class or new to create objects.
*/
/* 
function createUser(firstName,lastName,age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return user;
}
createUser() // undefined
createUser('aditya','dubey', 32)
 */

// simplify furthermore, no need to use colon
function createUser(firstName,lastName,age) {
  const user = {
    firstName,
    lastName,
    age, 
    getAgeYear: function () {
        return new Date().getFullYear() - user.age;
      }
  };

  return user;
}
createUser() // undefined

const finalUser = createUser('aditya','dubey', 32)
const finalUser2 = createUser('CYBERaditya','dubey', 100)
finalUser.getAgeYear() //1993

finalUser.getAgeYear === finalUser2.getAgeYear //false - since, it is stored in different memory
finalUser.firstName === finalUser2.firstName //false - both are in different memory location
finalUser.lastName === finalUser2.lastName //TRUE - Bingo! both are in same memory location

/* But, here is a problem...
we are storing reusable function again and again for different users 
to solve this we use constructor function
*/
/* Let me show you with an example */
const array1 = [1,2]
const array2 = [3,4]

array1 //in console methods are not shown explicitly, they are under prototype

array1.pop

array1.pop === array2.pop //true -> because pop method is stored in single location
array1.pop() === array2.pop() //false, as it is called and compares the data inside an array
