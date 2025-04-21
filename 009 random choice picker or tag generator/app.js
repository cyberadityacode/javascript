const textArea = document.querySelector('textarea')
const tagsSelector = document.querySelector('.tags')


textArea.focus()

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key === 'Enter'){
        e.target.value = ''
    }
    randomSelect()
})

const randomSelect = ()=>{
    const randomTag = pickRandomTag()
    console.log('Selected random tag for you');
    console.log(randomTag);
    highlightTag(randomTag)
}

const pickRandomTag = ()=>{
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

const highlightTag = (rt)=>{
    rt.classList.add('highlight')
}

const createTags = (txt)=>{
    const tags = txt.split(',').
                    filter(tag => tag.trim() !=='').
                    map(tag=> tag.trim())
    
    tagsSelector.innerHTML =''
    tags.forEach(tag=>{
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsSelector.appendChild(tagElement)
    })               
}
