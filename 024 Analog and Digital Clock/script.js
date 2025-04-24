/* setInterval(()=>{
    const date = new Date()  
    const hourT = date.getHours()  
    const minT = date.getMinutes() 
    const secT = date.getSeconds()
    
    hRotation = 30*hourT + minT/2
    mRotaion = 6*minT
    sRotation = 6*secT
    // console.log(hourT,minT,secT);

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotaion}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
},1000) */

// better version

const hourArrow = document.querySelector('#hour')
const minArrow = document.querySelector('#minute')
const secArrow = document.querySelector('#second')


const digitalClockContainer = document.querySelectorAll(".digital-clock-container")
/* 
digitalClockContainer.forEach((dc)=>{
    console.dir(dc);
    console.log(dc.children[0].id);//dc hour
    console.log(dc.children[1].id);//dc min
    console.log(dc.children[2].id);//dc sec

    dc.children[0].id==='d-hour'? dc.children[0].innerText= new Date().getHours() : console.log('error');
    dc.children[1].id==='d-minute'? dc.children[1].innerText= new Date().getMinutes() : console.log('error');
    dc.children[2].id==='d-second'? dc.children[2].innerText= new Date().getSeconds() : console.log('error');
}) */
setInterval(()=>{
    const d = new Date()
    const hourRotation = 30 * d.getHours() + d.getMinutes()/2 
    const minRotation = 6 * (d.getMinutes())
    const secRotation = 6 * (d.getSeconds())
    // console.log(secRotation);
    
    //setting for analog clock
    hourArrow.style.transform = `rotate(${hourRotation}deg)`
    minArrow.style.transform = `rotate(${minRotation}deg)`
    secArrow.style.transform = `rotate(${secRotation}deg)`

    //setting for digital clock
    digitalClockContainer.forEach((dc)=>{
       /*  console.dir(dc);
        console.log(dc.children[0].id);//dc hour
        console.log(dc.children[1].id);//dc min
        console.log(dc.children[2].id);//dc sec
     */
        console.dir(dc.children);
        dc.children[0].id==='d-hour'? dc.children[0].innerText= d.getHours().toString().padStart(2,'0') : console.log('error');
        dc.children[1].id==='d-minute'? dc.children[1].innerText= d.getMinutes().toString().padStart(2,'0') : console.log('error');
        dc.children[2].id==='d-second'? dc.children[2].innerText= d.getSeconds().toString().padStart(2,'0') : console.log('error');
    }) 

},1000)