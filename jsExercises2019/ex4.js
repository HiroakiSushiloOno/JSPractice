const str = "Hiroaki Is Awesome!";
const sortByAlphabet = (str) => {
  let strArr = str.toLowerCase().split("");
  strArr = strArr.sort().join("");
  console.log(strArr);
}
sortByAlphabet(str);
