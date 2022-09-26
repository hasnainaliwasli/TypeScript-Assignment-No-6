// 1.Write a ts program to print all natural numbers from 1 to n ..(using While loops).
var userInput = prompt("Enter the value of n : ");
var x = Number(userInput);
var start = 1;
while (start <= x) {
    console.log(start);
    start++;
}
