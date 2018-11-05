function getTimeAndDate(){
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let basicDate = new Date();
  let year = basicDate.getFullYear();
  let date = basicDate.getDate();
  let day = basicDate.getDay();
  let weekName = week[day];
  let monthInNum = basicDate.getMonth();
  let monthName = month[monthInNum];
  let hours = basicDate.getHours();
  let minutes = basicDate.getMinutes();
  let seconds = basicDate.getSeconds();

  let shownDate = year + ":" + monthName + ":" + date + ":" + weekName;
  let shownTime = hours + ":" + minutes + ":" + seconds;

console.log(shownDate);
console.log(shownTime);
}

var myVar = setInterval(function() {
 getTimeAndDate();
}, 1000);
