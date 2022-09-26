// Write a ts program to print the sum of all natural numbers from 1 to n ..

var start:number=0;
var sum:number=0;
var userInput:string|null=prompt(`Enter the value of n: `)
var n:number=Number(userInput);

while(start<=n){

    sum=sum+start;
    start++;
}
console.log(`The sum of numbers between your range is :`,sum);
