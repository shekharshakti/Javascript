function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() 
// Output: 
// H
// I
// T
// E
// S
// H

// The function `sayMyName` logs each letter of the string "HITESH" to the console.

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); 
// Output: 
// Result: 8

// The function `addTwoNumbers` takes two parameters and returns their sum. 
// In this example, 3 and 5 are passed to the function, and it returns 8.

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) 
// Output:
// hitesh just logged in
// console.log(loginUserMessage("hitesh")) 
// Output:
// hitesh just logged in

// The function `loginUserMessage` takes a `username` parameter with a default value of "sam".
// It returns a string indicating that the provided username has just logged in.
// If no username is provided, it logs a message to enter a username.

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) 
// Output: [500, 2000]

// The function `calculateCartPrice` takes two initial values `val1` and `val2`, 
// followed by a rest parameter `...num1` which collects any additional arguments passed.
// It returns an array of the additional arguments passed.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) 
// Output:
// Username is hitesh and price is undefined

// The function `handleObject` takes an object as a parameter and logs its properties.
// In this case, the object `user` is passed, but it has a property named `prices`, not `price`.

handleObject({
    username: "sam",
    price: 399
})
// Output:
// Username is sam and price is 399

// The function `handleObject` is called with an object literal as an argument, 
// which contains the properties `username` and `price`.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); 
// Output: 400

// The function `returnSecondValue` returns the second element of the array passed to it.

console.log(returnSecondValue([200, 400, 500, 1000])); 
// Output: 400

// This logs the second element of the array `[200, 400, 500, 1000]` which is 400.


const user1 = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// Output:
// hitesh, welcome to the website
// { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }

// The `welcomeMessage` method within the `user` object logs a welcome message containing the username and the context (the `user` object itself).

// user.username = "sam"
// user.welcomeMessage()
// Output:
// sam, welcome to the website
// { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// The `username` property of the `user` object is updated to "sam", then `welcomeMessage` is called again, 
// displaying the updated username and the context.

// console.log(this);
// Output: Global object (e.g., Window in browser, global in Node.js)

// When `this` is used outside of any object, it refers to the global object.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// This code results in an error because `this` inside a regular function refers to the global object, 
// but there is no `username` property in the global object.

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// The same as the previous example, this function also results in an error due to the same reason.

const chai =  () => {
    let username = "shekhar"
    console.log(this);
}

// chai()
// Output: Global object (e.g., Window in browser, global in Node.js)

// Arrow functions do not have their own `this` context. They inherit the `this` value from the enclosing lexical context, 
// which in this case is the global context.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shekhar"})

console.log(addTwo(3, 4))
// Output: { username: 'hitesh' }

// This arrow function returns an object with a `username` property set to "hitesh".

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 
// The `forEach()` method is called on `myArray` but no callback function is provided, 
// so this will not result in any action being performed on the elements of the array.
