let number = prompt("Type a number");
let difference;
if(number <= 13){
    difference =  13 - number;
}else{
    difference = (number - 13) * 2;
}
console.log(difference);