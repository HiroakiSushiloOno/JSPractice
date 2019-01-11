//using regurar function
const reverseNum = (num) => {
  num = num + "";
  console.log(num.split("").reverse(num).join(""));
}
reverseNum(1234);

//using class instead
const reverseNum2 = class{
  constructor(num){
    this.num = num + "";
  }
  reverse(){
    return this.num.split("").reverse(this.num).join("");
  }
}
const testInstance = new reverseNum2(1234);
console.log(testInstance.reverse());
