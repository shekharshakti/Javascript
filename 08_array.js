// Array Initialization: Declaring an array named 'myArray' containing some elements
var myArray = [10, 20, 30, 40, 50];

// Accessing elements of the array using their indexes
console.log(myArray[0]); // Output: 10
console.log(myArray[2]); // Output: 30

// Modifying an element of the array
myArray[1] = 25;

// Accessing the modified element
console.log(myArray[1]); // Output: 25

// Arrays can hold elements of different data types
var mixedArray = [10, "hello", true, {name: "John"}];
console.log(mixedArray[1]); // Output: hello
console.log(mixedArray[3].name); // Output: John

// Declaring an array named 'fruits'
var fruits = ['apple', 'banana', 'orange'];

// Accessing and printing the first element of the array
console.log(fruits[0]); // Output: apple

// Modifying the second element of the array
fruits[1] = 'grape';

// Adding a new element at the end of the array using push()
fruits.push('kiwi');

// Printing the modified array
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'kiwi']

// Removing the last element of the array using pop()
var removedFruit = fruits.pop(); // kiwi will be removed

// Printing the removed element
console.log(removedFruit); // Output: kiwi

// Printing the updated array after removing the last element
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Convert array into string using join()
const Arr2 = fruits.join();
console.log(Arr2); // Output: apple,grape,orange
console.log(fruits);

// Checking the data type of the joined array
console.log(typeof(Arr2)); // Output: string

// Using slice() to get a portion of the array
const mynum1 = fruits.slice(1, 3);
console.log(mynum1); // Output: ['grape', 'orange']

// Using splice() to manipulate the array
const myn2 = fruits.splice(1, 3); // Removing elements starting from index 1
console.log("Slice Result:", mynum1); // Output: ['grape', 'orange']
console.log("Splice Result:", myn2); // Output: ['grape', 'orange']
console.log(fruits); // Output: ['apple']

console.log("*************Array part 2******************")

// Declaring arrays of Marvel and DC heroes
const marvel_heroes=["ironman","thor","spiderman"]
const dc_heroes=["batman","superman","flash"]

// Concatenating arrays using concat() - not modifying original arrays
console.log(marvel_heroes.concat(dc_heroes));

// Creating a new array by combining arrays using spread operator
const all_new_heros=[...marvel_heroes,...dc_heroes]

// Flattening an array using flat()
const another_array=[1,2,3,[4,5,6],7,8,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)

// Creating an array from a string using Array.from()
console.log(Array.from("shekhar"))
