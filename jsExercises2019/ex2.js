const str = "madam";
const checkPalindrome = (str) => {
  let cStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g);
  let count = 0;
  let x = 0;
  if(cStr === ""){
    console.log("Nothing found");
    return false;
  }else if(cStr.length % 2 === 0){
    count = (cStr.length) / 2;
  }else {
    if(cStr.length === 1){
      console.log("Entry a palindrome.");
      return false;
    }else{
      count = (cStr.length - 1) / 2;
    }
  }
  if(x < count){
    if(cStr[x] != cStr.slice(-1-x)){
      console.log("The entry is not a palindrome.");
      x++;
      return false;
    }else{
      console.log("This entry is a palindrome.");
      return true;
    }
  }
}
checkPalindrome(str);
