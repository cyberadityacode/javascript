function diceRollValFun() {
    const randomDiceValue = Math.floor(Math.random() * 6) + 1;
    const diceHeading = document.querySelector('.dice-box h1');
    const clickSound = document.getElementById("click-sound");

    if (diceHeading && clickSound) {
        clickSound.currentTime = 0; // Rewind to start
        clickSound.play();
        diceHeading.textContent = randomDiceValue;
    } else {
        console.error("Missing element(s):", {
            diceHeadingExists: !!diceHeading,
            clickSoundExists: !!clickSound
        });
    }
}

