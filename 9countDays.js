let today = new Date();
let cMas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
    cMas.setFullYear(today.getFullYear() + 1);
}
var oneDayInSeconds = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cMas.getTime() - today.getTime()) / (oneDayInSeconds)) + " days left until Christmas!");