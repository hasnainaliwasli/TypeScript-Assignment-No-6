// 13.Write a ts Program to Swap the first and last digit of a number.

function firstDgi(x:number){
    while(x>10){
        x=x/10;
    }
    return Math.floor(x);
}
function lastDgi(x:number){
    return Math.floor(x%10);
}
 var userInput:string|null=prompt(`Enter the number: `);
var num:number=Number(userInput);

var a=firstDgi(num);
var b= lastDgi(num)

var temp=a;
a=b;
b=temp;

console.log(`Value of 1st digit after Swapping is:`,a,` AND Value of 2nd digit after Swapping is:`,b);

