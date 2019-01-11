const str = "dog";//given string.

const allPossibilities = (str) =>{
  //declare the necessary variables
  let numOfStr = str.length;
  let strArr = str.split("");
  let temp;

  for(let i = 0; i < numOfStr; i++){
    temp = strArr[i];
    console.log(temp);
    for(let j = 0; j < numOfStr -1; j++){
        temp += strArr[j];
        console.log(temp);
      for(let j = 0; j < numOfStr -2; j++){
        temp += strArr[j];
        console.log(temp);
      }
    }
  }
}
allPossibilities(str);
