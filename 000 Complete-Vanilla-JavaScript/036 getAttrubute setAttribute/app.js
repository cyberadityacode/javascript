// document.querySelector('[procodrr]').attributes.procodrr


// document.querySelector('[procodrr]').getAttribute('procodrr')
// document.querySelector('[procodrr]')

// set attribute to an element

// added another attribute title which added tooltip
// document.querySelector('.css-head').setAttribute('title','Hello World!')

// document.querySelector(".super-heading").className
// document.querySelector(".super-heading").style
// document.querySelector(".super-heading").style.color = 'teal'


//task - to change all anchor text color to teal


const anchorColor = document.querySelector('a').style.color = 'teal' //but this alters the color to only 1st anchor

//querySelectorAll gives node list

// document.querySelectorAll('a').forEach((mynode)=>{
//     mynode.style.color = 'teal'
//     mynode.style.textDecoration = 'none'
// })


//modify style.css
document.querySelectorAll('a').forEach((mynode)=>{
    mynode.style.cssText= 
    `
    color: teal;
    text-decoration: none;
    `
})

//add class
document.querySelector('.super-heading').classList.add('hii')

//toggle class - i.e, if class exists then remove it, else add class

document.querySelector(".super-heading").classList.toggle('bye') //return true if class added successfully
