const dogContainer = document.querySelector(".dog-container");
const button = document.querySelector("button");
const dogImg = document.createElement('img')
setTimeout(() => {
  console.log("hi");
}, 2000);

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log("got the data", json)
      dogImg.src = json.message
      dogContainer.appendChild(dogImg)
    })
});
