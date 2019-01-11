const checkPalindrome = class {
  constructor(str){
    this.str = str;
    this.reverse = str.split("").reverse(str).join("");
  }
  check(){
    if(this.str === this.reverse){
      return true;
    }else{
      return false;
    }
  }
}

const testInstance = new checkPalindrome("madam");

console.log(testInstance.check());
