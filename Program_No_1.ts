// 1.Write a ts program to print all natural numbers from 1 to n ..(using While loops).

var userInput:string|null = prompt("Enter the value of n : ");
var x:number = Number(userInput);
var start:number = 1;

while(start <= x)
{
    console.log(start);
    start++;
}
