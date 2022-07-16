/*
1. Isn't it Odd?

Problem

1. Write a function that takes one integer argument, which
can be positive, negative, or zero.
Should return 'true' if number's absolute value is ODD
False if not

Assume argument is valid integer value

input: valid integer (NO decimals)
output: boolean

Restate problem

Return true if integer's absolute value is ODD
false if not

Questions

What does 'valid integer value' mean?
---It DOES NOT contain decimals

Examples/Test Cases

isOdd(2), // => false
isOdd(5),// => true
isOdd(-17), // => true
isOdd(-8), // => false
isOdd(0)// => false
isOdd(7),// => true


Data Structure

??

Algorithem (aka: plan)

Get the absolute value of the integer
Check if it is even or odd 
(If it is NOT divisible by 2 === odd, else it's even)
If it ODD, return true
Else, return false


Code


function isOdd(number) {
  let oddInteger = Math.abs(number);
  if (oddInteger % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(
  isOdd(2), // => false
  isOdd(5), // => true
  isOdd(-17), // => true
  isOdd(-8), // => false
  isOdd(0), // => false
  isOdd(7) // => true
);

*/

/* 2. 
Problem
Log all 'odd' numbers from 1 to 99, inclusive, to 
the console, with each number on a seperate line

Input: a list of numbers from 1 to 99
Output: all ODD numbers, inclusive from 1 to 99, on seperate
lines

Restate problem
Take a list of numbers from 1 to 99 and 
logging all ODD numbers on a seperate line to the console

Examples/Test Cases
N/A

Data Structure

None

Algorithm
Make a for loop with index of 1 to 100
Then check if the index 'i' is odd or not
If it is, log it to the console
If not, skip to the next number

Code

for (let num = 1; num < 100; num++) {
  if (!(num % 2 === 0)) {
    console.log(num);
  }
}

*/

/*
3. Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

for (let num = 1; num < 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

*/

/*
4.
const readline = require("readline-sync");

Ask user to enter length of room in meters
Ask user to enter width of room in meters

Take both numbers and multiply thme to get square meters
Round answer to 2 decimal places (also convert to square feet)

let length = readline.question("Enter the length of the room in meters.\n");

let width = readline.question("Enter the width of the room in meters.\n");

let result = length * width;
let sqFeet = result * 10.7639;

console.log(
  `The area of the room is ${result} square meters (${sqFeet} square feet).`
);

5. Tip Calculator

let bill = Number(readline.question("What is the bill?\n"));
let tipPercent = Number(readline.question("What is the tip percentage?\n"));
let tip = (tipPercent / 100) * bill;
let total = tip + bill;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);

/*
6. Sum or Product of Consecutive Integers
Write a program that asks users to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of all numbers
between 1 and the entered integer, inclusive.

input: integer greater than 0 & letter 's' for sum or 'p' for product
output: sum or product of integers between 1 and entered number

Examples

Down below...

Data Structure
None

Algorithm


If the letter entered is 's' (case sensitive)
have a for loop that loops through number 1 to entered number (num), inclusive,
calculate the sum of all numbers from 1 to entered number
Then, log that sum

If the letter entered is 'p' (case sensitive)
have a for loop that loops through number 1 to entered number (num), inclusive,
Calculate the product of all numbers 
from 1 to the entered number, inclusive
Then log that product

Code

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let sum = 0;
let product = 1;

prompt("Please enter an integer greater than 0:\n");
let integer = Number(readline.question());

prompt("Enter 's' to compute the sum, or 'p' to compute the product:\n");
let letter = readline.question();

if (letter.toLowerCase() === "s") {
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (letter.toLowerCase() === "p") {
  for (let i = 1; i <= integer; i++) {
    product *= i;
  }
  console.log(
    `The product of the integers between 1 and ${integer} is ${product}.`
  );
}

input: 3, s; // return 6
input: 8, p; // return 40320
input: 10, s; // return 55
input: 5, p; // return 120

*/

/*
7. Write a function that takes two 
strings as arguments, determines the length of 
the two strings, and then returns the 
result of concatenating the shorter string, 
the longer string, and the shorter string 
once again. You may assume that the strings 
are of different lengths.

input: 2 strings 
output: shorter string + longer + shorter
//Assume strings are of different lengths

//Examples
shortLongShort('abc', 'defgh');    
// "abcdefghabc"
shortLongShort('abcde', 'fgh');   
// "fghabcdefgh"
shortLongShort('', 'xyz');    
// "xyz"

//Data Structure:

None

//Algorithm: 

Have a function that accepts 2 arguments, str1 and str2
Compare the length of str1 and str2
If str1 is shorter than str2, concatenate str1 to str2 then str1 again
If str2 is shorter than str1, concatenate str2 to str1 then str2 again


Code


function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1.concat(str2).concat(str1);
  } else if (str2.length < str1.length) {
    return str2.concat(str1).concat(str2);
  }
}

console.log(shortLongShort("abc", "defgh"));
// "abcdefghabc"
console.log(shortLongShort("abcde", "fgh"));
// "fghabcdefgh"
console.log(shortLongShort("", "xyz"));
// "xyz"

*/

/* Leap Years (Part 1)
Problem: 
In the modern era under the Gregorian Calendar,
leap years occur in every year that is 
evenly divisible by 4, unless the 
year is also divisible by 100. If 
the year is evenly divisible by 100, 
then it is not a leap year, unless
the year is also evenly divisible 
by 400.

Assume this rule is valid for any 
year greater than year 0. Write a 
function that takes any year greater
than 0 as input and returns true 
if the year is a leap year, 
or false if it is not a leap year.

input: year greater than 0
output: true if year is leap year,
false if not

Examples/Test Cases:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Data Structure: 

None

Algorithm:


If year is divisible by 4 and NOT 100, 
it is a leap year

if it's divisible by 100 AND divisible by 400,
it's a leap year

otherwise it's not a leap year


Code


function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true

*/

/* Leap Year (Part 2)
This is a continuation of the previous exercise.

The British Empire adopted the
Gregorian Calendarin 1752, which was
a leap year. Prior to 1752, 
they used the Julian Calendar. Under 
the Julian Calendar,leap years
occur in any year that is evenly 
divisible by 4.

Using this information, update the 
function from the previous exercise
to determine leap years both before 
and after 1752.

Algorithm:

if year < 1752 && year % 4 === 0, 
then it is a leap year

Code

function isLeapYear(year) {
  if (year <= 1752 && year % 4 === 0) {
    return true;
  } else {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    }
  }
  return false;
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true

*/

/* Multiples of 3 and 5
///Problem
Write a function that computes the 
sum of all numbers between 1 and 
some other number, inclusive, that 
are multiples of 3 or 5. For 
instance, if the supplied number 
is 20, the result should be 
98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number
passed in is an integer greater 
than 1.

Input: integer > 1
Output: Sum of numbers (multiples of 3 or 5)
between 1 and input number

///Examples

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

///Data Structure

None

//Algorithm

//Write a function containing a for 
loop that loops from 1 to input number
//Set a variable equal to sum
//Check if each number in loop is multiple of 3 or 5
//multiple means: 
numbers you get when you multiply a certain number by an integer

//Basically it's divisible by 3 or 5
//Add it to sum
//At end of loop, return sum

Code

function multisum(num) {
  let sum = 0;
  for (let i = 3; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(20)); // 98
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
*/

/* UTF-16 String Value
//Problem
Write a function that determines 
and returns the UTF-16 string value
of a string passed in as an argument.
The UTF-16 string value is the sum 
of the UTF-16 values of every 
character in the string. 
(You may use String.prototype.charCodeAt() 
to determine the UTF-16 value of a character.)

input: string 
Output: UTF-16 string value of the string

//Example
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

//Data Structure

none

//Algorithm

//Write a function that contains a for loop
//Set a variable 'sum' equal to 0
//Iterate over the characters of the string
//Use String.prototype.charCodeAt() to get UTF-16 for each character
//After each iteration, Add each utf-16 value to 'sum'
//At end of loop, return 'sum'

Code

function utf16Value(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value("")); // 0

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811

*/
