// Write a ts program to print the sum of all natural numbers from 1 to n ..
var start = 0;
var sum = 0;
var userInput = prompt("Enter the value of n: ");
var n = Number(userInput);
while (start <= n) {
    sum = sum + start;
    start++;
}
console.log("The sum of numbers between your range is :", sum);
