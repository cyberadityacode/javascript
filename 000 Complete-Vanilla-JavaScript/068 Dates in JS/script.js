// Date() //strings
// new Date() //obj

const myDate= new Date()

console.log(myDate);
console.dir(myDate);

console.dir(myDate.getTime());//time in millisecond, ms elapsed since 1 jan 1970 12:00AM

let timeInMS = myDate.getTime()
// task - convert into year
myDate.getDay() // 6-(saturday)
myDate.getHours() // current time is 19:41 PM this returns 19
myDate.getMinutes() // current time is 19:41 PM this returns 41
myDate.toLocaleString() // mm/dd/yyyy
myDate.toLocaleString('en-GB') // dd/mm/yyyy
myDate.toLocaleString('en-GB',{hour12:true}) // dd/mm/yyyy
myDate.toLocaleDateString('en-GB') // only dd/mm/yyyy

myDate.toLocaleTimeString('en-GB',{hour:'2-digit', minute:'2-digit'}) // only time in hr and min
myDate.toJSON() // complete string

myDate.toString()

myDate.toUTCString() //'Sat, 19 Apr 2025 14:26:57 GMT'
myDate.toString() //IST

myDate.getTime()// gives times in ms since 1970 -1745073258657
const storeDate = new Date(1745073258657)
storeDate.getTime()

myDate.getTime() - storeDate.getTime()