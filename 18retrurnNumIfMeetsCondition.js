let number1 = prompt("type a number");
let number2 = prompt("type a number again");

if(number1 == 50 || number2 == 50){
    console.log("one of them is 50");
}else if(number1 + number2 == 50){
    console.log("The sum of them is 50");
}else{
    console.log("your numbers don't meet the condition.");
}