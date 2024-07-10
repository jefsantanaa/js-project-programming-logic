let secretNumber = generateRandomNumber();

// let title = document.querySelector('h1');
// title.innerHTML = 'You are on the Secret Number Game';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Choose a number from 1 to 10';

function displayTextOnScreen(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

displayTextOnScreen('h1', 'You are on the Secret Number Game');
displayTextOnScreen('p', 'Choose a number from 1 to 10');

function checkGuess() {
  let guess = document.querySelector('input').value;
  console.log(guess == secretNumber);
}

function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1);
}
