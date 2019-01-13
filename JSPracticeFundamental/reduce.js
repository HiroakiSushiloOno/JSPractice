var nums = [2, 4, 5, 3]; // the sum is 14
const getSum = (total, num) =>{
  return total + num;
}
console.log(nums.reduce(getSum));
