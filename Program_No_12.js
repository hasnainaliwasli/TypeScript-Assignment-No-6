// 12.Write a ts Program to find the Sum of first and last digit of a number.
function firstDigt(x) {
    while (x > 10) {
        x = x / 10;
    }
    return Math.floor(x);
}
function lastDigt(x) {
    return Math.floor(x % 10);
}
var userInput = prompt("Enter the number: ");
var n = Number(userInput);
var sum = firstDigt(n) + lastDigt(n);
console.log("The sum of First and Last Digit is: ".concat(sum));
