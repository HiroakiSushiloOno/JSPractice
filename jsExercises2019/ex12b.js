const arr = [2, 4, 6, 1];

//checking an array if it' has all perfect or not
const checkArr = (arr) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(isPerfect(arr[i])){
      count++;
    }
  }
  if(count == arr.length){
    return true;
    console.log("All of them are perfect numbers");
  }else{
    return false;
    console.log("All of them are not perfect numbers");
  }
}

//checking perfect numbers
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

//getting the second Lowest
const secondLowest = (arr) => {
  let temp;
  temp = arr.splice(Math.min(...arr));
  console.log(Math.min(...temp));
}
//getting the second Highest
const secondHighest = (arr) => {
  let temp;
  temp = arr.splice(Math.max(...arr));
  console.log(Math.max(...temp));
}

//execution
const checkSecondHighestAndlowest = (arr) => {
  secondLowest(arr);
  secondHighest(arr);
}
