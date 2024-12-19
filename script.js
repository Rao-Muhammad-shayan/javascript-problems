// let rootValue = prompt("enter user name"); // Replace with your actual input

// if (typeof rootValue ===" string" && rootValue.trim() !== "") {
//     console.log("Your value is a string.");
// } else {
//     console.log("The value is not a valid string.");
// }

 
let rootValue = prompt("Enter a number"); // Replace with your actual input

// Trim the input to remove leading and trailing whitespace
rootValue = rootValue.trim();

// Convert the input to a number with base 10
let numberValue = parseInt(rootValue, 10);

if (!isNaN(numberValue) && rootValue !== "") {
    console.log("Your value is a valid number: " + numberValue);
} else {
    console.log("The value is not a valid number.");
}