// Write a ts program to print the sum of all Even numbers from 1 to n ..
var start = 0;
var userInput = prompt("Enter the value of n: ");
var n = Number(userInput);
var sum = 0;
while (start < n) {
    if (start % 2 == 0) {
        sum = sum + start;
    }
    start++;
}
console.log(sum);
