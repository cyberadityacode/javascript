// https://chatgpt.com/c/680092ab-07b0-8009-9271-fa07199eac78

/* 
3 stages of promis - pending, fulfilled, rejected
*/
/* 
const p = new Promise((resolve, reject)=>{
  resolve()
}) */

//you can also use setTimeOut to resolve a  promise

const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

/* const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('aditya')
  }, 5000)
})
 */

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise resolved---");
  });
  rejectBtn.addEventListener('click', ()=>{
    reject("Promise Rejected---")
  })
});

/* One promise can be involked one time only,either reject or resolved */
//reload page
/* p.then(()=>{
  console.log('promise resolved');
}).catch(()=>{
  console.log('promise rejected');
}) */
/* p.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
}) */
p.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log("Finally Promise settled")
})