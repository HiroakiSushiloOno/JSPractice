let number1 = prompt("type a number");
let number2 = prompt("type a number again");

if(number1 > 0 && number2 < 0){
    console.log("Positive and Negative");
}else if(number2 > 0 && number1 < 0){
    console.log("Negative and Positive");
}else{
    console.log("your numbers don't meet the condition.");
}