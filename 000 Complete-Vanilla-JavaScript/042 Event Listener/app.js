const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector(".card")

function sayHi(){
    console.log('hi');
}
/* onclick needs function to execute upon */

/* Drawback- you can use for only one event */
// h1.onclick = sayHi


/* You can add multiple Event listener to 
operate on any event  */
h1.addEventListener('click', sayHi)
h1.addEventListener('click', function(){
    console.log('second hi');
})

let clickCounter =0
card.addEventListener('click',()=>{
    clickCounter++
    console.log('hello from card');
    /*
    // method 1 : cloning
    const newCard = card.cloneNode() */

    /* method 2: create element */
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.textContent = clickCounter
    container.appendChild(newCard)
    console.log('card added successfully');
})