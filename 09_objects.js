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


// Create an empty object using object literal syntax
const tinderUser = {}

// Add properties to the tinderUser object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// Define a regularUser object with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shekhar",
            lastname: "shakti"
        }
    }
}

// Access and log a nested property value
console.log(regularUser.fullname.userfullname.firstname);

// Create objects obj1, obj2, and obj4
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Combine obj1 and obj2 using spread syntax to create obj3
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// Define an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h2@gmail.com"
    },
]

// Access email of the second user in the array
console.log(users[1].email);

// Define a course object
const course = {
    coursename: "js shekhar",
    price: "999",
    courseInstructor: "shekhar"
}

// Destructure the course object to extract the courseInstructor property
const {courseInstructor: instructor} = course

// Log the value of the extracted property
console.log(instructor);
