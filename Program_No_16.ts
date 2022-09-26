// 16. Write a ts program to enter a number and print its reverse.

var userInput:string|null= prompt(`Enter the number: `);
var number:number=Number(userInput);

let reverse:number=0;
let lastDgt:number;

while(number!=0){
    lastDgt= number%10;
    reverse = reverse * 10 + lastDgt;
    number = Math.floor(number/10);
}

console.log(reverse);
