var yearFromUser = prompt("Type a year");

if(yearFromUser % 4 == 0 && yearFromUser % 100 != 0 || yearFromUser % 400 == 0){
  console.log("The year you typed is a leap year.");
}else{
  console.log("The year you typed is not a leap year.");
}
