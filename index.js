const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

today = new Date();

weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"]

allMonths = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
