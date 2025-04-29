/* const user1 = "aditya";
const user2 = "aditya";

const user1Con = user1.concat("d");
/* both user1 and user2 have same value
henceforth, they are stored in 
same memory location @7083 */ 

const user1 = {
    firstName : 'aditya',
    lastName :'dubey'
}

const user2 = user1;

user2.lastName = 'pandey' 
/* interestingly, this also updates
the value of lastName for user1 */
//how to copy value?

//create an empty array
const userEmpty = {}

// Object.assign(userEmpty,user1) //copies user1 properties to userEmpty

// userEmpty.lastName = 'dubeyfinal'

//now you can verify the sanctity of user1
// even after alteration of userEmpty


//now use spread syntax

const shallowCopy = {...user1}

console.log(shallowCopy);

shallowCopy.lastName = 'dubey'