const card = document.querySelector('.card')
const span = document.querySelector('span')
card.addEventListener('click', (e)=>{
    //checking mouse click position
    console.log(e.clientX, e.clientY); 

    //checking offset positions
    console.log(e.target.offsetLeft, e.target.offsetTop);

    const createEl = document.createElement('i')
    createEl.classList.add('fa-solid','fa-heart')
    createEl.style.color = 'red'
    span.style.left = `${e.clientX}px`
    span.style.top = `${e.clientY}px`

    span.innerHTML = '';
    span.appendChild(createEl);
    setTimeout(()=>{
        if(createEl){
            createEl.remove()
        }
    },1000)
})