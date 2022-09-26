// 14.Write a ts program to calculate sum of digits of number.
var userInput = prompt("Enter the Number: ");
var y = Number(userInput);
var end = y % 10;
var sum = 0 + end;
while (y > 10) {
    y = y / 10;
    y = Math.floor(y);
    end = y % 10;
    sum = sum + end;
}
console.log(sum);
