let textTest = document.querySelector('h1'); // Exercise 2
textTest.innerHTML = 'Challenge Time!';

// <button onclick="displayMessageInConsole()" class="button">Console</button> // Exercise 3
function displayMessageInConsole() {
  console.log('The button was clicked!');
}

// <button onclick="displayAlert()" class="button">Alerta</button> // Exercise 4
function displayAlert() {
  alert('I love JS!');
}

// <button onclick="displayPrompt()" class="button">Prompt</button> // Exercise 5
function displayPrompt() {
  let cityName = prompt('Enter the name of a city in Brazil that you really like:');
  alert(`I was in ${cityName} and I remembered you!`);
}

// <button onclick="calculate()" class="button">Soma</button> // Exercise 6
function calculateTwoNumbers() {
  let firstNumber = parseInt(prompt('Give me a first number:'));
  let SecondNumber = parseInt(prompt('Give me a second number:'));
  let result = number1 + number2;
  alert('The result is ' + result);
}