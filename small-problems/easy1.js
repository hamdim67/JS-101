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

Array

Algorithm
Make a for loop with index of 1 to 100
Then check if the index 'i' is odd or not
If it is, log it to the console
If not, skip to the next number

Code
*/
