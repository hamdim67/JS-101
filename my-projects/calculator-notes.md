//Ask for first number
//Ask for second number
//Ask user for operation
//Perform the calculation
//Display the result

//Bonus feature #1:
//Ask for another calculation
//Algorithm for this

//Ask user 'Would you like to perform another calculation'?
//Wait for input
//If input is 'yes', start new calculation
//enclose entire code in while() loop to loop back to beginning
//If input is 'no', exit out of calculator w/ 'break'

//Bonus feature #2:

//Move calculator messages to JSON file
//Access the messages by key by making an object with
//Access with require() method

//Number Validation (make a function that will check for
//valid number, and then make a loop (a while loop, in this case)
//that will check each input to see if it meets the requirements

//Here, we check if the number is NOT valid
//If it is NOT valid, then we ask for more input (in a loop)
//until we get a valid number to move on with the program

//input from readline-sync is ALWAYS a string
//so we need to change num1 and num2 to numbers

//Refactoring: Change if/else to switch statement

//Bonus feature #3
//Internationalize your messages by sending the JSON configuration file
//to translators and calling the right translation in your code

//Prompt for language choice
//Check if invalid
//Output language

//Prompt for number
//Check if invalid
//Output number (2X)

//Prompt for operation
//Check if it's valid
//Run the operations

//I got it to work! Finally!

//My 2 mistakes
//I put the name of the JSON object as the
//name of the messages function a few times when I was using that function

//Also, for the performOperation() function
//I use num1 and num2 to get the value of result,
//But I forgot to pass in num1 and num2
//as arguments to the function,
//so num1 and num2 were undefined, and so, result is undefined

//Don't forget to account for dividing by 0
//So check if Number(0) === 0 && operation === 4
//Then prompt them they can't divide by zero (divideByZero)
