const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthYear, birthMonth, birthDay;
    let birthDetails = {
        year: inputDate.getFullYear(),
        month: inputDate.getMonth() + 1,
        day: inputDate.getDay()
    };

    let currentYear =  today.getFullYear();
    let currentMonth =  today.getMonth();
    let currentDate =  today.getDay();

}