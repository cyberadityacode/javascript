counter = document.querySelector('#counter')

let load =0

let int =  setInterval(countingBegin, 0) //30ms

function countingBegin(){
    load ++
    if(load===2000){
        clearInterval()
    }
    counter.innerText = `${load}`
}