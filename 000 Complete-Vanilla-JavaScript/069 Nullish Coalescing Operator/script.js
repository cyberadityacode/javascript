console.log("069 Nullish Coalescing Operator");

let username = null
let defaultUsername = 'aditya'

console.log(username ?? defaultUsername); //aditya

username = 'cyberaditya'
console.log(username ?? defaultUsername); //cyberaditya because LHS is neither NULL nor UNDEFINED

username = undefined
console.log(username ?? defaultUsername); //aditya because its undefined on LHS

// How it is different from LOGICAL OR ||
/* 
    Logical OR returns RHS value if the LHS is FALSY
    (false, 0 , '' , null, undefined, NaN)
*/

console.log(username || defaultUsername); //aditya because username is falsy (undefined)

username = ""
console.log(username || defaultUsername); //aditya because username is falsy (empty string)
username = 0 
console.log(username || defaultUsername); //aditya because username is falsy (0)

username = NaN
console.log(username || defaultUsername); //aditya because NaN is falsy

username = false
console.log(username || defaultUsername); //aditya because false is falsy



