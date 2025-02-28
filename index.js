let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = `./images/dice${randomNumber1}.png`;
let img1 = document.querySelector('.img1');
img1.setAttribute('src', randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = `./images/dice${randomNumber2}.png`;
let img2 = document.querySelector('.img2');
img2.setAttribute('src', randomImageSource2);

let resultText;

if (randomNumber1 > randomNumber2) {
    resultText = '🚩 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    resultText = 'Player 2 Wins! 🚩';
} else {
    resultText = "It's a Draw!";
}

let heading = document.querySelector('h1');
heading.textContent = resultText;