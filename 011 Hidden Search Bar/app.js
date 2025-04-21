btn = document.querySelector('#btn')
searchBox = document.querySelector('.search-box')
input = document.querySelector('input')
btn.addEventListener('click',()=>{
    input.value = ''
    searchBox.classList.toggle('active')
    input.focus()
})