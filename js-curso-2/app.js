let secretNumber = generateRandomNumber();
let attempt = 1;

// let title = document.querySelector('h1');
// title.innerHTML = 'You are on the Secret Number Game';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Choose a number from 1 to 10';

function displayTextOnScreen(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

function initialMessage() {
  displayTextOnScreen('h1', 'You are on the Secret Number Game');
  displayTextOnScreen('p', 'Choose a number from 1 to 10');
}

initialMessage();


function checkGuess() {
  let guess = document.querySelector('input').value;
  
  if (guess == secretNumber) {
    let wordAttemptInPlural = attempt > 1 ? 'attempts' : 'attempt';
    let attemptMessage = `You Guessed the Secret Number is ${secretNumber} with ${attempt} ${wordAttemptInPlural}.`;
    displayTextOnScreen('h1', 'Congratulation!');
    displayTextOnScreen('p', attemptMessage);
    document.getElementById('restart').removeAttribute('disabled');
  } else if (guess > secretNumber) {
    displayTextOnScreen('h1', 'Try again!');
    displayTextOnScreen('p', 'The secret number is smaller!');
  } else {
    displayTextOnScreen('h1', 'Try again!');
    displayTextOnScreen('p', 'The secret number is bigger!');
  }
  attempt++;
  clearField();
}

function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1);
}

function clearField() {
  guess = document.querySelector('input');
  guess.value = '';
}

function restartNewGame() {
  clearField();
  initialMessage();
  document.getElementById('restart').setAttribute('disabled', true);
  secretNumber = generateRandomNumber();
  attempt = 1;
}