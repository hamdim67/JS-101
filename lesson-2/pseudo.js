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

// let strings = ["push", "to", "from"];

// function stringArray(strings) {
//   let newArray = [];

//   strings.forEach((string) => {
//     newArray = strings.join();
//   });

//   return newArray;
// }

// console.log(stringArray(strings));

//3. a method that takes an array of integers,
//and returns a new array with every other element
//from the original array, starting with the
//first element. For instance:

//everyOther([1,4,7,2,5]); // => [1,7,5]

//Casual Pseudocode

//Make a function that takes the array as an argument
//Then, set new array equal to empty array
//Then, iterate through every other element of the array using a for loop
//(If index of element is divisible by 2, push value onto new Array)
//Then, push every other element onto the new array
//Return the new array

// function everyOther(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// console.log(everyOther([1, 4, 7, 2, 5]));

//4. a function that determines the index of
//the 3rd occurrence of a given character in
//a string. For instance, if the given character
//is 'x' and the string is 'axbxcdxex', the
//function should return 6 (the index of the
//3rd 'x'). If the given character does not
//occur at least 3 times, return null.

//Casual pseudocode

//Make a function that takes a string as an argument
//Set count = 0
//Then, traverse the string character by character
//Increment count by 1 if it matches the character
//If count becomes equal to 3 (occurs 3 times),
//return latest found index
//If count does NOT match with 3 after looping,
// return -1

// function countString(str, letter) {
//   let count = 0;

//   //loop thorugh to find Nth occurrence of character
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter) count += 1;

//     if (count == 3) return i;
//   }
//   return -1;
// }

// console.log(countString("axbxcdxex", "x", 3));

//5. a function that takes two arrays of
//numbers and returns the result of merging
//the arrays. The elements of the first array
// should become the elements at the even indexes
//of the returned array, while the elements
//of the second array should becoome the
//elements at the odd indexes. For instance:

//Maybe
//1st you can join both arrays
//And then you sort them:
//Loop through each array and add to new array
//based on this:
//1st array elements added to even index of new array
//2nd array elements added to odd index of new Array

//
