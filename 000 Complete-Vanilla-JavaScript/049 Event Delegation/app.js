//https://chatgpt.com/c/67fb5b97-7c18-8009-8ca1-3fb07c9c6032

/* Event Delegation is a powerful technique 
where you attach a single event listener to a parent 
element to handle events for its child elements, 
even if those children are added dynamically.
 */

const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

const cardsList = document.querySelectorAll('.card')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

    //if you add 100 new cards, it will create 100 new event listener
    //it will affect performance, henceforth , leverage only 1 event listener to parent only
    // newCard.addEventListener('click',()=>{
    //     newCard.remove()
    // })

    container.append(newCard)
})

container.addEventListener('click', (e)=>{
    // console.log(e.target);
    // e.target.remove()

    if(e.target !== container){
        e.target.remove()
    }

})