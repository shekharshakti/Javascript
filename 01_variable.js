//variable are container to store data of different datatypes
const accountId=12201493
let accountPassword="shekhar"
var accountEmail="shekharshakti7050@gmail.com"
accountCity="Punjab"
let accountState;  //output will be undefined

console.log(accountId)
//accountId=1220493//not allowed in case of const
accountEmail="shekharshakti"
accountPassword="shakti"
//const can be changed

//console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
prefer not to use var because of issue
 in block scope or functional scope  
*/
