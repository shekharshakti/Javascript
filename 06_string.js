// Define a string variable
let str = "Hello, world!";

// Print the string
console.log("Original String:", str);

// Length of the string
console.log("Length:", str.length);

// Convert to uppercase
console.log("Uppercase:", str.toUpperCase());

// Convert to lowercase
console.log("Lowercase:", str.toLowerCase());

// Accessing individual characters (indexing starts from 0)
console.log("Character at index 7:", str[7]);

// Substring
console.log("Substring (2-6):", str.substring(2, 6));

//slice
const newString=str.slice(0,4)
const anotherString=str.slice(-2,4)

// Concatenation
let anotherStr = " Have a nice day!";
let combinedStr = str + anotherStr;
console.log("Concatenated String:", combinedStr);

// String interpolation 
let name = "Alice";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// Searching for a substring
console.log("Index of 'world':", str.indexOf('world'));

// Checking if a string includes another substring
console.log("Includes 'world'?", str.includes('world'));

// Replacing part of a string
let replacedStr = str.replace('world', 'universe');
console.log("Replaced String:", replacedStr);

// Splitting a string into an array based on a separator
let splittedStr = str.split(',');
console.log("Split String:", splittedStr);

// Trimming leading and trailing whitespaces
let strWithWhitespace = "   Hello   ";
console.log("Trimmed String:", strWithWhitespace.trim());
