const arr = [1,2,3,4,5];
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
checkSecondHighestAndlowest(arr);
