const inputDate = document.getElementById("date");
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');

let daysMonth = [31,28,31,30,31,30,31,31,30,31,30,31 ];
if(inputYear.value % 4 === 0) {
   daysMonth.splice(1, 1 , 29);
}
inputYear = 2024;
