loadingText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring,30) //change value in 30ms interval
function blurring(){
    load++
    if(load>99){
        clearInterval(int)
    }
    // console.log(load);
    loadingText.innerText = `${load}%`
    // loadingText.style.opacity = 1 to 0 
    /* on the scale we want load which is 0, range from 0 to 100, 
    map this range to number of opacity from 1 to 0 because opaque to visible, in case of reverse set 0 to 1*/


    loadingText.style.opacity = scale(load, 0 , 100, 1, 0 )
    /* similar thing to apply for blur, because i want blur to me 30px max */
    // start blur from 30px and move it down to 0
    bg.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num-in_min) * (out_max-out_min) / (in_max-in_min) + out_min
}

// https://chatgpt.com/c/68070336-2114-8009-a0eb-29a0d44523c7

/* 
What is the purpose of custom scale function?

Imagine a thermometer that reads between 0 and 100, 
but you want to convert its value to a new scale 
that goes from 0 to 1. 
That’s what this function does!

num: The number you want to convert (the original value).

in_min: The minimum of the original range.

in_max: The maximum of the original range.

out_min: The minimum of the new range.

out_max: The maximum of the new range.



*/
