const sampleArray = ['a','b','c','d','e'];

for(let i=0;i<sampleArray.length;i++){
    console.log(sampleArray[i]);
}

//print even number from 1 to 10

// for(let i=1;i<=10;i++){
//     console.log(`${i} ${i%2===0?'even':'odd'}`);
// }

for (let i = 1; i <= 10; i++) {
    i % 2 === 0 ? console.log(i) : null;
}