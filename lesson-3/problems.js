"use strict";
/* Easy problems

-> Easy 1
Question 1
Will the following code raise an error
*/

// let numbers = [1, 2, 3];
// numbers[6] = 5;

// console.log(numbers);

/* Answer: No, it will add the value at that index 
as well as add 'unset values'
to the array to fill in any
 missing elements before it. 

Bonus

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

Answer:
returns undefined b/c the value has
not been explicitly set at that element

But the slot is empty, so even though it 
returns undefined, it doesn't have a value 
(not even undefined)


Question 2
How can you determine whether a 
given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(str1.includes("!"));

Answer: 
By using the .includes() method on the string
you can check if it includes an exclamation point


Question 3

Determine whether the following 
object of people and their age 
contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty("Spot"));



Question 4
Using the following string, create 
a new string that contains all 
lowercase letters except for the 
first character, which should be 
capitalized. (See the example 
output.)

*/

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// //Splice off first character, change it to uppercase and add back to string

// let newStr = munstersDescription.toLowerCase().substring(1);

// let firstChar = munstersDescription.slice(0, 1).toUpperCase();
// console.log(firstChar + newStr);

/*
Question 5

What's the output?

console.log(false == '0');
console.log(false === '0');

Answer: 
true
false
*/

/*
Question 6:
Add entries for Marilyn and Spot to the object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
*/

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// console.log(Object.assign(ages, additionalAges));

/*
Question 7
Determine whether the name 
Dino appears in the strings 
below -- check each string s
eparately):
*/

// let str1 =
//   "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes("Dino"));
// console.log(str2.includes("Dino"));

/*
How can we add the family pet, "Dino", 
to the following array?
*/

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// console.log(flintstones);

/*
Add Multiple items: ('Dino' and 'Hoppy')
*/

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Happy");
// console.log(flintstones);

/*
Return a new version of this sentence that ends
just before the word house. Don't worry about 
spaces or punctuation: remove everything starting 
from the beginning of house to the end of the 
sentence.
*/

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// console.log(advice.slice(advice.indexOf("house")));

let newStr = advice.indexOf("house");
console.log(newStr);
