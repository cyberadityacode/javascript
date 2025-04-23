const items = document.querySelectorAll('.slider .list .item')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const thumbnails = document.querySelectorAll('.thumbnail .item')

// config param - count items in the slider
let countItem = items.length
let itemActive = 0; //class which is active
// handle next button click event

next.addEventListener('click', ()=>{
    itemActive = itemActive+1
    if ( itemActive>= countItem){
        itemActive = 0
    }
    showSlider()
})

prev.addEventListener('click', ()=>{
    itemActive= itemActive -1 
    if(itemActive < 0 ){
        itemActive = countItem-1
    } 
    showSlider()
})

// auto run slider without user click

let refreshInterval = setInterval(()=>{
    next.click()
}, 3000)

const showSlider = ()=>{
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active')
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
    itemActiveOld.classList.remove('active')
    thumbnailActiveOld.classList.remove('active')

    //add active class to new location
    items[itemActive].classList.add('active')
    thumbnails[itemActive].classList.add('active')

    //clear auto time run slider
    clearInterval(refreshInterval)
    refreshInterval = setInterval(()=>{
        next.click()
    },5000)

}

// click thumbail to display corresponding slider image
// index is the position just clicked
thumbnails.forEach((thumbnail, index)=>{
    thumbnail.addEventListener('click', ()=>{
        itemActive = index
        showSlider()
    })
})