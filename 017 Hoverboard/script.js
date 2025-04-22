const container = document.querySelector('.container')
const colors = ['white', 'yellow','red', 'green', 'blue', 'teal']
const SQUARES = 500

for(let i=0; i<SQUARES;i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseout',()=>{
        removeColor(square)
    })

    container.appendChild(square)
}

const setColor = (el)=>{
    // console.log(el);
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    console.log(color);
}
const removeColor = (el)=>{
    el.style.background =`#1d1d1d`
    el.style.boxShadow = `0 0 2px #000`
}

const getRandomColor = ()=>{
    return colors[Math.floor(Math.random() * colors.length)]
}