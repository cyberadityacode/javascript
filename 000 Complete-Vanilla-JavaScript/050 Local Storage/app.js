const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageInput = document.querySelector('.age')
const ageElement = document.querySelector('.age-tag')

/* // nameElement.innerText = localStorage.myname
nameElement.innerText = localStorage.getItem('myname')

nameInput.addEventListener('input', (e)=>{
    // localStorage.myname = e.target.value;
    localStorage.setItem('myname', e.target.value)
    nameElement.innerText = localStorage.myname
})

// nameElement.innerText = localStorage.myname

// Remove item
// localStorage.removeItem("myname");

// Clear all items
// localStorage.clear(); */

// In localStorage we can not directly store object, only string can be stored

const myData = JSON.parse(localStorage.getItem('myData')) || {}



nameInput.addEventListener('input', (e)=>{
    myData.name = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    nameElement.innerText = e.target.value
})
ageInput.addEventListener('input', (e)=>{
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    ageElement.innerText = e.target.value
})

nameElement.innerText = myData.name || "";
ageElement.innerText = myData.age || "";