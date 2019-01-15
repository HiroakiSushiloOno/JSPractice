const isPerfect = (num) => {
  let temp = 0;
  for(let i = 0; i <= num/2; i++){
    if(num % i === 0){
      temp += i;
    }
  }
  if(temp === num && temp !== 0){
    return true;
  }else{
    return false;
  }
}

console.log(isPerfect(28));
