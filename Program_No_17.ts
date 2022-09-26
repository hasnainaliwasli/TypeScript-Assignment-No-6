// 17. Write a ts program to check whether a number is palindrome or not.

// if a number after reverse reamains same  it is called plindrome: example 16161.

var num:number=16461;

var revrse:number=0;
var last:number;

while(num!=0){

    last=num%10;
    revrse=revrse*10 + last;
    num=Math.floor(num/10);

}

console.log(revrse);


if(num==revrse){
    console.log(`Number is Palindrome`);
}
else{
    console.log(`Number is not Palindrome`);   
}
