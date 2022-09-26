// Write a ts program to print the sum of all Even numbers from 1 to n ..

var start:number=0;
var userInput:string|null=prompt(`Enter the value of n: `)
var n:number=Number(userInput);
var sum:number=0;

while(start<n){

    if(start%2==0){
        sum=sum+start;
    }

    start++;
}
console.log(sum);
