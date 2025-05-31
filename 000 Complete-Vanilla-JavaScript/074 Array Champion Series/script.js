console.log("Array Champion!");

/* 
 Problem Statement:
You are given an array of mixed values (numbers, strings, booleans, null, undefined, and duplicate numbers).

Your task is to write a function cleanAndSummarize(arr) that does the following:

Removes all non-number values.

Removes all duplicate numbers.

Returns an object with:

cleanedArray: the resulting array of unique numbers (in ascending order).

sum: the sum of the numbers.

average: the average of the numbers (rounded to 2 decimal places).
Input Example:
const input = [5, "hello", 2, null, 5, 3, undefined, true, 2, 10];
Expected Output:

{
  cleanedArray: [2, 3, 5, 10],
  sum: 20,
  average: 5.00
}
Hints (Optional):
Use filter() to remove non-number types.

Use Set or new Set([...]) to deduplicate.

Use reduce() to calculate the sum.

*/
/* function cleanAndSummarize(arr){
    console.log("Existing Array",arr);
    const uniqueNumber = [...new Set(arr)].filter((cur)=> typeof cur==='number').reduce((acc,item)=> acc+item,0)
    console.log(uniqueNumber);
} */

function cleanAndSummarize(arr){
    console.log("Existing Array: ", arr);
    // Filter only Number type
    const numberOnly= arr.filter(item=>typeof item ==='number');

    //remove the duplicate
    const cleanedArray = [...new Set(numberOnly)];

    // Sort the array in Ascending Order
    cleanedArray.sort((a,b)=> a-b);

    //calculate the sum
    const sum = cleanedArray.reduce((acc,num)=> acc+num, 0);

    // calculate average 
    const average = cleanedArray.length? +(sum/cleanedArray.length).toFixed(2):0;

    // Return result

    const result = {
        cleanedArray,
        sum,
        average
    }
    console.log(result);
    return result;
}

const input = [5, "hello", 2, , "4",null, 5, 3, undefined, true, 2, 10];

cleanAndSummarize(input)