let arr = [1,2,3,4,5];
const secondLowest = (arr) => {
  let temp;
  temp = arr.splice(Math.min(...arr));
  console.log(Math.min(...temp));
}
const secondHighest = (arr) => {
  let temp;
  temp = arr.splice(Math.max(...arr));
  console.log(Math.max(...temp));
}

const checkSecondHighestAndlowest = (arr) => {
  secondLowest(arr);
  secondHighest(arr);
}

const checkPrime = (num) => {
  if (num === 1){
     return false;
   }else if(num === 2){
     return true;
   }else{
     for(let i = 2; i < num; i++){
       if(num % i === 0){
         return false;
       }
     }
     return true;
   }
}

const isPrimeArr = (arr) => {
  if(arr.map(checkPrime)){
    console.log("True");
  }else{
    console.log("False");
  }
}
isPrimeArr(arr);
