// Write a ts Program to find the first and last digit of a number.
function firstDigit(x) {
    while (x > 10) {
        x = x / 10;
    }
    return Math.floor(x);
}
function lastDigit(x) {
    while (x > 10) {
        return Math.floor(x % 10);
    }
}
var userInput = prompt("Enter the Number: ");
var n = Number(userInput);
console.log("First Digit is ", firstDigit(n), "Last Digit is", lastDigit(n));
