// 15.Write a ts program to calculate Product of digits of number.
var userInput = prompt("Enter the number: ");
var w = Number(userInput);
var endNumber = w % 10;
var Product = 1 * endNumber;
while (w > 10) {
    w = w / 10;
    w = Math.floor(w);
    endNumber = w % 10;
    Product = Product * endNumber;
}
console.log(Product);
