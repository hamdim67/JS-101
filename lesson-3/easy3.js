/*
Write 3 different ways to remove all of the elements from the following array:
*/

let numbers = [1, 2, 3, 4];

/* 1. while() loop
2. splice()
3. set its length to 0; 
*/
/*
while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

numbers.length = 0;
console.log(numbers);

numbers.splice(0, numbers.length);
*/

/*Q2
Output of following code?
*/

// console.log([1, 2, 3] + [4, 5]);

/*
It will output [1, 2, 3, 4, 5]

/*Edit: I was wrong
It will output [1, 2, 34, 5]
b/c there's no space added between the arrays 
--In JS, + operator converts arrays to strings and then concatenates the strings so output is [1, 2, 34, 5]
1,2,3 + 4,5 = 1,2, 34,5
*/

/*Q3
Output of following code

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/* console.log(str1) = "hello there"
B/c strings are immutable in JS; they can't be changed. 
Also means that JS creates a new 'copy' of each string when assigning a string to a variable
So, line 2 assigns str2 a new string that happens to have the same value as str1. Line 3, then, assigns str2 an entirely new string. 
*/

/*Q4
What will the following code output?
*/

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
Output: [{ first: 42 }, { second: "value2" }, 3, 4, 5]

slice() makes a shallow copy of arr1 and assigns a copy of the values in arr1 to the variable arr2

--Making a shallow copy means that any subobjects contained within the array will NOT duplicated, we still only have one occurence of each subobject

But the POINTERS to those objects will be copied, so that means that arr2 will have copy of the pointers to the objects in arr1 as well as copies of the primitive values in arr1

So, anything done to arr2 will affect arr1

*/

/*Q5 
The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
*/

/*
const isColorValid = (color) => color === "blue" || color === "green";

In functions that return boolean values,
you don't need seperate return statements for the true and false cases.
Instead you can return the value of a conditional expression directly.
*/
