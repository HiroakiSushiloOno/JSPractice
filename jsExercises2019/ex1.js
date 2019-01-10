let num = 881122;
const reverseNum = (num) => {
  num = num + "";
  console.log(num.split("").reverse(num).join(""));
}
reverseNum(num);
