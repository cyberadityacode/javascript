// Check whether user is between 18 to 24

let userAge = 24;

console.log((userAge >=18) && (userAge <=24)); //true, since both conditions are true

let collegeCompletionAge = 24;
console.log((userAge ==24) || (userAge > 24)); //true, atleast 1 condition is true


//&& or || operator gives truthy and falsy result, not a vanilla true or false result

/*
    
0 and NaN, empty string, undefined, null are false
 
example 0&& 2 returns 0 -> since any of the value is false, henceforth result is 0
 */


/**
    '' && 'hello' -> return '' because empty string which is false will return
 */

    /*
     '' || 'hello' -> 'hello'
     */

/**
 * 'Hello'&& 4+8 -> return 12 because && logical operator will check both values before proceeding to return
 * 
 * 'Hello' || 4+8 -> return 'Hello' because || or logical operator will check first part as true , than there is no need to proceed furthermore.
 */

const logResult = console.log('hello');

const andResult = 'hello' && console.log('hello'); //undefined because clg will return undefined and && logical operator will choose undefined 

