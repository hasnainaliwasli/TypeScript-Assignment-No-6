// 10.Write a program to count the digits in a number.
var userInput = prompt("Enter a Number: ");
var x = Number(userInput);
var len = 0;
while (x > 0) {
    len++;
    x = Math.floor(x / 10);
}
console.log("There are", "".concat(len), "Digits in this number.");
