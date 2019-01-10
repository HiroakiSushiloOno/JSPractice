const str = "This is getting the longest word. Oh my incredibleTerror";

const longest = (str) => {
  let strArr = str.split(" ");
  let length = [];
  let longest = 0;
  let twoD = [[],[]];
  for(let i = 0; i < strArr.length; i++){
    length.push(strArr[i].length);
  }
  longest = Math.max(...length);
  for(let j = 0; j < strArr.length; j++){
    if(longest == strArr[j].length){
      console.log(strArr[j]);
    }
  }
}
longest(str);
