Build a mortgage calculator

Input:
-- Loan Amount
-- Annual Percentage Rate (APR)
--Loan Duration

Output:
--Monthly Interest Rate
--Loan duration (in months)

Use the following formula

If amount includes $ sign, then remove it

If user enters 'amount' that's not a number,
then prompt them to enter input again

Check for 0 and negative numbers for loan amount, APR,
& loan duration

Make sure to set 'amount' to type of 'Number' when passing amount
as argument to 'invalidAmount() function
Or else the function will use a string value for amount and it will never exit

Make sure to change amount to number for 2nd attempt
after prompting for another attempt
or else the loop wont exit, since amount is a string still
and also add logic to remove $ or commas as well since
that will make amount NaN as well

Prompt for annual percentage rate (APR)
If APR includes a % sign, then remove it before continuing.
Validate if rate is NOT a number (using isNaN() function)
No interest loans

if APR is 0, then set monthlyRate = 0;

Check if loan duration is NOT a number (using isNaN())
Check if loan duration is in months or years

Now convert durationYears to months and add to durationMonths
to get loanMonths
