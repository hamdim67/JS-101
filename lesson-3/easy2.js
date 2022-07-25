/*
Q1: Given a string, return a new string 
that replaces every occurrence of the word 
"important" with "urgent":
*/

// let advice =
//   "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replace("important", "urgent"));

/* Q2
The Array.prototype.reverse method reverses the 
order of elements in an array, and Array.prototype.sort 
can rearrange the elements in a variety of ways, 
including descending. Both of these methods mutate 
the original array as shown below. Write two 
distinct ways of REVERSING the array without 
mutating the original array.

Use reverse for the 
first solution, and sort for the second.
*/

/*
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/

/*Solution
To reverse the array WITHOUT modifying original array
--we create a SHALLOW copy of 'numbers' array 
by calling splice() method on it
--Then we use reverse() to reverse array

Reverse() method WILL NOT modify array 
when used on a shallow copy of it
*/
//Method 1
// console.log(numbers.slice().reverse());

/*
Method 2
Spread operator [...arr] is just like arr.slice()
and makes shallow copy of array and thus does NOT 
mutate original array
*/
// console.log([...numbers].reverse());

/*Bonus (use forEach() )
let newNumber = [];
numbers.forEach(function (number) {
  newNumber.unshift(number);
});

//unshift() removes element from END of array
console.log(newNumber);
*/

/*Q3
Given a number and an array, determine whether the number is included in the array
*/

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8; // false
// let number2 = 95; // true

//Answer:
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

/*
Q4: Starting with string

show two different ways to put the expected "Four score and " in front of it.
*/

// let famousWords = "seven years ago...";

//Answer:
// console.log("Four score and " + famousWords);
// console.log("Four score and ".concat(famousWords));

/*
Q5
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
*/

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1);
// //splice mutates the original array, so it removes element at index '2' and deletes '1' element
// console.log(numbers);

/*Q6
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
Create a new array that contains all of the above values, but in an un-nested format:
*/

// let names = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// console.log(names.flat());

/*Q7
Create an array from this object that contains only two elements: Barney's name and Barney's number:
*/

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

// let barney = [];

// //Get array of keys and assign 'Barney' key using index value
// barney[0] = Object.keys(flintstones)[2];
// barney[1] = flintstones.Barney;
// console.log(barney);

// console.log(
//   Object.entries(flintstones)
//     .filter((pair) => pair[0] === "Barney")
//     .shift()
// );

/*
This solution gets an array of key-value pairs
and then filters them (remember, filter returns an array of values)
filter() takes each pair, and if pair[0] === 'Barney', it removes that pair from the filter array
*/

/*Q8
How would you check whether the objects assigned to variables numbers and table below are arrays?


let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));
*/

/*Q9
Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

*/

/*Q10 
Write a one-line expression to count the number of lower-case t characters in each of the following strings:
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.length);
console.log(statement2.length);

/* My solution (NOT one liner :( ))
let getCount = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }
  return count;
};

console.log(getCount(statement1, "t"));
console.log(getCount(statement2, "t"));
*/

/* LS solution
 
statement1.split("").filter((char) => char === "t").length;
statement2.split("").filter((char) => char === "t").length;
*/
