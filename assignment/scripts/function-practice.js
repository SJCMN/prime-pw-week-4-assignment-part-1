console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test

console.log(helloName('Jim'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;// return firstNumber + secondNumber;
}

console.log('The sum of 2 and 3 is: ', addNumbers(2,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;// return each paramater multiplied
}

console.log('The product of 2 * 3 * 4 is: ', multiplyThree(2,3,4) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if (number <= 0){
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let lastItem = ['first', 'second', 'third', 'last']
let emptyArray = []

function getLast( array ) {
  if ( array.length > 0 ){ // if the array contains items
    return array[array.length-1]; // return length - 1 for the index of last item
  } else if (array.length === 0) { // if the array is empty it will have length of 0
    return undefined;
  }
}

console.log('The last item in the array is: ', getLast(lastItem));
console.log('An empty array is: ', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let dinnerOptions = ['tacos', 'tortillas', 'salsa', 'guacamole']

function find( value, array ) {
  for (const option of array) {
    if (option === value) { // compare value to each item in the array
    console.log(`Your choice of ${value} is available!`); // log the value argument provided when a match is found
    return true;
    }
  }
  console.log(`Your choice of ${value} is unavailable, Please make another selection.`); // log the value when a match is not found
  return false; // false statement must not be nested with the loop as an else if- when it is the function always returns the last statement
};

console.log(dinnerOptions);

console.log(find('guacamole', dinnerOptions));

console.log(find('tacos', dinnerOptions));

console.log(find('tamales', dinnerOptions));

console.log(find('burrito', dinnerOptions));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let sepString = [...string[0]]; // spread string into array of letters
  if (sepString[0] === letter){ // compare first letter of new array with letter argument
    return true;
  } else {
  return false;
  }
 }
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numberArr = [1,2,3,4,5]

function sumAll( array ) {
  let sum = 0
  for (let i = 0; i < numberArr.length; i++) {
    sum = array[i] + sum;
  }
  // TODO: loop to add items
  return sum;
}

console.log(numberArr);
console.log('Hers is the sum of this array: ' , sumAll(numberArr));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function allPositive( array ) {
  let positiveArr = [];
  for (const num of array) {
    if (num % 2 === 0){
    positiveArr.push(num);
    }
  } if (positiveArr.length === 0){
    positiveArr = [];
  }
  return positiveArr;
}

console.log(numberArr);
console.log('Here are all the positive numbers in the same array:' , allPositive(numberArr));

let nonPositiveArr = [1,5,7,19];

console.log(nonPositiveArr);
console.log('The array above contains all negative numbers:' , allPositive(nonPositiveArr));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

function twoNumRemainder (num1, num2){
    
}
