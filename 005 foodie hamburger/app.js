const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const goTop = document.querySelector('.go-top')

hamburgerIcon.addEventListener('click', (e)=>{
    // e.stopPropagation()
    headerContent.classList.add('menu-open')
})
headerContent.addEventListener('click', (e)=>{
    e.stopPropagation()
})
closeIcon.addEventListener('click', ()=>{
    headerContent.classList.remove('menu-open')
})

goTop.addEventListener('click', ()=>{
    document.querySelector("body>div").scrollTo(0,0)
})

window.addEventListener('click', ()=>{
    headerContent.classList.remove('menu-open')
})
