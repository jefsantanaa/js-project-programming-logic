alert('Hi there! You are on the Secret Number Game');
let maximumNumber = 10;
let secretNumber = parseInt(Math.random() * maximumNumber + 1);
let attempt = 1;
let guess;

console.log('Secret Number is: ' + secretNumber);

while (guess != secretNumber) {
  guess = prompt(`Choose a number from 1 to ${maximumNumber}:`);
  if (guess == secretNumber) {
    break;
  } else {
    if (guess > secretNumber) {
      alert('The Secret Number is smaller than the Guessed Number '+ guess);
    } else {
      alert('The Secret Number is greater than the Guessed Number ' + guess);
    }
    attempt++;
  }
}

let wordAttemptInPlural = attempt > 1 ? 'attempts' : 'attempt'; /* Is attempts greater than 1? If attempt is greater than 1 write "attempts", otherwise "attempt" */
alert(`Congratulations! You Guessed the Secret Number is ${secretNumber} with ${attempt} ${wordInPlural}.`);


