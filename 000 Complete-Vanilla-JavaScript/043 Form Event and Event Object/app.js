const input = document.querySelector("#username");
const paragraph = document.querySelector("p");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  //prevent default behaviour of form submission
  e.preventDefault();
  // console.log('form submited');
  const myFormData = new FormData(form);
  // console.log(myFormData);
  // console.log(myFormData.entries());
  for (const p of myFormData.entries()) {
    console.log(p);
  }
});

/* input.addEventListener('click', ()=>{
    console.log('input clicked');
})
 */
/* input.addEventListener('input', ()=>{
    console.log('input event fire');
}) */
// to access value pass event object

/* let inputValue
input.addEventListener('input', (event)=>{
    console.log(`input event fire ${event.target.value}`);
    inputValue = event.target.value //store for future use
    paragraph.innerText = event.target.value
}) */

// change event occur when i hover out and exit from input field

/* input.addEventListener('change', (event)=>{
    console.log(`change event fired ${event.target.value}`);
})
 */
/* focus - occur when you click on input element
blur - occur when you exit from input element */

input.addEventListener("focus", (event) => {
  console.log("focus event fired");
  console.log(event);
});

input.addEventListener("blur", (event) => {
  console.log("blur event fired");
  console.log(event);
});
