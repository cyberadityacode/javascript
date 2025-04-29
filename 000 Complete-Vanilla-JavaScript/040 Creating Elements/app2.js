const container = document.querySelector(".container");
const ImgContainer = document.querySelector(".img-container");

for (let i = 0; i < 90; i++) {
  const newImageContainer = document.createElement("div");
  newImageContainer.classList.add("img-container");
  const myHTML = `
    <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
        />
        <p>${i}</p>
    `;
  newImageContainer.innerHTML = myHTML;
  container.appendChild(newImageContainer);
}
