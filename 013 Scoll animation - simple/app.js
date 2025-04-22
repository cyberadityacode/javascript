const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    // console.log(window.innerHeight /5 *4);
    const triggerBottom = window.innerHeight/5*4
    boxes.forEach(box=>{
        const boxTop= box.getBoundingClientRect().top
         if(boxTop < triggerBottom){
            box.classList.add('show')
         }else{
            box.classList.remove('show')
         }
    })
}


/* 
window.innerHeight gives you the height of the visible part of the browser window in pixels.

Dividing it by 5 and then multiplying by 4 gives you 4/5 or 80% of the screen height.

So:

If the window height is 1000px, this will be 800px.


So, when the top of the box reaches 80% of the viewport, the box becomes visible (animation/class applied).


Summary
The expression window.innerHeight / 5 * 4 = 80% of viewport height.

It’s used to trigger something (like animation) a bit before the element fully enters the screen, creating a smoother user experience.
*/