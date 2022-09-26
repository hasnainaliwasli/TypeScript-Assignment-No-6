// 12.Write a ts Program to find the Sum of first and last digit of a number.

function firstDigt(x:number){
    while(x>10){
        x=x/10;
    }
    return Math.floor(x);
}
function lastDigt(x:number){
    return Math.floor(x%10);
}

var userInput:string|null=prompt(`Enter the number: `);
var n:number=Number(userInput);

var sum:number=firstDigt(n)+lastDigt(n);

console.log(`The sum of First and Last Digit is: ${sum}`);


