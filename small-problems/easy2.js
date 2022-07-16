/*
Problem:
1. Create a function that takes 2 arguments,
an array and an Object. The array will contain
2 or more elements that, when combined with adjoining spaces, will
produce a person's name.
The object will contain two keys, "title" and "occupation", and the 
appropriate values. Your function should return a 
greeting that uses the person's full name, and mention's the person's title

Examples
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

Data structures

Arrays, objects


Algorithm

1. Turn the array into a string using a relevant method
2. Also log the value of each key in the object 

Actually



Code

function greetings(arr, obj) {
  return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${
    obj.occupation
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

*/

/*
2. Write a program that will ask 
for user's name. The program will 
then greet the user. If the user 
writes "name!" then the computer 
yells back to the user.

Example
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Data Structures

none

Algorithm

1. Prompt user for their name and 
2. Then greet the user
3. If user's name includes exclamation point (ie: Bob!, Lucy!)
4. Then computer should yell a greeting back to the user

Code

const readline = require("readline-sync");

let greeting = readline.question("What is your name?\n");

if (greeting.includes("!")) {
  console.log(`Hello ${greeting}. WHY ARE WE SCREEMING?`);
} else {
  console.log(`HELLO, ${greeting}`);
}

*/

/*
agenda
1. introductions: name, what you're currently studying, where you're located
  - Joey - School Psychologist, Ohio, Capstone in the Fall
  - Abbie - TA, Wisconsin, Halfw
  - Hamdi, Rochester, Parapro, 
  - Charles, Hawaii, Instrumental
  - Devin, North of Seattle, Music Teacher
  - Mark, Toronto, Security
  - Ammar, Columbia SC, Professional MMA Fighter
  - Ruoxinhe, Toronto, Undergraduate Student University of Toronto (Undeclared)
2. study tips
  - Mark - Repetition, PEDAC
  - Joey - Handwritten Notes, Notion, Anki
  - Ruxoin - Tracking Time, 
  - Hamdi - Notion --> Anki
  - Devin - Divided Energy
  - Abbie, Ammar - Repeat Practice Problems
3. student questions
  - Operators
  - vowelCount
4. code snippets

*/

/*
Understanding the Problem
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

Input: String
Output: Array containing numebrs that represent the number of vowels in each word

Explicit Rules
- The array should contain the same number of elements as words in the string.

Implicit Rules
- Some words may not contain vowels.
- If empty string => return empty string
- Vowels should be counted without consider case

What are vowels? => ['a', 'e', 'i', 'o', 'u']

Examples
console.log(vowelCount("WhaTs yOur enneagram?")); // [1, 2, 4]
console.log(vowelCount("Colonel Sanders feeds me well !!")); // [3, 2, 2, 1, 1, 0]
console.log(vowelCount("")); // []
console.log(vowelCount("ZoInkies!! There are monsters in here.")); // [4, 2, 2, 2, 1, 2]
console.log(vowelCount("grrr!")); // [0]

Data Structure
- String, Array, Numbers

Algorithm
Create a function that accepts a string as an argument
Declare and initialize an empty array (results)
Split the string into individual words
Split the words into characters
Loop over the array
- Count the vowels for each word
- Push the result to the results array

Return the results array

Code
function vowelCount(phrase) {
  // Guard Clause
  if (phrase.length === 0) return [];

  // Store Our Results
  const results = [];

  // Split our phrase into words
  const words = phrase.split(" ");

  // For each word
  for (let count = 0; count < words.length; count++) {
    const characters = words[count].split("");

    // Start a count for vowels
    let vowels = 0;

    // For each character, if a vowel is detected, increment or increase the vowel count by 1
    for (let innerCount = 0; innerCount < characters.length; innerCount++) {
      if (
        ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(
          characters[innerCount]
        )
      ) {
        vowels = vowels + 1;
      }
    }

    // Taking that vowel number and putting it in our result array
    results.push(vowels);
  }

  // Return that results array
  return results;
}
*/

// let bigSmallArray = [4, 10, 50, 23, 80, 1303, 238, 32, 200, 450];

// let answers = [];

// for (let i = 0; i < bigSmallArray.length; i++) {
//   if (bigSmallArray[i] > 100) {
//     answers.push("big");
//   } else if (bigSmallArray[i] < 100) {
//     answers.push("small");
//   }
// }

// console.log(answers);

// let str1 = "hellohfgjf";

// // /^[A-Za-z0-9]*$/.test(str1)

// if (/^[a-zA-Z0-9]*$/.test(str1)) {
//   console.log("Password meets requirements");
// } else {
//   console.log("Password does not meet requirements");
// }

// const areaCodes = [82033, 83033, 38308, 42800, 50483];

// function canWeDeliver(zipCode) {
//   for (let i = 0; i < areaCodes.length; i++) {
//     if (areaCodes[i] === zipCode) {
//       return "You ARE in our area!";
//     }
//   }
//   return "You're not in our area.";
// }

// console.log(canWeDeliver(83033));

let uniqueMenuItems = [
  {
    a: "Hello, everyone how are you",
    b: "Hi I'm doing amazing today.",
  },
  { a: "Hello everyone how are you", b: " Hi I'm doing great." },
];

console.log(uniqueMenuItems[1].b.replace("great", "good").replace(/\s/, ""));
