// ===============================
// Assignment # 21-25 (ES5 Only)
// ===============================

// Q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// Q2
var favMobile = prompt("Enter your favorite mobile phone model:");
console.log("My favorite phone is: " + favMobile);
console.log("Length of string: " + favMobile.length);

// Q3
var word1 = "Pakistani";
console.log("String: " + word1);
console.log("Index of 'n': " + word1.indexOf("n"));

// Q4
var word2 = "Hello World";
console.log("String: " + word2);
console.log("Last index of 'l': " + word2.lastIndexOf("l"));

// Q5
console.log("Character at 3rd index in '" + word1 + "': " + word1.charAt(3));

// Q6 (concat method)
var fullName2 = firstName.concat(" ", lastName);
console.log("Hello " + fullName2);

// Q7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
console.log("City: " + city);
console.log("After replacement: " + newCity);

// Q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMsg = message.replace(/and/g, "&");
console.log("Message: " + message);
console.log("After replacement: " + newMsg);

// Q9
var strNum = "472";
var num = Number(strNum);
console.log("Value: " + strNum + " (Type: " + typeof strNum + ")");
console.log("Value: " + num + " (Type: " + typeof num + ")");

// Q10
var userInput1 = prompt("Enter some text:");
console.log("Upper Case: " + userInput1.toUpperCase());

// Q11
var userInput2 = prompt("Enter some text:");
var firstChar = userInput2.slice(0,1).toUpperCase();
var otherChars = userInput2.slice(1).toLowerCase();
var titleCase = firstChar + otherChars;
console.log("Title Case: " + titleCase);

// Q12
var num2 = 35.36;
var str = num2.toString().replace(".", "");
console.log("Number: " + num2);
console.log("Result: " + str);

// Q13
var username = prompt("Enter username:");
for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);
    if (code === 33 || code === 44 || code === 46 || code === 64) {
        alert("Please enter a valid username (No special characters like @ , . !)");
        break;
    }
}

// Q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
var found = false;
for (var j = 0; j < A.length; j++) {
    if (A[j].toLowerCase() === searchItem) {
        console.log(searchItem + " is available at index " + j + " in our bakery.");
        found = true;
        break;
    }
}
if (!found) {
    console.log("We are sorry. " + searchItem + " is not available in our bakery.");
}

// Q15
var password = prompt("Enter your password:");
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
} else if (!isNaN(password.charAt(0))) {
    alert("Password cannot begin with a number.");
} else if (!(/[a-zA-Z]/.test(password) && /[0-9]/.test(password))) {
    alert("Password must contain alphabets and numbers.");
} else {
    alert("Password accepted!");
}

// Q16
var university = "University of Karachi";
var uniArr = university.split("");
for (var k = 0; k < uniArr.length; k++) {
    console.log(uniArr[k]);
}

// Q17
var userInput3 = prompt("Enter a word:");
console.log("User input: " + userInput3);
console.log("Last character: " + userInput3.charAt(userInput3.length - 1));

// Q18
var str2 = "The quick brown fox jumps over the lazy dog";
var count = (str2.toLowerCase().match(/the/g) || []).length;
console.log("Text: " + str2);
console.log("There are " + count + " occurrence(s) of word 'the'");
