const playButton = document.querySelector('.play-button');
const resetButton = document.querySelector('.reset-button');

playButton.addEventListener('click', () => {
  // كود اللعبة هنا

// Change the left dice image
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImageSource ="images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomImageSource);

// Change the left dice image
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImageSource2 ="images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomImageSource2);

// Check for the winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Win";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Win 🚩"
}
else {
    document.querySelector("h1").textContent = "🙅‍♂️ It's a Draw! 🙅‍♂️";
}

});

resetButton.addEventListener('click', () => {
    // Reset game logic here
    document.querySelector("h1").textContent = "Roll The Dice";
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  });