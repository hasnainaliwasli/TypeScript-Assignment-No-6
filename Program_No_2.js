// 2.write a ts Program to print all natural numbers in reverse from n to 1...(using while loop).
var userInput = prompt("Enter the value of n: ");
var x = Number(userInput);
var end = 1;
while (x >= end) {
    console.log(x);
    x--;
}
