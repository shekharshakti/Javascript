// Example of a for loop iterating from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // This line would log "5 is the best number" if uncommented
        // console.log("5 is the best number");
    }
    // Logging each element
    // console.log(element);
}

// Nested for loops
for (let i = 1; i <= 10; i++) {
    // Logging outer loop value
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // Logging inner loop values and multiplication
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Iterating over an array
let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Logging each element of the array
    // console.log(element);
}

// Using 'continue' statement
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skips the rest of the loop body and continues with the next iteration
    }
    console.log(`Value of i is ${index}`);
}

// Using 'while' loop
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// Using 'do-while' loop
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// Using 'for...of' loop with arrays and strings
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // Logging each number in the array
    // console.log(num);
}
const greetings = "Hello world!";
for (const greet of greetings) {
    // Logging each character in the string
    // console.log(`Each char is ${greet}`);
}

// Using 'for...of' loop with Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
for (const [key, value] of map) {
    // Logging key-value pairs of the Map
    // console.log(key, ':-', value);
}

// Using 'for...in' loop with objects and arrays
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};
for (const key in myObject) {
    // Logging key-value pairs of the object
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // Logging each element in the array
    // console.log(programming[key]);
}

// Using forEach() method with arrays
const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach( (item) => {
    // Logging each item in the array
    // console.log(item);
});

// Using forEach() method with an array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];
myCoding.forEach( (item) => {
    // Logging language names from each object
    console.log(item.languageName);
});
