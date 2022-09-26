// 15.Write a ts program to calculate Product of digits of number.

var userInput:string|null=prompt(`Enter the number: `);
var w:number=Number(userInput);


var endNumber:number=w%10;
var Product:number=1*endNumber;

while(w>10){

    w=w/10;
    w=Math.floor(w);
    endNumber=w%10;
    Product=Product*endNumber;

}

console.log(Product);
