const h1 = document.querySelector('h1')
const input = document.querySelector('input')

input.addEventListener('keypress', (e)=>{
  console.log(e.code);
  console.log(e.key);
})