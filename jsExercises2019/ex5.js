const uppercase = (str) =>{
  let array1 = str.split(' ');
  let newarray1 = [];

  for(let i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
