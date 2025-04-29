const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

/* 
Event Bubbling in JavaScript is a concept 
in the DOM (Document Object Model) 
where an event starts from the deepest
 (innermost) element and then bubbles up to
  its ancestors (parent elements)
 in the DOM tree.

*/
/* 
green.addEventListener('click', (e)=>{
    console.log('Green Event Listener');
})
pink.addEventListener('click', (e)=>{
    console.log('pink Event Listener');
})
blue.addEventListener('click', (e)=>{
    // If you don’t want the event to bubble up to parent elements, use:
    e.stopPropagation()
    console.log('blue Event Listener');
}) */

//when you pass true, it will bubble reverse
/* Event Capturing: Opposite of bubbling,
 where event \
goes from outermost to innermost. */
/* green.addEventListener('click', (e)=>{
    console.log('Green Event Listener');
}, true)
pink.addEventListener('click', (e)=>{
    console.log('pink Event Listener');
}, true)
blue.addEventListener('click', (e)=>{
    // If you don’t want the event to bubble up to parent elements, use:
    e.stopPropagation()
    console.log('blue Event Listener');
}, true) */

blue.addEventListener('click', (e)=>{
    // If you don’t want the event to bubble up to parent elements, use:
    e.stopPropagation()
    console.log('blue Event Listener');
}, {capture:true, once:true}) //this will run event for one time only
