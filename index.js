const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 4;
const button = document.getElementById('submitGuess');

button.addEventListener('click', function() {
    const guess = Number(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(guess)) {
        feedback.textContent = "Please enter a number.";
    } else if (guess < minNum || guess > maxNum) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;
        if (guess < answer) {
            feedback.textContent = "Too low! Try again.";
        } else if (guess > answer) {
            feedback.textContent = "Too high! Try again.";
        } else {
            feedback.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
        }
    }
});
