// 16. Write a ts program to enter a number and print its reverse.
var userInput = prompt("Enter the number: ");
var number = Number(userInput);
var reverse = 0;
var lastDgt;
while (number != 0) {
    lastDgt = number % 10;
    reverse = reverse * 10 + lastDgt;
    number = Math.floor(number / 10);
}
console.log(reverse);
