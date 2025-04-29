/* Optional Chaining is a feature in JavaScript that lets you safely access
 nested object properties without getting an error 
 if a property doesn’t exist.

👉 Simple Definition:
"Optional chaining (?.) allows you to check if a value exists 
before trying to access its property, method, or element." */

const user = {
  firstName : 'aditya',
  lastName : 'dubey',
  age : 32,
  address: {
    city: 'jabalpur',
    
  },
  getFullName: function(){
    return user.firstName+' '+user.lastName
  }
}

console.log(user.firstName); //aditya
console.log(user.address.city); //jabalpur
console.log(user.address.pinCode); //undefined
console.log(user.bloodGroup); //undefined
// console.log(user.bloodGroup.rH); //accessing undefined property- uncaught type error
console.log(user.bloodGroup?.rH); //accessing undefined property- uncaught type error

console.log(user.getFullName());
// console.log(user.getCompleteName());//TypeError: user.getCompleteName is not a function
console.log(user.getCompleteName?.());//undefined



