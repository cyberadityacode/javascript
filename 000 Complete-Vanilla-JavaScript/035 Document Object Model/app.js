// // // document
// // // typeof document // object
// // console.dir(document)
// // // document.all // all properties enlist all elements of the document

// // document.children // array collection
// // document.children[0].children[1] //body

// // //in short
// // document.body

// // document.body.children
// // document.body.children[0]

// // function changeImg(ImgURL){
// //     document.body.children[3].src = ImgURL
// // }

// // // document.getElementsByTagName('img')
// // // document.images
// // alert("hello")
// // const cssImage = document.getElementsByClassName('css-head')
// // const cssId = document.getElementById('id-1')
// // // cssImage[0]


// let bestWay = document.querySelectorAll(".sample")

// // . Make sure the script runs after the HTML is loaded


// // attribute selector
// // go to css [alt="image"] {}

// let liSelectorAll = document.querySelectorAll("ul li")


// const allImages = document.images
const allImages = [...document.images]  //converts into an array

const imgArray = ["https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
]

allImages.forEach((img,index)=>{
    img.src = imgArray[index]
})


const ulSelector = document.querySelectorAll('ul')
// ulSelector.querySelectorAll //select all content within ulSelector