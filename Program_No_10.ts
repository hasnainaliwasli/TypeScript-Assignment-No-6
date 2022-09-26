// 10.Write a program to count the digits in a number.

var userInput:string|null = prompt("Enter a Number: ")
var x:number=Number(userInput);
var len:number=0;

while(x>0)
{
    len++;
    x=Math.floor(x/10);
    
}

console.log(`There are`,`${len}` ,`Digits in this number.`);






