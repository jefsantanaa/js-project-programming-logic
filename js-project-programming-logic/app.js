alert('Hi there! you are on the Secret Number Game');
let secretNumber = 29;
console.log('Secret number is: ' + secretNumber)
let guess = prompt('Choose a number from 1 to 30:');
console.log('Guess number: ' + guess);

console.log('Comparison between guess and secrect number: ' + guess == secretNumber);
if (guess == secretNumber) {
  console.log(`Congratulations, you got the number right, it\'s ${secretNumber}!`);
  alert(`Congratulations, you got the number right, it\'s ${secretNumber}!`);
} else {
  console.log('Secreat number is ' + secretNumber);
  alert('Try again! You missed.');
}
