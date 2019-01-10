const countVowels = (str) => {
  let counter = 0;
  let string = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i]) == true ){
      counter++;
    }
  }
  return counter;
}
console.log(countVowels("The strokes"));
