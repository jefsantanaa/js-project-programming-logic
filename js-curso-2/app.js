let listOfGeneratedSecretNumbers = [];
let maximumNumber = 10;
let secretNumber = generateRandomNumber();
let attempt = 1;

// let title = document.querySelector('h1');
// title.innerHTML = 'You are on the Secret Number Game';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Choose a number from 1 to 10';

function displayTextOnScreen(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
  responsiveVoice.speak(text, 'US English Male', {rate:1.2});
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
  let chosenNumber = parseInt(Math.random() * maximumNumber + 1);
  let numberOfElementsInTheList = listOfGeneratedSecretNumbers.length;

  if (listOfGeneratedSecretNumbers == maximumNumber) {
    listOfGeneratedSecretNumbers = [];
  }

  if (listOfGeneratedSecretNumbers.includes(chosenNumber)) { // The includes method checks whether the value is included in the list
    return generateRandomNumber();
  } else {
    listOfGeneratedSecretNumbers.push(chosenNumber);
    return chosenNumber;
  }
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