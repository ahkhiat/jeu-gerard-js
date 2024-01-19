console.log("script chargé");

let guessField = document.querySelector("#guessField");
let guessSubmit = document.querySelector(".guessSubmit");
let UserGuesses = document.querySelector(".guesses");
let lowOrHi = document.querySelector(".lowOrHi");
let lastResult = document.querySelector(".lastResult");
let resetGame = document.querySelector(".resetGame");

// --------------generate a random number to guess
const randomNumber = Math.floor(Math.random()*100) ;
console.log("Random number :", randomNumber);

// --------------count of rounds
let roundCount = 10;

// --------------Array of guesses
let guessArray = [];

// --------------Listener on the submit button
guessSubmit.addEventListener("click", () => {
    
    if (guessArray.includes(guessField.value)){
        console.log("déjà choisi");
        lowOrHi.innerText = "Déjà choisi !";
    } else {
        roundCount --;
        lastResult.innerText =  "Nombre de tentatives restantes : " + roundCount;
        guessArray.push(guessField.value); 
        UserGuesses.innerText = guessArray;
        checkGame();
        guessField.value = "";
    }
})

function checkGame() {
    if (guessField.value > randomNumber) {
        lowOrHi.innerText = "Plus bas !";
        guessField.focus();
    } else {
        lowOrHi.innerText = "Plus haut !";
        guessField.focus();
    }
    if (guessField.value == randomNumber) {
        gameWin();
    } 
    if (roundCount == 0) {
        gameLoose();
    }
}

function gameWin(){
    lowOrHi.innerText = "C'est gagné !";
    fieldsButtonsHidden();
}

function gameLoose(){
    lowOrHi.innerText = "C'est perdu !";
    fieldsButtonsHidden();
}

function fieldsButtonsHidden() {
    guessSubmit.setAttribute("disabled", true);
    guessField.setAttribute("disabled", true);
    UserGuesses.setAttribute("hidden", true);
    lastResult.setAttribute("hidden", true)
    resetGame.hidden = false;
}

resetGame.addEventListener("click", () => {
    location.reload();
})
