// ===============================
// Assignment # 31-34 (Date Methods) - ES5 Only
// ===============================

// Q1
var currentDate = new Date();
console.log("Current Date & Time: " + currentDate);

// Q2
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: " + monthNames[currentDate.getMonth()]);

// Q3
var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is " + dayNames[currentDate.getDay()]);

// Q4
if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    console.log("It's Fun day");
} else {
    console.log("It's a working day");
}

// Q5
var dayOfMonth = currentDate.getDate();
if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

// Q6
var msSince1970 = currentDate.getTime();
var minutesSince1970 = msSince1970 / (1000 * 60);
console.log("Minutes since midnight, Jan 1, 1970: " + minutesSince1970);

// Q7
if (currentDate.getHours() < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// Q8
var laterDate = new Date(2020, 11, 31);
console.log("Later Date: " + laterDate);

// Q9
var ramadanStart = new Date("June 18, 2015");
var today = new Date();
var diffMs = today.getTime() - ramadanStart.getTime();
var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
alert(diffDays + " days have passed since 1st Ramadan, 2015");

// Q10
var referenceDate = new Date();
var begin2015 = new Date("Jan 1, 2015");
var secondsDiff = Math.floor((referenceDate.getTime() - begin2015.getTime()) / 1000);
console.log("Seconds elapsed between Jan 1, 2015 and reference date: " + secondsDiff);

// Q11
var dateObj = new Date();
console.log("Current date: " + dateObj);
dateObj.setHours(dateObj.getHours() + 1);
console.log("1 hour ahead: " + dateObj);

// Q12
var date100 = new Date();
date100.setFullYear(date100.getFullYear() - 100);
alert("Date 100 years back: " + date100);

// Q13
var age = +prompt("Enter your age:");
var birthYear = currentDate.getFullYear() - age;
console.log("Your age is: " + age);
console.log("Your birth year is: " + birthYear);

// Q14 (K-Electric Bill)
var customerName = "John Doe";
var units = 410;
var chargesPerUnit = 16;
var netAmount = units * chargesPerUnit;
var lateSurcharge = 350;
var grossAmount = netAmount + lateSurcharge;

console.log("K-Electric Bill");
console.log("Customer Name: " + customerName);
console.log("Month: " + monthNames[currentDate.getMonth()]);
console.log("Number of units: " + units);
console.log("Charges per unit: " + chargesPerUnit);
console.log("Net Amount Payable (within Due Date): " + netAmount.toFixed(2));
console.log("Late Payment Surcharge: " + lateSurcharge.toFixed(2));
console.log("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));
