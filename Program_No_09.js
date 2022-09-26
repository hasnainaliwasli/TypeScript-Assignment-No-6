var userInput = prompt("Enter the number of you You want to print table: ");
var x = Number(userInput);
for (var i = 1; i <= 10; i++) {
    console.log("".concat(i, " * ").concat(x, " = ").concat(i * x));
}
