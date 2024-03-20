// Declaring a Symbol with description "key1"
const mySym = Symbol("key1");

// Creating an object literal named jsUser
const jsUser = {
    name: "shekhar", // String property
    age: 18, // Number property
    "location": "Delhi", // String property with quotes
    email: "shekharshakti7050@gmail.com", // String property
    isLoggedIn: false, // Boolean property
    LastLoginDays: ["monday", "saturday"], // Array property
    [mySym]: "myKey1", // Symbol property
};

// Accessing properties of jsUser using dot notation
console.log(jsUser.email); // Output: shekharshakti7050@gmail.com

// Accessing properties of jsUser using bracket notation
console.log(jsUser["email"]); // Output: shekharshakti7050@gmail.com

// Accessing properties using a Symbol key
console.log(jsUser[mySym]); // Output: myKey1

// Attempting to modify a property of jsUser (commented out to prevent an error)
// JsUser.email = "she@chatgpt.com"

// Attempting to modify a property of jsUser after freezing the object (commented out to prevent an error)
// Object.freeze(JsUser)
// JsUser.email ="she@microsoft.com"

// Defining a new method 'greeting' for jsUser
jsUser.greeting = function() {
    console.log("Hello JS user");
}

// Defining another method 'greetingTwo' for jsUser using 'this' keyword
jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// Invoking the 'greeting' method
console.log(jsUser.greeting()); // Output: Hello JS user

// Invoking the 'greetingTwo' method
console.log(jsUser.greetingTwo()); // Output: Hello JS user, shekhar
