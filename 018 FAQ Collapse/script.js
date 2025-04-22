const btnToggle = document.querySelectorAll('.btn-toggle')

btnToggle.forEach(btn=>{
    btn.addEventListener('click',()=>{
         btn.parentNode.classList.toggle('active')
    })
})
