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
