const openBar = document.querySelector('#open')
const closeBar = document.querySelector('#close')
const container = document.querySelector('.container')

openBar.addEventListener('click', ()=>{
    container.classList.add('show-nav')
})

closeBar.addEventListener('click', ()=>{
    container.classList.remove('show-nav')
})
