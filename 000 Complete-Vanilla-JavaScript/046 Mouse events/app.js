const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

/* click, mousedown,mouseup,
mouseenter,mouseleave,mousemove, wheel ,scroll, mouseup*/
/* for mobile: touchstart ,touchend,touchmove(swipe)*/

/* mouseenter and mouseover difference */
//pointermove works for both desktop and mobile

h1.addEventListener('drag', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
// card.addEventListener('touchstart', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })