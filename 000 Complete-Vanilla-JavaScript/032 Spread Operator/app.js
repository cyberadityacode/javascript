const nums1 = [1,2,3,4]
// const nums2 = [5,6,7,8]
// // const name = "aditya"
// // const joinedArray = [...nums1, ...nums2, ...name]
// const joinedArray = [...nums1, ...nums2]
// /* 
// const user = {
//     username : 'aditya',
//     age: 31
// }
// const updatedUser = {...user, city: 'jabalpur'}
//  */

// // use spread in function
// function add(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum = sum+ arguments[i]
//     } 
//     return sum
// }

// add(...joinedArray)


function add(...nums){
    return nums.reduce((acc,curr)=> acc+curr)
    // return [...arguments].reduce((acc,curr)=> acc+curr)
}
const result = add(9,19,56,89,898,6)