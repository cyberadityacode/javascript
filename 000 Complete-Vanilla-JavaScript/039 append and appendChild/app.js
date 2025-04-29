const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')

/* append means to add element to the last
inside container append the child h1 
similar to cut paste */
// container.appendChild(h1)

// h1.cloneNode() //return the clone node of h1, but ignore text inside the same.
// h1.cloneNode(true) //deep clone, also contain the text inside tag


/* inside container append the child h1 (while making deep copy) */

// container.appendChild(h1.cloneNode(true))

/* want to append card inside container!, but it will cut paste and wont make any difference */

// container.appendChild(card)
/* This will make clone of card inside container, with deep copy */
// container.appendChild(card.cloneNode(true))

/* Interesting thing is that, you can add empty clone just with 
tags, if you alter deep copy boolean value to false */

// container.appendChild(card.cloneNode()) //false default value


/* Lets play furthermore
Add 2 - 100 cards with numeral value as text inside card */
/* 
const newCard = card.cloneNode()

newCard.innerText = 2
container.appendChild(newCard)
 */

/* TASK begin */


for(let i=2;i<=100;i++){
    const newCard = card.cloneNode()
    newCard.innerText = i
    container.appendChild(newCard)
}

//You can any element but not parent