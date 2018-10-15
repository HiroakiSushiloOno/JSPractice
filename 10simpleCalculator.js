let num1 = prompt("Type a number");
let num2 = prompt("Type a numbar again");
let outputNum;
let multiplyOrDivide = prompt("Multiply or Dvide? type m or d");

if(multiplyOrDivide == "m"){
    outputNum = num1 * num2;
}else if(multiplyOrDivide == "d"){
    outputNum = num1 / num2;
}else{
    console.log("error.");
}

console.log(outputNum);