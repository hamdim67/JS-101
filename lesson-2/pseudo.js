//Write pseudocode for following problems

//1. function that returns sum of 2 numbers

// #Write a function that returns sum of 2 numbers
//Ask for the first number
//Ask for the second number
//Make a variable 'sum' and set to 0
//Change 'sum' to Number input
//Add both numbers to 'sum'
//Then return and display 'sum'

//formal

//START

//GET first number
//GET second number
//Add both numbers and PRINT result

//END

// function addNums(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNums(1, 2));

//2. Function that takes an array
//of strings, and returns
//a string that is all those
//strings concatenated
//together

//Casual Pseudocode

//Givne an array of strings

//Iterate through the collection
//one by one

// --Set concatenated strings to empty array
// --Then push each string onto the new array
// --After iterating through the array of strings,
// --Return the new array

//Formal

// #Given an array of strings called 'strings'

//Set iterator = 1
//Set newArray = empty array
//While iterator <= length of
// --Iterate over the values in the array
// --newArray = 'strings' JOINED together
// ---Iterator = Iterator + 1
// --Go to next iteration

//PRINT newArray

let strings = ["push", "to", "from"];

function stringArray(strings) {
  let newArray = [];

  strings.forEach((string) => {
    newArray = strings.join();
  });

  return newArray;
}

console.log(stringArray(strings));
