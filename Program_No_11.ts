
// Write a ts Program to find the first and last digit of a number.

function firstDigit(x:number){
    while(x>10){
    x=x/10;
}
return Math.floor(x);
}
function lastDigit(x:number){
    while(x>10)
    {
        return Math.floor(x%10);
    }
}

var userInput:string|null=prompt(`Enter the Number: `);
var n:number=Number(userInput);

console.log(`First Digit is `,firstDigit(n) ,`Last Digit is`,lastDigit(n));