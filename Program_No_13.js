// 13.Write a ts Program to Swap the first and last digit of a number.
function firstDgit(x) {
    while (x > 10) {
        x = x / 10;
    }
    return Math.floor(x);
}
function lastDgit(x) {
    return Math.floor(x % 10);
}
//  var userInput:string|null=prompt(`Enter the number: `);
// var num:number=Number(userInput);
var num = 1234;
var a = firstDgit(num);
var b = lastDgit(num);
var temp = a;
a = b;
b = temp;
console.log("Value of 1st digit after Swapping is:", a, " AND Value of 2nd digit after Swapping is:", b);
