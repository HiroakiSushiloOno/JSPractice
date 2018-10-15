var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var date = currentDate.getDate();
if(date < 10){
    date = '0' + date;
}
if(month < 10){
    month = '0' + month;
}


console.log(date + "/" + month + "/" + year);
