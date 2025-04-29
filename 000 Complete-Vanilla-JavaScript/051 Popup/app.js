const button = document.querySelector('button')
const popupContainer = document.querySelector('.popup-container')
const closeIcon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')

button.addEventListener('click', (e)=>{
    
    popupContainer.classList.add('popup-open')
})

closeIcon.addEventListener('click', (e)=>{
    
    popupContainer.classList.remove('popup-open')
})
overlay.addEventListener('click', (e)=>{
    
    popupContainer.classList.remove('popup-open')
})


