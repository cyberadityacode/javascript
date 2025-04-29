/* 
Event Simulation means programmatically 
triggering an event on a DOM element 
— as if a real user did it 
(like clicking a button or pressing a key),
 but via code.
*/

const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// addCardBtn.click()

// add 1000 card
// for(let i=0;i<1000;i++){
//     addCardBtn.click()
// }

// setInterval(()=>{
//     addCardBtn.click()
// },2000)

//click event simulator
/* const intervalId = setInterval(()=>{
    if (count>1000){
        clearInterval()
    }else{
        addCardBtn.click()
        count+=1
    }
},5) */

//automatically focus on input element, when 
//page reloads
// input.focus()

//focus on input after 2 second of webload

setTimeout(()=>{
    input.focus()
},2000)

setTimeout(()=>{
    input.blur()
},4000)

