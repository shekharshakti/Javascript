// Constants
const score = 400; // Define a constant score with a value of 400
console.log(score); // Print the value of score

// Creating a Number object
const balance = new Number(100); // Define a constant balance with a value of 100 as a Number object
console.log(balance); // Print the value of balance

// Using methods of Number object
console.log(balance.toString().length); // Convert balance to a string and print its length
console.log(balance.toFixed(1)); // Convert balance to a fixed-point notation with one decimal place

// Working with a floating point number
const otherNumber = 123.8966; // Define a floating-point number
console.log(otherNumber.toPrecision(6)); // Convert to a string with precision of 6

// Formatting a large number
const hundreds = 10000; // Define a large number
console.log(hundreds.toLocaleString('en-IN')); // Format number with Indian English locale

// Math functions and library in JavaScript

// Constants
console.log("Pi:", Math.PI); // Print the value of Pi
console.log("Euler's constant:", Math.E); // Print the value of Euler's constant

// Basic Math functions
console.log("Absolute value of -5:", Math.abs(-5)); // Calculate absolute value
console.log("Square root of 25:", Math.sqrt(25)); // Calculate square root
console.log("Power of 2^3:", Math.pow(2, 3)); // Calculate power
console.log("Ceiling of 3.14:", Math.ceil(3.14)); // Round up to the nearest integer
console.log("Floor of 3.14:", Math.floor(3.14)); // Round down to the nearest integer
console.log("Round of 3.54:", Math.round(3.54)); // Round to the nearest integer
console.log("Maximum of 5, 10, 15:", Math.max(5, 10, 15)); // Find maximum value
console.log("Minimum of 5, 10, 15:", Math.min(5, 10, 15)); // Find minimum value
console.log("Random number between 0 and 1:", Math.random()); // Generate a random number between 0 and 1

// Trigonometric functions (arguments in radians)
console.log("Sine of π/2:", Math.sin(Math.PI / 2)); // Calculate sine
console.log("Cosine of π:", Math.cos(Math.PI)); // Calculate cosine
console.log("Tangent of π/4:", Math.tan(Math.PI / 4)); // Calculate tangent
console.log("Arcsine of 1:", Math.asin(1)); // Calculate arcsine
console.log("Arccosine of 0:", Math.acos(0)); // Calculate arccosine
console.log("Arctangent of 1:", Math.atan(1)); // Calculate arctangent
console.log("Arctangent of 1 and 2:", Math.atan2(1, 2)); // Calculate arctangent with two arguments

// Logarithmic functions
console.log("Natural logarithm of 10:", Math.log(10)); // Calculate natural logarithm
console.log("Base-10 logarithm of 100:", Math.log10(100)); // Calculate base-10 logarithm
console.log("Base-2 logarithm of 8:", Math.log2(8)); // Calculate base-2 logarithm
