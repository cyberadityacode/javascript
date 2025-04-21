const progressBar = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentSelectedCircle =1

next.addEventListener('click', ()=>{
    currentSelectedCircle++
    if(currentSelectedCircle > circles.length){
        currentSelectedCircle = circles.length
    }
    updateSelection()
})

prev.addEventListener('click', ()=>{
    currentSelectedCircle--
    if(currentSelectedCircle<1){
        currentSelectedCircle =1
    }
    updateSelection()
})


const updateSelection = ()=>{
    circles.forEach((circle, key)=>{
        if(key < currentSelectedCircle){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const totalActives = document.querySelectorAll('.active')
    progressBar.style.width = (totalActives.length -1) / (circles.length -1) *100 + '%'

    if(currentSelectedCircle ===1){
        prev.disabled = true
    }else if(currentSelectedCircle === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }

}

updateSelection()

/* 
btnParent.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        if(e.target.id ==='next'){
            console.log(e.target.id);
            progressBar.style.width = '33%'
            // console.log(progressBar.nextElementSibling.nextElementSibling); 
            progressBar.nextElementSibling.nextElementSibling.classList.add('active')
        }else if(e.target.id ==='prev'){
            console.log('previous clicked');
            progressBar.style.width = '0%'
        }else{
            console.log('nothing clicked');
        }         
        
    })
}) */