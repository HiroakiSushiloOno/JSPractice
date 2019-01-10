let num = 3;

//check if it's prime number or not
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

//getting the nearest prime number upward
const findPrimeUpper = (num) => {
  for(let i = num + 1; i < num + 10; i++){
    if(checkPrime(i)){
      return i;
    }
  }
}
//getting the nearest prime number downward
const findPrimeDower = (num) => {
  for(let i = num - 1; i > num - 10; i--){
    if(checkPrime(i)){
      return i;
    }
  }
}

//comparing those two prime numbers which is closer to the original number
const comparison = (num, resultUpper, resultDowner) => {
  if((num - resultDowner) < (resultUpper - num)){
    return resultDowner;
  }else{
    return resultUpper;
  }
}

let resultUpper = findPrimeUpper(num);
let resultDowner = findPrimeDower(num);

//output the result
console.log(checkPrime(num));
console.log(comparison(num, resultUpper, resultDowner));
