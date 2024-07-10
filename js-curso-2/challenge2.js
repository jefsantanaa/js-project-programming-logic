function displayHelloMessage() { // Exercise 1
  console.log('Hello World!');
}

displayHelloMessage();

function displayHelloName(name) { // Exercise 2
  console.log(`Hello, ${name}!`);
}

displayHelloName();

function calculateDouble(number) { // Exercise 3
  return number * 2;
}

let doubleResult = calculateDouble(2);
console.log(doubleResult);

function calculateAverage(a, b, c) { // Exercise 4
  return (a + b + c) / 3;
}

let average = calculateAverage(2, 3, 4);
console.log(average);

function findBigger(a, b) { // Exercise 5
  return a > b ? a : b; // If a is greater than b (a > b), the function returns a. Otherwise, the function returns b.
}

let higherNumber = findBigger(4, 9);
console.log(higherNumber);

function multiplyNumber(number) { // Exercise 6
  return number * number;
}

let result = multiplyNumber(2);
console.log(result);