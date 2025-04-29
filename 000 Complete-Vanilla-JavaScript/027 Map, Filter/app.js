// const months = ['January','February','March','April','May'];

//forEach returns undefined
// months.forEach((month)=>{
//     console.log(month);
// }) 

// Map returns an array
// const upperMonths = months.map((month)=>{
//     console.log(month);
//     return month.toUpperCase();
// })

// const upperMonths = months.map((month,index)=>{
//     console.log(month,index);
//     return month.toUpperCase();
// })
//forEach returns undefined, meanwhile map returns an array
// const upperMonths = months.forEach((month,index)=>{
//     console.log(month,index);
//     return month.toUpperCase();
// })


// const upperMonths = months.forEach((month,index,array)=>{
//     // console.log(month,index);
//     console.log(array);
//     return month.toUpperCase();
// })


// filter

// const filteredMonths = months.filter((month,index)=>{
//     console.log(month,index);
//     return month.toUpperCase();
// })

/* Summary
https://chatgpt.com/c/67f612ec-43c8-8009-b44d-799b3f5e1f00
map(): Transform each element
Purpose: To transform every item in an array.

Returns: A new array of same length as the original.

Each item is the result of the callback function.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

 filter(): Select certain elements
Purpose: To filter out elements based on a condition.

Returns: A new array of equal or shorter length.

Only includes elements where the callback returns true.
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]


Feature	map()	filter()
Use case	Transform each item	Select items based on a condition
Return value	New array, same length	New array, possibly shorter
Callback	Must return a transformed value	Must return true or false
*/

/* Exactly! 💯 You nailed the core idea. Let's phrase it cleanly:

---

### ✅ **`map()`**:
- **What it does**: Performs **operations** on each element.
- **Result**: Returns a **new array** with the **same length**, where each item is **transformed**.
- **Use when**: You want to **change the data** but **keep all the items**.

**🧠 Think of it like:**  
🔧 *"Give each element a makeover."*

---

### ✅ **`filter()`**:
- **What it does**: **Selects** elements that meet a condition.
- **Result**: Returns a **new array** with **fewer or same number** of items (based on condition).
- **Use when**: You want to **keep only certain items**.

**🧠 Think of it like:**  
🧹 *"Pick only the items that pass the test."*

---

### Quick Visual:

| Method   | Purpose                    | Returns        | Example Use                      |
|----------|----------------------------|----------------|----------------------------------|
| `map()`   | Transform each item        | New array (same size) | Convert prices, reformat data     |
| `filter()`| Select based on condition  | New array (<= size) | Get active users, remove nulls   |

---

So yeah, you're absolutely right:  
👉 **Map = operate on all**  
👉 **Filter = pick the few**

Want a fun analogy to remember this? Or maybe you’re curious about how they work under the hood? */

//----------------------------------


const months = ['January','February','March','April','may','December'];

const monthsCharGrFive = months.filter((cgf) => {
    // console.log(cgf.length > 5 ? true :'');
    return cgf.length>5==true
})

const MonthStartsWithM = months.filter((swm, index, array) =>{
    // return swm.startsWith('M') ||swm.startsWith('m')

    // return swm.toLowerCase().startsWith('m') //startwithm
    // return swm.toLowerCase().includes('m') //includes
    // return index >=3
    return array.includes('may')

});

//Task filter out students who are adults

const students = [
    {
        name: 'abc',
        age : 21,
    },
    {
        name: 'def',
        age : 17,
    },
    {
        name: 'xyz',
        age : 30,
    }
];

// console.log(students);

const adults = students.filter((student)=>{
    return student.age>=18; 
}).map((student) =>{
    console.log(student.name);
    return student.name;
})