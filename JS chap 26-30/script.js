// ===============================
// Assignment # 26-30 (Math Methods) - ES5 Only
// ===============================

// Q1
var num1 = +prompt("Enter a positive integer:");
console.log("Number: " + num1);
console.log("Round off value: " + Math.round(num1));
console.log("Floor value: " + Math.floor(num1));
console.log("Ceil value: " + Math.ceil(num1));

// Q2
var num2 = +prompt("Enter a negative floating point number:");
console.log("Number: " + num2);
console.log("Round off value: " + Math.round(num2));
console.log("Floor value: " + Math.floor(num2));
console.log("Ceil value: " + Math.ceil(num2));

// Q3
var num3 = +prompt("Enter a number to find absolute value:");
console.log("The absolute value of " + num3 + " is " + Math.abs(num3));

// Q4 (Dice simulation: 1–6)
var dice = Math.floor(Math.random() * 6) + 1;
console.log("Random dice value: " + dice);

// Q5 (Coin toss: 1=Heads, 2=Tails)
var coin = Math.floor(Math.random() * 2) + 1;
if (coin === 1) {
    console.log("Random coin value: Heads");
} else {
    console.log("Random coin value: Tails");
}

// Q6 (Random number 1–100)
var randNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randNum);

// Q7 (Weight parsing)
var weightInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(weightInput);
console.log("The weight of user is " + weight + " kilograms");

// Q8 (Secret number 1–10)
var secret = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess a number between 1 and 10:");
if (guess === secret) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert("Try again! The secret number was " + secret);
}
