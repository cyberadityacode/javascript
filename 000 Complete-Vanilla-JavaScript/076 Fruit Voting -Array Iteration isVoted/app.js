console.log("Array iteration is Voted Challenge");

const fruits = ["apple", "banana", "mango", "musk melon"];

console.log(fruits);

// Converting fruits array into object with property isVoted = false (initial)

const fruitObjects = fruits.map((fruit) => ({
  name: fruit,
  isVoted: false,
}));

console.log(fruitObjects);

const fruitListDiv = document.getElementById("fruitList");
const voteCounterDiv = document.getElementById("voteCounter");

function renderFruits() {
  fruitListDiv.innerHTML = ""; //clearing the existing content

  // counting total votes where isVoted ===true

  const totalVotes = fruitObjects.filter((fruit) => fruit.isVoted).length;

  // Display the vote count

  voteCounterDiv.innerHTML = `Fruits Voted: ${totalVotes}/ ${fruitObjects.length}`;

  fruitObjects.forEach((fruit, index) => {
    const div = document.createElement("div");

    div.innerHTML = `<strong>${fruit.name}</strong>-
        <span>${fruit.isVoted ? "Voted" : "Not Voted"}</span>
        <button onClick="toggleVote(${index})">${
      fruit.isVoted ? "Unvote" : "Vote"
    }</button>`;

    fruitListDiv.appendChild(div);
  });
}

function toggleVote(index) {
  // toggle the isVoted Value
  fruitObjects[index].isVoted = !fruitObjects[index].isVoted;

  // re-render to display updated UI
  renderFruits();
}
renderFruits();
