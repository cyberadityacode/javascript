// console.log("Let's learn about math");

//picks random value between 0 to 5
//  Math.floor(Math.random()*5)

// pick random number between 11 to 14
//1-5
// const pickNumber = Math.floor(Math.random() * 5) + 1;
// console.log(pickNumber);

// // 10to15
// Math.floor(Math.random()*(15-10))+10
// Math.floor(Math.random()*(max-min))+min

// // dice range 1to6
// const diceRoll = Math.floor(Math.random() * (6 - 1)) + 1;
// console.log(diceRoll);

// Dice Roll Game by cyberaditya

// function diceRollValFun() {
//     const randomDiceValue = Math.floor(Math.random() * 6) + 1;
//     const diceHeading = document.querySelector('.dice-box h1');
//     document.getElementById("click-sound").play();
//     diceHeading.textContent = randomDiceValue;
// }

// function diceRollValFun() {
//     const randomDiceValue = Math.floor(Math.random() * 6) + 1;
//     const diceHeading = document.querySelector('.dice-box h1');
//     const clickSound = document.getElementById("click-sound");

//     if (diceHeading && clickSound) {
//         clickSound.currentTime = 0; // Rewind to start
//         clickSound.play();
//         diceHeading.textContent = randomDiceValue;
//     } else {
//         console.error("Missing element(s):", {
//             diceHeadingExists: !!diceHeading,
//             clickSoundExists: !!clickSound
//         });
//     }
// }
const rectWidth = +prompt("Enter Width of Rectangle")
const rectHeight = +prompt("Enter Height of Rectangle")

console.log(rectHeight*rectWidth);

document.write("rectHeight*rectWidth:"+rectWidth*rectHeight)
