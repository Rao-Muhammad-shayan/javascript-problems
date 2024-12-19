// let rootValue = prompt("enter user name"); // Replace with your actual input

// if (typeof rootValue ===" string" && rootValue.trim() !== "") {
//     console.log("Your value is a string.");
// } else {
//     console.log("The value is not a valid string.");
// }

 
// let rootValue = prompt("Enter a number"); // Replace with your actual input

// // Trim the input to remove leading and trailing whitespace
// rootValue = rootValue.trim();

// // Convert the input to a number with base 10
// let numberValue = parseInt(rootValue, 10);

// if (!isNaN(numberValue) && rootValue !== "") {
//     console.log("Your value is a valid number: " + numberValue);
// } else {
//     console.log("The value is not a valid number.");
// }
let a = prompt("Enter your 1st number");
let b = prompt("Enter your 2nd number");

a = a.trim();
b = b.trim();

let numberValue1 = parseInt(a, 10);
let numberValue2 = parseInt(b, 10);

// Use isNaN() to check if the parsed values are valid numbers
if (!isNaN(numberValue1) && !isNaN(numberValue2) && a !== "" && b !== "") {
    let c = numberValue1 + numberValue2; // Use numberValue1 and numberValue2 for calculations
    console.log("The sum of two numbers is: ", c);
    
    let d = numberValue1 - numberValue2;
    console.log("The difference of two numbers is: ", d);
    
    let e = numberValue1 * numberValue2;
    console.log("The product of two numbers is: ", e);
    
    let f = numberValue1 / numberValue2;
    console.log("The division of two numbers is: ", f);
} else {
    console.log("The value is not a valid number.");
}