// Write a Program to print multiplication table of any number.

var userInput:string|null = prompt("Enter the number of you You want to print table: ");
var x:number =Number(userInput);


for( var i=1 ;i<=10 ;i++ ){

    console.log(`${i} * ${x} = ${i*x}`);
}