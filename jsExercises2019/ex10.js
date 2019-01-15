
const matrix = (num) => {
  let x;
  let y;
  let arr = [];
  for(x = 0; x < num; x++){
    for(y = 0; y < num; y++){
      if(x === y){
        console.log('1');
        arr[x][y].push('1');
      }else{
        console.log('0');
        arr[x][y].push('0');
      }
      console.log('---------------')
    }
  }
  console.log();
}
matrix(3);
