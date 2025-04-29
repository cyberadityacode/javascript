const message = '    Aditya Dubey      '

console.log(message);

console.log(message[0]); //a - prints zero'th index
console.log(message[6]); //undefined - as index range 0-5, 6th index is not available.

console.log(message.length); //6 (total characters in message)

console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());

//apply multiple methods all together
//this is called as chaining
console.log(message.trim().toUpperCase());

console.log('------');

let sampleMessage = "aditya dubey"
console.log(sampleMessage.includes('ad')); //returns true , since ad is within the string
console.log(sampleMessage.includes('z')); //returns false , since Z is not in the string
console.log(sampleMessage.indexOf('a')); //0
console.log(sampleMessage.indexOf('z')); //-1 since z is absent in the given string

console.log(sampleMessage.replace('ya','ay')); //aditay dubey\
console.log(sampleMessage);//original message is still intact
 
console.log(sampleMessage.replaceAll('a','z')); //zditzy dubey\

const sampleConcat = "dc"

console.log(sampleMessage.concat(sampleConcat));
console.log(sampleMessage.concat(sampleConcat,'hi','ad'));


const lastFour = '1077'
console.log(lastFour.padStart(16,'*'));
console.log(lastFour.padEnd(16,'*'));
console.log(sampleConcat.charAt(1));
console.log(sampleConcat.charCodeAt('d')); //ascii code

const lastMessage = "DC Aditya Dubey"


console.log("DC Aditya Dubey".split(' ')); //splits string into an array separated by space


//template literals ` backtick

// // const templateLiterals = `my score is `+lastFour 
// const templateLiterals = `my score is `.concat(lastFour) 
// console.log(templateLiterals);

const templateLiterals = `my score is ${lastFour}`
console.log(templateLiterals);

