var myString = "w3resource";
var myArrayBeforeProcess = [];
var myArrayAfterProcess = [];

for(var i = 0; i < myString.length; i++){
  myArrayBeforeProcess[i] = myString.substring(i, i + 1);
}

for(var i = myArrayBeforeProcess.length; i >= 0; i--){
  myArrayAfterProcess[myArrayBeforeProcess.length - i] = myArrayBeforeProcess[i];
}

for(var i = 0; i < myArrayAfterProcess.length; i++){
  console.log(myArrayAfterProcess[i]);
}
