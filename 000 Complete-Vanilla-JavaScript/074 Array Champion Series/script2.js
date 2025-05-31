/*//Novice Level Code 
function groupAndCountTypes(arr){
    const totalNumberUnique = [...new Set(arr)].filter((num)=> typeof num==='number').length;
    const totalStringUnique = [...new Set(arr)].filter((str)=> typeof str==='string').length
    const totalBoolean = [...new Set(arr)].filter((bool)=> typeof bool==='boolean').length;
    const totalUndefined = [...new Set(arr)].filter((undef)=> typeof undef==='undefined').length;
    const totalObject = [...new Set(arr)].filter((obj)=> typeof obj ==='object').length;

    return {
        number: totalNumberUnique,
        string: totalStringUnique,
        boolean: totalBoolean,
        undefined: totalUndefined,
        object: totalObject
    }
}
 */

// pro level code

function groupAndCountTypes(arr) {
  const typeCount = {}; //empty object to hold counts

  for (let item of arr) {
    //go through each item in an array
    const type = typeof item; //find the type (number,string, object)

    // fix a weird JS case: typeof null is object, but we want to treat as 'null'
    const finalType = item === null ? "null" : type;

    // if this type is not yet in our count object, start it at 0
    if (!typeCount[finalType]) {
      typeCount[finalType] = 0;
    }
    // Add 1 to the count for this type
    typeCount[finalType]++;
  }
  return typeCount;
}

const input = [5, "hello", 2, , "4", null, 5, 3, undefined, true, 2, 10];

const output = groupAndCountTypes(input);
console.log(output);
