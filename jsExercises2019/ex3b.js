const possiblePatterns =  class {
  constructor(str){
    this.arr = str.split("");
    this.combi = [];
    this.temp = "";
    this.slent = Math.pow(2, this.arr.length);
    this.palindromeNum = 0;
  }
  showPatterns(){
    for(let i = 0; i < this.slent; i++){
      this.temp = "";
      for(let j = 0; j < this.arr.length; j++){
        if((i & Math.pow(2, j))){
          this.temp += this.arr[j];
        }
      }
      if(this.temp !== ""){
        this.combi.push(this.temp);
        let s = new checkPalindrome(this.temp);
        if(s.check()){
          this.palindromeNum++;
        }

      }
    }
    console.log(this.combi.join("\n"));
    console.log("there ware " + this.palindromeNum + "palindromes!");
  }
}

const checkPalindrome = class {
  constructor(str){
    this.str = str;
    this.reverse = str.split("").reverse(str).join("");
  }
  check(){
    if(this.str.length > 1){
      if(this.str === this.reverse){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
}

const testClass = new possiblePatterns("madam");
testClass.showPatterns();
