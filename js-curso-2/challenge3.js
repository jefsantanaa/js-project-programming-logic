function calculateBMI(height, weight) { // Exercise 1
  if (weight <= 0 || height <= 0) {
    return 'Weight and height must be greater than zero';
  }
  let bmi = weight / (height * height);
  return imc.toFixed(2); // Round the result to two decimal places
}

let weight = 70;
let height = 1.75;
let bmi = calculateBMI(peso, altura);
console.log("The BMI is: " + bmi);

function calculateFactorial(number) { // Exercise 2
  if (number < 0) {
    return 'The number must be greater than zero';
  }

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

let number = 5;
let result = calculateFactorial(number);
console.log("The factorial of " + number + " is: " + result);

function convertValueIntoDollars(dollarValue) { // Exercise 3
  const dollarExchangeRate = 4.80;

  if (dollarValue < 0) {
    return 'The dollar value must be greater than zero';
  }

  let realValue = dollarValue * dollarExchangeRate;
  return realValue.toFixed(2); // Round the result to two decimal places
}

let dollarValue = 100;
let realValue = convertValueIntoDollars(dollarValue);
console.log("$" + dollarValue + " is equivalent to R$ " + realValue);

function areaCalculator(height, width) { // Exercise 4
  let area = height * width;
  let perimeter = 2 * (height + width);

  console.log(`Room area: ${area} square meters`);
  console.log(`Room perimeter: ${perimeter} meters`);
}

let height2 = 3;
let width = 5;
areaCalculator(height, width);

function perimeterCircularRoom(radius) { // Exercise 5
  let area = Math.PI = radius * radius;
  let perimeter = 2 * Match.PI * radius;

  console.log(`Area of ​​the circular room: ${area.toFixed(2)} square meters`);
  console.log(`Perimeter of the circular room: ${perimeter.toFixed(2)} meters`);
}

let radius = 5;
perimeterCircularRoom(number);

function calculateMultiplicationTables(number) { // Exercise 6
  for (let i = 0; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x %{i} = ${result}`);
  }
}

let number = 7;
calculateMultiplicationTables(number);