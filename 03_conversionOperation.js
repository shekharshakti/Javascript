let score="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let v1 = 123;
let v2 = 333;
     
// Conversion of number to string
console.log("Type Of v1 before conversion: " + typeof v1 + 
" and Type of v2 before conversion: " + typeof v2);
 
console.log("Type Of v1 after conversion: " + typeof String(v1) + 
" and Type of v2 after conversion: " + typeof v2.toString());

console.log("Type Of false before conversion: " + typeof false + 
" and Type of true before conversion: " + typeof true);
 
// Converting types explicitly to string
console.log("Type Of false after conversion: " + typeof String(false) + 
" and Type of true after conversion: " + typeof (true).toString());
const currentDate = new Date();
const pastDate = new Date(20/12/2023);
 
console.log("Type Of currentDate before conversion: " + typeof currentDate + 
" and Type of pastDate before conversion: " + typeof pastDate);
 
// Converting types explicitly to string
console.log("Type Of currentDate after conversion: " + typeof String(currentDate) + 
" and Type of pastDate after conversion: " + typeof (pastDate).toString());

let v = "144";
console.log("Type of v before conversion: " + typeof v);
console.log("Type of v after conversion: " + typeof Number(v));