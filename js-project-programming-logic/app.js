alert('Hi there! you are on the Secret Number Game');
let secretNumber = 29;
let tries = 1;
let guess;

console.log('Secret number is: ' + secretNumber);

while (guess != secretNumber) {
  guess = prompt('Choose a number from 1 to 30:');

  if (guess == secretNumber) {
    alert(`Congratulations, you got the number right, it\'s ${secretNumber}! Times tried: ${tries}`);
  } else {
    if (guess > secretNumber) {
      alert('The secret number is smaller than the guessed number '+ guess);
    } else {
      alert('The secret number is greater than the guessed number ' + guess);
    }
    tries++;
  }
}
