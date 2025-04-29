const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// const img = document.querySelector('img')

// for(let i=0;i<=90;i++){
//     const newImg = img.cloneNode()
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(newImg)
// }

/* In the above case, there is a dependency of const img! i.e, 1st image */

/* It is better to create new element to resolve dependency. */

for (let i = 0; i <= 90; i++) {
  const myImage = document.createElement("img");
  myImage.classList.add("my-img");
  myImage.setAttribute(
    "src",
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  );
  container.appendChild(myImage);
}

document.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "img") {
    event.target.classList.toggle("my-img");
    console.log("Toggled class on image!");
  } else {
    console.log(event.target.tagName);
  }
});

/* Bingo! this creates new element called img
set the attribute src with dynamic value
then, appendChild to the container. */
