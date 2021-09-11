## The Challenge

Given two strings, write an algorithm to check if they are anagrams of each other. Return true if they pass the test and false if they don't.

## Algorithmic Thinking

In solving this challenge, we write a function that'd accept two parameters i.e the two strings to be compared.

Within the function, we compare both words to see if they contain the same characters used the same number of times. To avoid errors, we sanitize the string thus getting rid of unwanted characters and spaces since these are not letters of the alphabet.

We also convert all characters to a common letter case before carrying out any comparisons to avoid errors due to varying capitalization. Checking that both words are of the same length is also very important as this is a primary factor for a valid comparison.

## Code Implementation

We will now consider two ways to implement our solution following our algorithmic logic above. They are:

- Direct Comparison
- Character Map Comparison

## Direct comparison

In this approach, we define a function that accepts two parameters i.e the two strings to be compared. We then go ahead to clean up both strings to ensure that we are comparing only letters and in a common case.

Cleaning Up the String To clean up the string, we create a function sanitizeString. This function accepts the string to be sanitized as a parameter and the uses the .toLowerCase(), .replace(), .split(), .sort() and .join() methods to manipulate the string as shown in code.

Lets break things down a little:

- First, we convert the entire string to lowercase using the .toLowerCase() method.
- Next, we use the .replace() method to search through the string using the specified regular expression pattern and replace every non alphabetical character with an empty string. This leaves us with only letters. No spaces, no symbols!
- Next, we call .split() to split the string into an array of characters.
- Using the .sort() method, we sort the letters (elements) within the array in alphabetical order.
- And finally, we join the now alphabetically ordered array of letters back together to form a string once again.

This string is what we return as the sanitized string.

## Comparing the Sanitized Strings

Sanitizing the string as done above is perhaps the trickiest part of this solution. Next, we simply clean up the strings received using the sanitizeString function and compare the results. If both strings match, we return true signifying that they pass as anagrams. If they do not match, we return false signifying that they aren't.

## Character Map Comparison

In this approach, we first generate a character map using our createCharMap function.

What is a character map?

As used in this context , a character map object is an object that maps every character in a string to the number of times it occurs within the string.

Creating the Character Map In our createCharMap function below, we use a for…of loop to iterate through each character of the string received.

For each character, we check if the character already exist as a property in the character map charMap using the .hasOwnProperty() method. If it does, we increment it's value and if it doesn't, we add the character as a property and set it's value to 1.

In the end, we return charMap which is the character map object.

## Comparing Character

Maps Now that we have a way of generating the character maps, the next step will be to compare the character maps for both strings as shown in code.
