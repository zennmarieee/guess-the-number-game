const minNum = document.getElementById("minNum");
const maxNum = document.getElementById("maxNum");
const setBtn = document.getElementById("setBtn");
const guessNum = document.getElementById("guess");
const guessBtn = document.getElementById("guessBtn");
const hintText = document.getElementById("hintText")
const attempt = document.getElementById("attempts");
let min;
let max;
let guess;
let attempts = 0;
let randomNum;
let isSet = false;

setBtn.onclick = function() {
    min = Number(minNum.value);
    max = Number(maxNum.value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        hintText.textContent = "Please enter a valid number";
    }
    else {
        hintText.textContent = "We are now set. Enter your guess and click Guess";
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 
        isSet = true;
    }
    attempt.style.display = "none";
}


guessBtn.onclick = function() {
    min = Number(minNum.value);
    max = Number(maxNum.value);
    guess = Number(guessNum.value)

    console.log(isSet)

    if (isSet) {
        if (isNaN(guess) || isNaN(min) || isNaN(max) || min >= max) {
            hintText.textContent = `Invalid Input`;
        }
    
        else if (guess > randomNum) {
            hintText.textContent = `TOO High. Lower than ${guess}!`;
            attempts++;
        } else if (guess < randomNum) {
            hintText.textContent = `TOO Low. Higher than ${guess}!`;
            attempts++;
        } else {
            hintText.textContent = "Congrats, you guessed it right!";
            attempts++;
            if (attempts == 1) {
                attempt.textContent = `Attempt: 1`;
                attempt.style.display = "block";
            } else {
                attempt.textContent = `Attempts:  ${attempts}`;
                attempt.style.display = "block";
            }
            attempts = 0;
            isSet = false;
        }
    } else {
        hintText.textContent = `Please input a min and max`;
    }

   
}

