// (1st ASSIGNMENT) /////////////////////

// CHAPTER NO. 01 (ALERTS) ================================================

// Task # 01

// alert("WELCOME TO MY WEBSITE!")



// Task # 02

// alert("Error! Please enter a valid password.");



// Task # 03

// alert("Welcome to JS Land.... \nHappy Coding!");



// Task # 04

// alert("Welcome to Js Land");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");



// Task # 05

// console.log("Hello... I can rus JS through my web browser's console");





// CHAPTER NO. 02 (VARIABLES FOR STRINGS) ==========================================

// Task # 01

// var username;

// Task # 02

// var myName = "Zeeshan Chohan";



// Task # 03

// var message = "Hello World";
// alert(message);



// Task # 04

// var name = " Zeeshan";
// var age = " 23";
// var certification = " Certified Mobile Application Development";
// alert(name);
// alert(age + " years old");
// alert(certification);



// Task # 05

// word = "PIZZA";
// alert(word + "\n" + word.substring(0, 4) + "\n" + word.substring(0, 3) + "\n" + word.substring(0, 2) + "\n" + word.substring(0, 1));



// Task # 06
// var email = "zeeshanchohan50@gmail.com";
// alert("My email address is " + email);



// Task # 07
// var book = "A Smarter way to learn javascript";
// alert("I am trying to learn from the Book " + book);


// Task # 08
// document.write("Yah! I can write HTML content Through JavaScript <br>");



// Task # 09
// var Design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(Design);
// document.write("<br>" + Design);






// CHAPTER NO. 03 (VARIABLES FOR NUMBERS) ==========================================

// Task # 01

// var age = 21;
// alert("I am " + age + " years old");



// Task # 02

// var timeVisits = 12;
// alert("You have visited this site " + timeVisits + " times")



// Task # 03

// var birthYear;
// birthYear = 1997;
// document.write("<br><br> My birth year is " + birthYear + "<br> Data type of my declared variable is " + typeof (birthYear));



// Task # 04

// visitorsName = "Haseeb";
// productTitle = "Shirts";
// quantity = 12;
// document.write("<br><br>" + visitorsName + " ordered " + quantity + " " + productTitle + "(s) on AXE Clothing store");






// CHAPTER NO. 04 (VARIABLE NAMES: LEGAL & ILLEGAL) ==========================================

// Task # 01

// var firstName, age, gender;



// Task # 02

// var age, firstName, _height, school1, $gender;          //(legal)


// var my name, abc+123, String, 123word, _hello;       //(illegal)



// Task # 03

// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable <br>")
// document.write("Variable names are case sensitive <br>")
// document.write("Variable names should not be JS keywords <br><br>")






// CHAPTER NO. 05 (MATH EXPRESSIONS) ==========================================

// Task # 01

// var num1 = 3
// var num2 = 5
// document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))



// Task # 02

// var num1 = 3
// var num2 = 5
// document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
// document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
// document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
// document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))



// Task # 03

// var number
// document.write("<br>" + "<br>" + "Value after variable declaration is " + number)

// number = 5
// document.write("<br>" + "Initial value: " + number)
// document.write("<br>" + "Value after increment is: " + ++number)

// var number1 = number + 7
// document.write("<br>" + "Value after addition is: " + number1)
// document.write("<br>" + "Value after decrement is: " + --number1)
// document.write("<br>" + "The remainder is: " + number1 % 3)




// Task # 04

// var cost = 600
// var ticket = 5
// document.write("<br> <br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + " PKR")




// Task # 05

// var i
// document.write("<br><br>" + "<h4>Table of 6</h4>")
// for (i = 1; i <= 10; i++) {
//     document.write("6x" + i + "=" + 6 * i + "<br>")
// }




// Task # 06

// var celsius = 25
// document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
// var fahrenheit = 70
// document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")




// Task # 07

// document.write("<br>" + "<br>" + "<h1>Shopping Cart</h1>")
// var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
// document.write("<br>" + "Price of item 1 is " + pi1)
// document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
// document.write("<br>" + "Price of item 2 is " + pi2)
// document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
// document.write("<br>" + "Shiping charges " + sc)
// document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))




// Task # 08

// document.write("<br>" + "<br>" + "<h1>Marks Sheet</h1>")
// var marksobtained = 804
// var totalmarks = 980
// document.write("<br>" + "Total marks " + totalmarks)
// document.write("<br>" + "Marks obtained " + marksobtained)
// document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")




// Task # 09

// document.write("<br>" + "<br>" + "<h1>Currency in PKR</h1>")
// var dollar = 10, saudiriyal = 25
// document.write("Total currency in PKR: " + ((dollar * 104.80) + (saudiriyal * 28)))




// Task # 10

// var integer = 9
// document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))




// Task # 11

// document.write("<br>" + "<br>" + "<h1>Age Calculator</h1>")
// var currentYear = 2020, birthYear = 1997
// document.write("<br>" + "Current year: " + currentYear)
// document.write("<br>" + "Birth year: " + birthYear)
// document.write("<br>" + "Your age is: " + (currentYear - birthYear))




// Task # 12

// document.write("<br>" + "<br>" + "<h1>The Geometrizer</h1>")
// var radius = 20
// document.write("<br>" + "Radius of cicle is:" + radius)
// document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
// document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))




// Task # 13

// document.write("<br>" + "<br>" + "<h1>The Lifetime Supply Calculator</h1>" + "<br>")
// var snack = ("chocolate chip")
// var age = 23, maxAge = 60, perDay = 3
// document.write("<br>" + "Favourite Snack: " + snack)
// document.write("<br>" + "Current age: " + age)
// document.write("<br>" + "Estimated Maximum Age: " + maxAge)
// document.write("<br>" + "Amount of snack per day: " + perDay)
// document.write("<br>" + "You will need " + ((maxAge - age) * perDay) + " " + snack + " to last you until the ripe old age of " + maxAge)






// CHAPTER NO. 06-09 (MATH EXPRESSIONS) ==========================================

// Task # 01

// var a = 10
// document.write("<br>" + "<h4>Result:</h4>")
// document.write("<br>" + "The value of a is: " + a)
// document.write("<br>" + "<br>" + "------------------------------" + "<br>")
// document.write("<br>" + "The value of ++a is: " + (++a))
// document.write("<br>" + "Now the value of a is: " + a)
// document.write("<br>" + "<br>" + "The value of a++ is: " + (a++))
// document.write("<br>" + "Now the value of a is: " + a)
// document.write("<br>" + "<br>" + "The value of --a is: " + (--a))
// document.write("<br>" + "Now the value of a is: " + a)
// document.write("<br>" + "<br>" + "The value of a-- is: " + (a--))
// document.write("<br>" + "Now the value of a is: " + a)




// Task # 02

// var a = 2, b = 1
// var result = --a - --b + ++b + b--
//       3 =  1  -  0  +  1  + 1 
// document.write("<br>" + "<br>" + "a is: " + a)
// document.write("<br>" + "b is: " + b)
// document.write("<br>" + "result is: " + result)




// Task # 03

// var name1 = prompt("What is your name?")
// document.write("<br>" + "<br>" + "Assalam-o-Alikum " + name1 + "!" + "<br>")




// Task # 04

// (Task not found)




// Task # 05

// var tb = prompt("Enter the number for table")
// if (tb == "") {
//     tb = 5

// }
// else {
//     for (let index = 1; index < 11; index++) {
//         document.write("<br>", tb, " X ", index, " = ", tb * index)
//     }
// }




// Task # 06

// var s1 = prompt("Enter First subject name")
// var s2 = prompt("Enter Second subject name")
// var s3 = prompt("Enter Third subject name")
// var total = 100
// var ob1 = prompt("Enter " + s1 + " Obtain Marks")
// var ob2 = prompt("Enter " + s2 + " Obtain Marks")
// var ob3 = prompt("Enter " + s3 + " Obtain Marks")

// var per1 = ob1 / total * 100
// var per2 = ob1 / total * 100
// var per3 = ob1 / total * 100


// document.write("<table> <tr>    <td>Subject</td>    <td>Total</td>  <td>Marks Obtained</td> <td>Marks Percentage</td>   </tr>   <tr>    <td>", s1, "</td>   <td>", total, "</td>    <td>", ob1, "</td>  <td>", per1, "</td> </tr>   <tr><td>", s2, "</td>   <td>", total, "</td>    <td>", ob2, "</td>  <td>", per2, "</td> </tr>   <tr>    <td>", s3, "</td>   <td>", total, "</td>    <td>", ob3, "</td>  <td>", per3, "</td> </tr>   </table>")






// CHAPTER NO. 09-11 (USER INPUT & CONDITIONAL STATEMENT) ==========================================

// Task # 01

// var city = prompt("What is your city name?")
// if (city === "Karachi" || city === "karachi") {
//     document.write("Welcome to city of lights" + "<br>")
// }
// else {
//     document.write("")
// }





// Task # 02
// var gender1 = prompt("What is your gender?")
// if (gender1 === "Male" || gender1 === "male") {
//     document.write("Good Morning Sir" + "<br>")
// }
// else if (gender1 === "Female" || gender1 === "female") {
//     document.write("Good Morning Ma’am" + "<br>")
// }






// Task # 03
// var signalcolor = prompt("Tell the color of traffic signal on road?")
// if (signalcolor === "Red" || signalcolor === "red") {
//     document.write("Must Stop" + "<br>")
// }
// else if (signalcolor === "Yellow" || signalcolor === "yellow") {
//     document.write("Ready to move" + "<br>")
// }
// else if (signalcolor === "Green" || signalcolor === "green") {
//     document.write("Move now" + "<br>")
// }





// Task # 04
// var fuel = prompt("Remaining fuel in your car in litres")
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car" + "<br>")
// }




// Task # 05

// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");        //It is valid
// }

// b 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");        //It is unvalid
// }

// c 
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");        //It is valid
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");        //It is valid
// }

// d 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");        //It is valid
// }

// e
// if (true) {
//     alert("True");        //It is valid
// }
// if (false) {
//     alert("False");
// }

// f
// if ("car" < "cat") {
//     alert("car is smaller than cat");        //It is valid
// }





// Task # 06

// var som1 = +prompt("Marks obtained in Subject 1: ")
// var stm1 = +prompt("Total marks in Subject 1: ")
// var som2 = +prompt("Marks obtained in Subject 2: ")
// var stm2 = +prompt("Total marks in Subject 2: ")
// var som3 = +prompt("Marks obtained in Subject 3: ")
// var stm3 = +prompt("Total marks in Subject 3: ")
// var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
// document.write("Marks Sheet" + "<br><br>")
// document.write("Total marks : " + (stm1 + stm2 + stm3) + "<br>")
// document.write("Marks obtained : " + (som1 + som2 + som3) + "<br>")
// document.write("Percentage : " + percentage1 + "%" + "<br>")
// if (percentage1 < '100' && percentage1 >= '80') {
//     document.write("Grade : A-one" + "<br>")
//     document.write("Remarks : Excellent" + "<br>")
// }
// else if (percentage1 < '80' && percentage1 >= '70') {
//     document.write("Grade : A" + "<br>")
//     document.write("Remarks : Good" + "<br>")
// }
// else if (percentage1 < '70' && percentage1 >= '60') {
//     document.write("Grade : B" + "<br>")
//     document.write("Remarks : You need to improve" + "<br>")
// }
// else if (percentage1 < '60' && percentage1 >= '0') {
//     document.write("Grade : Fail" + "<br>")
//     document.write("Remarks : Sorry" + "<br>")
// }




// Task # 07
// var secretNumber = 5
// var guessSecretNumber = +prompt("Guess the Secret Key")
// var guessSecretNumberAddOne = (guessSecretNumber - 1)
// if (secretNumber === guessSecretNumber) {
//     document.write("Bingo! Correct answer" + "<br>")
// }
// else if (secretNumber === guessSecretNumberAddOne) {
//     document.write("Close enough to the correct answer" + "<br>")
// }




// Task # 08
// var number2 = +prompt("Enter any number: ")
// if (number2 % 3 === 0) {
//     document.write(number2 + " is divisible by 3" + "<br>")
// }
// else {
//     document.write(number2 + " is not divisible by 3" + "<br>")
// }






// Task # 09
// var number3 = +prompt("Enter any number to check if it is even or odd: ")
// if (number3 % 2 === 0) {
//     document.write(number3 + " is an even number" + "<br>")
// }
// else {
//     document.write(number3 + " is an odd number" + "<br>")
// }





// Task # 10
// var temp = prompt("Tell us the temperature")
// if (temp > 40) {
//     document.write("It is too hot outside" + "<br>")
// }
// else if (temp > 30) {
//     document.write("The Weather today is Normal" + "<br>")
// }
// else if (temp > 20) {
//     document.write("Today’s Weather is cool" + "<br>")
// }
// else if (temp > 10) {
//     document.write("OMG! Today’s weather is so Cool" + "<br>")
// }





// Task # 11
// var numcal1 = +prompt("Enter first number: ")
// var numcal2 = +prompt("Enter second number: ")
// var operator = prompt("Enter an operator: ")
// if (operator === "+") {
//     document.write(numcal1 + operator + numcal2 + "=" + numcal1 + numcal2 + "<br>")
// }
// if (operator === "-") {
//     document.write(numcal1 + operator + numcal2 + "=" + numcal1 - numcal2 + "<br>")
// }
// if (operator === "*") {
//     document.write(numcal1 + operator + numcal2 + "=" + numcal1 * numcal2 + "<br>")
// }
// if (operator === "/") {
//     document.write(numcal1 + operator + numcal2 + "=" + numcal1 / numcal2 + "<br>")
// }
// if (operator === "%") {
//     document.write(numcal1 + operator + numcal2 + "=" + numcal1 % numcal2 + "<br>")
// }







// CHAPTER NO. 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS) ==========================================

// Task # 01

// var ch = prompt('Enter any character or number:');
// var a = ch.charCodeAt(0);
// if ((a >= 48) && (a <= 57)) {
//     alert('Input is a number.')
// }
// else if ((a >= 65) && (a <= 90)) {
//     alert('Input is an uppercase letter.')
// }
// else if ((a >= 97) && (a <= 122)) {
//     alert('Input is lowercase letter.')
// }
// else {
//     alert('Invalid input');
// }





// Task # 02

// var int1 = +prompt("Enter first integer to be compared")
// var int2 = +prompt("Enter second integer to be compared")
// if (int1 > int2) {
//     document.write(int1 + " is larger than " + int2 + "<br>")
// }
// else if (int1 < int2) {
//     document.write(int2 + " is larger than " + int1 + "<br>")
// }
// else if (int1 == int2) {
//     document.write(int1 + " is equal to " + int2 + "<br>")
// }





// Task # 03

// var integer1 = +prompt("Enter an integer")
// if (integer1 > 0) {
//     document.write(int1 + " is larger than zero" + "<br>")
// }
// else if (integer1 < 0) {
//     document.write(int2 + " is smaller than zero" + "<br>")
// }
// else if (integer1 == 0) {
//     document.write(int1 + " is equal to zero" + "<br>")
// }





// Task # 04

// var char = prompt("Enter any character")
// if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
//     document.write("It is a vowel" + "<br>")
// }
// else {
//     document.write("It is not a vowel" + "<br>")
// }





// Task # 05

// var corpass = pakistan
// var guesspass = prompt("Enter your password" + "<br>")
// if (corpass === guesspass) {
//     document.write("Correct! The password you entered matches the original password" + "<br>")
// }
// else if (corpass !== guesspass) {
//     document.write("Incorrect password" + "<br>")
// }
// else {
//     document.write("Please enter your password" + "<br>")
// }





// Task # 06

// var greeting, hour = 13
// if (hour < 18) {
//     greeting = "Good day"
// }
// else {
//     greeting = "Good evening"
// }





// Task # 07

// var time = prompt("Enter time in 2 hour format: ")
// if (time >= 0000 && time < 1200) {
//     document.write("Good Morning!" + "<br>")
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!" + "<br>")
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!" + "<br>")
// }
// else if (time >= 2100 && time < 2359) {
//     document.write("Good Night!" + "<br>")
// }




// CHAPTER NO. 14-16  (ARRAYS) ==========================================

// Task # 01

// var students = []




// Task # 02

// var student = new Array()




// Task # 03

// var student = new Array("std1", "std2", "std3", "std4", "std5")




// Task # 04

// var numArray = [1, 2, 5, 6, 7, 8, 6, 7]




// Task # 05

// var boolArray = [true, false]




// Task # 06

// var mixedArray = [1, 'string1', true, 8, false, 'string 2']




// Task # 07

// var qual = ('Qualification:' + '<br>').bold()
// document.write(qual + "<br>")
// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
// var i;
// for (i = 0; i < qualification.length; i++) {
//     document.write((i + 1) + ') ' + qualification[i] + "<br>")
// }




// Task # 08

// var names = ["Michael", "John", "Tony"]
// var obtainedscores = [320, 230, 480]
// var totalmarks1 = 500
// var percentagearray
// for (i = 0; i < 3; i++) {
//     document.write("Score of " + names[i] + " is " + obtainedscores[i] + ". Percentage: " + (obtainedscores[i] / totalmarks1 * 100) + "%" + "<br>")
// }




// Task # 09

// var color = ['Red', 'Green', 'Blue']
// document.write(color + '<br>')
// var a = prompt('What color do you want to add to the beginning?')
// color.unshift(a);
// document.write(color + '<br>')
// var b = prompt('What color do you want to add to the end?')
// color.push(b)
// document.write(color + '<br>')
// color.unshift('Pink', 'Orange');
// document.write(color + '<br>')
// color.shift(0);
// document.write(color + '<br>')
// color.pop()
// document.write(color + '<br>')
// var d = prompt('What color do you want to add?')
// var e = prompt('Give the position of color: ')
// var f = parseInt(e)
// color.splice(f, 0, d)
// document.write(color + '<br>')
// var g = prompt('What color do you want to delete?')
// var h = prompt('Give the position of color: ')
// var i = parseInt(e)
// color.slice(i, 0, g)
// document.write(color + '<br>')




// Task # 10

// var std_score = [320, 230, 480, 120]
// document.write('Scores of Students: ' + std_score + '<br>')
// var sort_score = std_score.sort()
// document.write('Ordered Scores of Students: ' + sort_score)




// Task # 11

// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// document.write('Cities List: ' + '<br>' + cities + '<br>')
// var sel_cities = cities.slice(1, 4)
// document.write('Selected Cities: ' + '<br>' + sel_cities + '<br>')




// Task # 12

// var arr = ['This ', ' is ', ' my ', 'cat'];
// document.write('Array: ' + '<br>' + arr + '<br>');
// var join = arr.join(' ');
// document.write('String: ' + '<br>' + join + '<br>');




// Task # 13

// var a = [];
// var i;
// for (i = 0; i < 4; i++) {
//     a.push(prompt("Enter Devices:"));
// }
// for (i = 0; i < 4; i++) {
//     document.write('Out: ' + '<br>' + a[i] + '<br>');
// }




// Task # 14

// var a = [];
// var i;
// for (i = 0; i < 4; i++) {
//     a.push(prompt("Enter Devices:"));
// }
// for (i = a.length - 1; i >= 0; i--) {
//     document.write('Out: ' + '<br>' + a[i] + '<br>');
// }





// Task # 15

// var va = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write(va)





// CHAPTER NO. 17-20  (ARRAYS AND LOOP) ==========================================

// Task # 01

// var temp = [];




// Task # 02

// var temp = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// var i;
// var j;
// for (i = 0; i < 4; i++) {
//     for (j = 0; j < 4; j++) {
//         document.write(temp[i][j]);
//     }
//     document.write('<br');
// }




// Task # 03

// var i;
// for (i = 1; i <= 10; i++) {
//     document.write(i + '<br>')
// }




// Task # 04

// var num = prompt('Enter a number to show its multiplication table: ');
// var len = prompt('Enter length of multiplication table: ');
// document.write('Multiplication table of ' + num + '<br>');
// document.write('Lenth ' + len + '<br>' + '<br>');
// var i;
// for (i = 1; i <= len; i++) {
//     document.write(num + 'X' + i + '=' + num * i + '<br>');
// }




// Task # 05

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// var i;
// for (i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + '<br>')
// }
// for (i = 0; i < fruits.length; i++) {
//     document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>')
// }




// Task # 06

// var i;
// document.write('Counting: ' + '<br>' + '<br>');
// for (i = 1; i <= 15; i++) {
//     document.write(i + ', ');
// }

// document.write('Reverse Counting: ' + '<br>' + '<br>');
// for (i = 10; i >= 1; i--) {
//     document.write(i + ', ');
// }

// document.write('Even: ' + '<br>' + '<br>');
// for (i = 0; i <= 20; i + 2) {
//     document.write(i + ', ');
// }

// document.write('Odd: ' + '<br>' + '<br>');
// for (i = 1; i < 20; i + 2) {
//     document.write(i + ', ');
// }

// document.write('Series:' + '<br>' + '<br>');
// for (i = 2; i <= 20; i + 2) {
//     document.write(i + 'k, ');
// }




// Task # 07

// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var b = prompt('Welcome to ABC Bakery. What do you want to order Sir/Ma' + "'" + 'am');
// var i;
// for (i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         document.write(b + 'availabe at index ' + i + ' of our bakery.');
//         break;
//     }
//     else {
//         document.write('We are Sorry. ' + b + ' is not available at our bakery.')
//     }
// }





// Task # 08

// var a = [24, 53, 78, 91, 12];
// var i, j;
// var f;
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a.length; j++) {
//         if (a[i] < a[j]) {
//             f = a[j];
//         }
//     }
// }
// document.write('The Largest number is ' + f);




// Task # 09

// var a = [24, 53, 78, 91, 12];
// var i, j;
// var f;
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             f = a[j];
//         }
//     }
// }
// document.write('The Smallest number is ' + f);




// Task # 10

// var i;
// for (i = 1; i <= 20; i++) {
//     document.write(5 * i + ', ');
// }




// (2nd ASSIGNMENT) /////////////////////




// CHAPTER NO. 21-25 (STRING METHODS) ================================================

// Task # 01

// var firstName = prompt("Enter Your First Name", "first name");
// var lastName = prompt("Enter Your Last Name", "last name");
// var fullName = firstName + " " + lastName;
// alert("Hello! \n" + fullName);



// Task # 02

// var favouritePhone = prompt("Enter Your Favourite Phone", "my favourite phone is");
// var len = favouritePhone.length;
// document.write("My favourite phone is: " + favouritePhone);
// document.write("<br>Length Of String Is: " + len);



// Task # 03

// var word = "Pakistan";
// document.write("<br><br>String: " + word + "<br>");
// for (var i = 0; i < word.length; i++) {
//     if (word.slice(i, i + 1) === "n") {
//         document.write("Index of 'n': " + i);
//     }
// }



// Task # 04

// var word1 = "Hello World";
// document.write("String: " + word1 + "<br>");
// var find = word1.lastIndexOf("l");
// document.write("Last Index of 'l': " + find);



// Task # 05

// var word = "Pakistani";
// document.write("String: " + word + "<br>");
// document.write("Character at Index 3: " + word[3]);



// Task # 06

// var firstName = prompt("Enter Your First Name", "first name");
// var lastName = prompt("Enter Your Last Name", "last name");
// var fullName = firstName.concat(" " + lastName);
// alert("Hey, Welcome... \n" + fullName);



// Task # 07

// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// for (var i = 0; i < city.length; i++) {
//     if (city.slice(i, i + 5) === "Hyder") {
//         city = city.slice(0, i) + "Islam" + city.slice(i + 5);
//         document.write("After Replacement: " + city);
//     }
// }



// Task # 08

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);

//     }
// }
// document.write("var message = " + message);



// Task # 09

// var string = "472";
// console.log(string);
// var number = parseInt(string);
// console.log("Value: " + number);



// Task # 10

// var user = prompt("Write Some Thing In Lower Case", "Enter Here");
// var upperCase = user.toUpperCase();
// alert("Upper Case: " + upperCase);



// Task # 11

// var user = prompt("Enter in Lower Case", "Enter Here");
// var firstChar = user.slice(0, 1);
// var rem = user.slice(1);
// firstChar = firstChar.toUpperCase();
// user = firstChar.concat(rem);
// alert("Title Case: " + user);



// Task # 12

// var mul;
// var num = 35.36;
// var cal = num.toString();
// var store;
// for (var i = 0; i < cal.length; i++) {
//     if (cal.slice(i, i + 1) === ".") {
//         store = cal.slice(i + 1);
//     }
// }
// var temp = store.length;
// temp = Math.pow(10, temp);
// num *= temp;
// document.write("Result = " + num);



// Task # 13

// var input = prompt("Enter your text", "Enter Here!");
// for (var i = 0; i < input.length; i++) {
//     if (input.slice(i, i + 1) === "@" || input.slice(i, i + 1) === "," || input.slice(i, i + 1) === "!" || input.slice(i, i + 1) === ".") {
//         alert("Please Enter a valid user Name...");
//     }
// }



// Task # 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery, \nWhat do you want to order Sir / Ma'am", "Enter Here");
// var orderr = order.toLowerCase();
// var temp = 0;
// for (var i = 0; i < A.length; i++) {
//     if (orderr === A[i]) {
//         alert(order + " is avaliable at index " + i + " in our Bakery");
//         break;
//     }
//     temp++
// }

// if (temp === 5) {
//     alert("We are Sorry! " + order + " is not avaliable in our Bakery");
// }



// Task # 15

// var password = prompt("Enter Password!", "enter here!");
// if (password.slice(0, 1) <= 48 && password.slice(0, 1) <= 57) {
//     alert("Password Can not begin with a number");
//     alert("Please Enter A Valid Password..");
// }
// else if (password.length < 6) {
//     alert("Password Must be greater than 6");
// }
// else {
//     alert("Welcome!");
// }



// Task # 16

// var university = "University Of Karachi";
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>")
// }



// Task # 17

// var userInput = prompt("Enter Here!");
// document.write("User Input = " + userInput + "<br>");
// document.write("Last Character Of Input = " + userInput[userInput.length -1]);



// Task # 18

// var string = "The quick brown fox jumps over the lazy dog";
// document.write("String : " + string + "<br>");
// var value = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         value++;
//     }
// }
// if(value >= 2){
//     document.write("There are " + value + " Occurrence(s) of word 'the'");
// }
// else{
//     document.write("There is " + value + " Occurrence of word 'the'");
// }






// CHAPTER NO. 26-30 (MATH METHODS) ================================================

// Task # 01

// var inputNumber = prompt("Enter Positive Integer","Enter Here!");
// document.write("Number : " + inputNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNumber));



// Task # 02

// var inputNegativeNumber = prompt("Enter Negative Integer","Enter Here!");
// document.write("Number : " + inputNegativeNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNegativeNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNegativeNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNegativeNumber));



// Task # 03

// var absoluteValue = prompt("Enter Value:");
// document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));



// Task # 04

// var generateRandom = parseInt((Math.random() * 6) + 1);
// document.write("Random Dice Number Is : " + generateRandom);



// Task # 05

// var toss = parseInt((Math.random() * 2) + 1);
// document.write(toss + "<br>");
// switch (toss) {
//     case 1:
//         document.write("Random coin Value : Tails");
//         break;
//     case 2:
//         document.write("Random coin Value : Heads");
//         break;
// }



// Task # 06

// var numbers = parseInt((Math.random() * 100) + 1);
// document.write("Random numbers between 1 and 100 : " + numbers);



// Task # 07

// var weight = prompt("Enter Weight in Kilograms:, 50 kgs");
// var store;
// for (var i = 0; i < weight.length; i++) {
//     if (weight.slice(i, i + 3) === "kgs") {
//         store = Number(weight.split("kgs",1));
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 2) === "kg") {
//         store = weight.split("kg", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 9) === "kilograms" || weight.slice(i, i + 8) === "kilogram") {
//         store = weight.split("kilograms", 1);
//         store = weight.split("kilogram", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
// }



// Task # 08

// var secretNumber = parseInt((Math.random() * 10) + 1);
// var guess = Number(prompt("Guess a number between 1 - 10","Try your luck"));
// if(guess === secretNumber){
//     alert("Congratulations!!!");
// }
// else{
//     alert("Try Again!");
// }






// CHAPTER NO. 31 - 34 (DATE METHODS) ================================================

// Task # 01

// var date = new Date();
// document.write(date);



// Task # 02

// var month = date.getMonth();
// var monthsCollection = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for (var i = 0; i < monthsCollection.length; i++) {
//     if(month === i){
//         document.write("<br>Current Month : "+ monthsCollection[month]);
//         break;
//     }
// }



// Task # 03

// var day = date.getDay();
// var daysCollection = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// document.write("<br>Current Day Is : ");
// for (var i = 0; i < daysCollection.length; i++) {
//     if (day === i) {
//          store = daysCollection[day];
//         for (var j = 0; j < 3; j++) {
//            document.write(store[j]);
//         }
//     }
// }



// Task # 04

// switch (day) {
//     case 0: case 7:
//         document.write("Its Funday");
//         break;
//     case 1: case 2: case 3: case 4: case 5: case 6:
//         document.write("<br>Its Borr Day");
//         break;
// }



// Task # 05

// var d = date.getDate();
// if(d<= 15){
//     document.write("First Fifteen Days Of the Month");
// }
// else{
//     document.write("<br>Last Days Of the Month");
// }



// Task # 06

// var time = new Date();
// document.write("<br>Current Date : " + time + "<br>");
// document.write("Elapsed milliSecond Since January 1, 1970 : " + time.getTime() + "<br>");
// document.write("Elapsed minuites Since January 1, 1970 : " + (time.getTime() / (1000 * 3600)));



// Task # 07

// var find = time.getHours();
// if (find >= 0 && find <= 12) {
//     document.write(" Its AM")
// }
// else{
//     document.write(" Its PM");
// }



// Task # 08

// var x = new Date("December 31, 2020");
// document.write("<br>" + x);



// Task # 09

// var $date = new Date("June 18, 2015");
// var date = new Date();
// var store = date - $date;
// document.write("<br>" + (parseInt((store) / (1000 * 60 * 60 * 24))) + " days have passed since 1st Ramadan, 2015");



// Task # 10

// var dateObj = new Date("2020");
// var Current = new Date();
// var randomVariable = Current - dateObj;
// document.write("<br>" + parseInt((randomVariable)/(1000 * 60)) + " seconds had passed since the beginning of 2020");



// Task # 11

// var current = new Date();
// document.write("<br>Current Date : " + current);
// current.setHours(current.getHours() - 1);
// document.write("<br> 1 hour ago, it was " + current);



// Task # 12

// var current = new Date();
// document.write("<br>Current Date : " + current);
// current.setFullYear(current.getFullYear() - 100);
// document.write("<br>100 years back, it was " + current);



// Task # 13

// var askUser = prompt("Enter Your Age","Iam 18 years old");
// var dateObject = new Date();
// var calculation = dateObject.getFullYear() - askUser;
// document.write("<br>Your Age Is : " + askUser);
// document.write("<br>Your Birth Year Is : " + calculation);



// Task # 14

// var name = prompt("Enter Your Name", "My name is");
// document.write("<h1> K-Electric Bill </h2> ");
// var units = 410;
// var charge = 16;
// var late = 350
// document.write("Customer Name : <b>" + name + "</b> <br>");
// document.write("Month : <b>June</b> <br>");
// document.write("Number Of Units : <b>" + units + "</b> <br>");
// document.write("Charge per Unit : <b>" + charge + " Pkr</b> <br>");
// var onDue = units * charge;
// document.write("<br>Net Amount Payable (within Due Date) Is : <b>" + Math.round(onDue) + "</b><br>");
// document.write("Late Payment Charger : <b>" + late + " </b> <br>")
// var notDue = onDue + late;
// document.write("Gross Amount Payable (after due date) Is : <b>" + Math.round(notDue) + "</b>");






// CHAPTER NO. 35 - 38 (FUNCTION) ================================================

// Task # 01

// function date() {
//     var currentDate = new Date();
//     document.write(currentDate);
// }
// date();



// Task # 02

// function greet(f, l) {
//     var conact = f + " " + l;
//     alert("Hello! " + conact);
// }
// var firstnAme = prompt("Enter Your First Name:");
// var lastnAme = prompt("Enter Your Last Name:");
// greet(firstnAme,lastnAme);



// Task # 03

// function addTwo(int1, int2) {
//     return int1 + int2;
// }
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// var result = addTwo(num1, num2);
// alert("Sum Of " + num1 + " and " + num2 + " Is : " + result);



// Task # 04

// function calculator(num1, operator, num2) {
//     if (operator === "+") {
//         return num1 + num2;
//     }
//     else if (operator === "-") {
//         return num1 - num2;
//     }
//     else if (operator === "*") {
//         return num1 * num2;
//     }
//     else if (operator === "/") {
//         return num1 / num2;
//     }
//     else if (operator === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Invalid";
//     }
// }
// var int1 = Number(prompt("Enter First Number"));
// var ope = prompt("Enter Operator Number");
// var int2 = Number(prompt("Enter Second Number"));
// var cal = calculator(int1, ope, int2);
// alert(int1 + " " + ope + " " + int2 + " = " + cal);



// Task # 05

// function square(num) {
//     return Math.pow(num, 2);
// }
// var user = prompt("Enter Number");
// var ans = square(user);
// alert("Square Of " + user + " is : " + ans);



// Task # 06

// function factorial(num) {
//     var store = 1
//     for (var i = 1; i <= num; i++) {
//         store *= i
//     }
//     document.write("The Factorial Of " + num + " is : " + store);
// }
// var user = Number(prompt("Enter Number"));
// factorial(user);



// Task # 07

// function counting(first, last) {
//     for (var i = first; i <= last; i++) {
//         document.write(i + " ");
//     }
// }

// var start = Number(prompt("Enter Start Number"));
// var end = Number(prompt("Enter Last Number"));
// counting(start, end);




// Task # 08

// function calculateHypotenuse(b, p) {
//     function calculateSquare(n) {
//         return Math.pow(n, 2);
//     }
//     return calculateSquare(b) + calculateSquare(p);
// }
// var base = Number(prompt("Enter Base"));
// var perpendicular = Number(prompt("Enter Perpendicular"));
// var calcu = calculateHypotenuse(base, perpendicular);
// document.write("Hypotenuse Is : " + calcu);




// Task # 09

// function areaOfReactangle(val1, val2) {
//     var A = val1 * val2;
//     alert("Area Of Reactangle Is : " + A);
// }
// var height = 23;
// var width = 81;
// areaOfReactangle(3, 8); // as value
// areaOfReactangle(height, width); // as Variable



// Task # 10

// function palindrome(str, num) {
//     var temp = "";
//     for (var i = num; i >= 0; i--) {
//         temp = temp + str[i]
//     }
//     if(temp === str){
//         document.write(str + " Is Palindrome");
//     }
//     else{
//         document.write(str + " Is Not Palindrome");
//     }
// }
// var pal = prompt("Enter Word");
// len = pal.length - 1;
// palindrome(pal, len);



// Task # 11

// function Upper(string = "") {
//     var split = string.toLowerCase().split(" ");
//     for (var i = 0; i < split.length; i++) {
//         split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
//     }
//     string = split.join(" ");
//     document.write(string);
// }
// var str = "the quick brown fox";
// Upper(str);



// Task # 12

// function longest(str = "") {
//     var long = str.split(" ");
//     longestWord = 0;
//     store = "";
//     for (var i = 0; i < long.length; i++) {
//         if (long[i].length > longestWord) {
//             longestWord = long[i].length;
//             store = long[i]
//         }
//     }
//     document.write(store);
// }
// longest("Web Development Tutorial");


// Task # 13

// function Occurence(string = "", letter = "") {
//     var val = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string.slice(i, i + 1) === letter) {
//             val++;
//         }
//     }
//     document.write(letter + " appears " + val + " times");
// }

// Occurence("muhammad", "m")



// Task # 14

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The Circumference Of Circle Is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = (Math.PI * Math.pow(radius,2));
//     document.write("The Area Of Circle Is " + area.toFixed(2));
// }
// calcCircumference(5);
// calcArea(4);






// (3rd ASSIGNMENT) /////////////////////

// CHAPTER NO. 38 - 42 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS) ================================================

// Task # 01

// function power(a, b) {
//     document.write("Value of a is: " + a + "<br><br>");
//     document.write("Value of b is: " + b + "<br><br>");
//     document.write("The value of a raised to b is: " + Math.pow(a, b));
// }
// power(+prompt("Enter first number"), +prompt("Enter second number"));





// Task # 02

// function checkLeapYear() {
//     document.write("<h1>Finding Leap Year</h1>")
//     var year = +prompt("Please enter year");
//     document.write("Entered year is: " + year + "<br>")
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         document.write(year + " is a leap year");
//     }else {
//         document.write(year + " is not a leap year");
//     }
// }
// checkLeapYear();





// Task # 03

// document.write("<h1>Finding the area of triangle</h1> <br>");
// var a = +prompt("Enter the value of a");
// var b = +prompt("Enter the value of b");
// var c = +prompt("Enter the value of c");
// var S;
// var area;
// function calculatingS() {
//     S = (a + b + c) / 2;
//     return document.write("The value of S is: " + S + "<br>");
// }
// calculatingS();
// function claculatinArea() {
//     S = (a + b + c) / 2;
//     area = S*(S-a)*(S-b)*(S-c);
//     return document.write("Area of triangle is: " + area);
// }
// claculatinArea();





// Task # 04

// document.write("<h1>Marks Sheet</h1> <br>");
// var sub1 = +prompt("Enter first subject marks");
// var sub2 = +prompt("Enter second subject marks");
// var sub3 = +prompt("Enter third subject marks");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var average;
// var percentage;
// function mainFunction() {
//     function average() {
//         average = obtainedMarks / 3;
//         return document.write("Average is: " + average + "<br>");
//     }
//     average();
//     function percentage() {
//         percentage = obtainedMarks / totalMarks * 100;
//         return document.write("Percentage is: " + percentage + "%");
//     }
//     percentage();
// }
// mainFunction();





// Task # 05

// function chaeckIndexOf(word, character) {
//     word = prompt("Please enter word");
//     document.write("Entered word is: " + word + "<br><br>");
//     character = prompt("Please enter character to find indexOF");
//     document.write("Character to find the indexOf: " + character + "<br><br>")
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === character) {
//             return document.write("IndexOf " + character + " is: " + i);
//         }
//     }
//     return -1;
// }
// chaeckIndexOf();





// Task # 06

// function removingVowels() {
//     var string = prompt("Please enter your sentence", "The quick brown fox jumps over the lazy dog");
//     string = string.replace(/^(.{25}[^\s]*).*/, "$1") + "\n";
//     document.write("Entered sentence is: " + string + "<br>");
//     return document.write("After removing vowels: " + string.replace(/[aeiou]/gi, ''));
// }
// removingVowels();





// Task # 07

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     document.write("Sentence is: " + str + "<br><br>")
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (haveSeenVowel) {
//                         count++;
//                         haveSeenVowel = false;
//                     } else {
//                         haveSeenVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 haveSeenVowel = false
//         }
//     }

//     return document.write("The number of occurrences is: " + count);
// }
// findOccurrences();





// Task # 08

// var distance = +prompt("Please enter distance in km");
// document.write("Entered distance in km is: " + distance + "<br><br>")
// var distance, meters, feet, inches, centimeters;
// function findingCentimeters() {

//     function findingInches() {

//         function findingFeet() {

//             function findingMeters() {
//                 meters = distance * 1000;
//                 return document.write("Distance in meters is: " + meters + " m <br><br>");
//             }
//             findingMeters();

//             feet = meters * 3.28;
//             return document.write("Distance in feet is: " + feet + " feet <br><br>");
//         }
//         findingFeet();

//         inches = feet * 12;
//         return document.write("Distance in inches is: " + inches + " inches <br><br>");
//     }
//     findingInches();

//     centimeters = inches * 30;
//     return document.write("Distance in centimeters is: " + centimeters + " cm <br><br>");
// }
// findingCentimeters();





// Task # 09

// var workingHours;
// function overtimePay() {
//     workingHours = +prompt("Please enter the working hours of an emplyee");
//     document.write("Entered the working hours of an employee is " + workingHours + " hr <br><br>");
//     document.write("Per hour overtime rate is Rs." + 12.00 + "<br><br>");
//     if (workingHours > 40) {
//         var overTime = workingHours - 40;
//         var overTimePay = overTime * 12.00;
//         document.write("Employee overtime pay is Rs." + overTimePay + "<br>");
//     } else {
//         document.write("You have to work for more than 40 hours to get over time pay <br>");
//     }
// }
// overtimePay();





// Task # 10

// var hundreds, fifties, tens;
// var amount = +prompt("Please enter amount for withdraw");
// document.write("Entered withdraw amount is: " + amount + "<br><br>");
// function currencyDenominations() {
//     hundreds = Math.floor(amount / 100);
//     document.write("Required notes of Rs. 100 is: " + hundreds + "<br><br>");
//     fifties = Math.floor((amount % 100) / 50);
//     document.write("Required notes of Rs. 50 is: " + fifties + "<br><br>");
//     tens = Math.floor(((amount % 100) % 50) / 10);
//     document.write("Required notes of Rs. 10 is: " + tens + "<br><br>");
//     document.write("Amount still remaining Rs: " + (((amount % 100) % 50) % 10) + "<br><br>");
//     document.write("You will have " + hundreds + " hundred notes " + fifties + " fifty notes " + tens + " ten notes")
// }
// currencyDenominations();





// CHAPTER NO. 43 - 48 (EVENTS) ================================================

// Task # 1 & 2

// function thanks() {
//     alert("Thanks for purchasing a mobile phone from us");
// }





// Task # 3

// function delEntry() {
//     document.getElementsByTagName("tr")[1].remove();
// }





// Task # 4

// function secondImage() {
//     var img = document.getElementById("img");
//     img.src = "images/VivoY30128GB.jpg";
// }
// function firstImage() {
//     var img = document.getElementById("img");
//     img.src = "images/SamsungGalaxyA31.jpg";
// }





// Task # 5

// var increase =  0
// function countUp() {
//     increase += 1;
//     document.getElementById("count").innerHTML = increase;
// }
// function countDown() {
//    var decrease = increase--;
//     document.getElementById("count").innerHTML = decrease;
// }






// CHAPTER NO. 49 - 52 ================================================

// Task # 1

// function submitForm() {
//     var name = document.getElementById("name").value;
//     var pasteName = document.getElementById("pasteName");
//     pasteName.innerHTML = name;
//     var email = document.getElementById("email").value;
//     var pasteEmail = document.getElementById("pasteEmail");
//     pasteEmail.innerHTML = email;
//     var password = document.getElementById("password").value;
//     var pastePassword = document.getElementById("pastePassword");
//     pastePassword.innerHTML = password;
//     var confirmPassword = document.getElementById("confirmPassword").value;
//     var pasteConfirmPassword = document.getElementById("pasteConfirmPassword");
//     pasteConfirmPassword.innerHTML = confirmPassword;
// }





// Task # 2

// function moreParagraph() {
//     var paragraph = 'Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.'
//     document.getElementById('paragraph').innerHTML = paragraph;
//     var read_more = document.getElementById('read_more').innerHTML = "";
// }





// Task # 3

// function delEntry() {
//     document.getElementsByTagName("tr")[1].remove();
// }

// function editEntry() {
//     document.getElementsByTagName("tr").contentEditable = "true";
// }





// CHAPTER NO. 53 - 58 (EVENTS) ================================================

// Task # 1

// var modal = document.getElementById('modal');
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("modal-img");

// function showImage(image) {
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display = "block";
//     modalImg.src = image;
// }

// function onClosedImagModal() {
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open');
//     setTimeout(() => { modal.style.display = "none"; }, 550)
// }





// Task # 2

// var max = 100;

// function zoomIn() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize >= max) {
//         alert("Maximum zoom in limit reached");
//     } else if (currentFontSize < max) {
//         paragraph.style.fontSize = 10 + currentFontSize + 'px';
//     }
// }
// var min = 20;

// function zoomOut() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize <= min) {
//         alert("Maximum zoom out limit reached");
//     } else if (currentFontSize > min) {
//         paragraph.style.fontSize = currentFontSize - 10 + 'px';
//     }
// }





// CHAPTER NO. 58 - 67 (DOM) ================================================

// Task # 1

// (part i)
// var mainContent = document.getElementById("main-content");

// // (part ii)
// console.log(mainContent.childNodes);

// // (part iii)
// var elements = document.getElementsByClassName("render");
// for (var i = 0; i < elements.length; i++) {
//     var showElements = document.getElementById("show-elements");
//     var p = document.createElement("p");
//     var text = document.createTextNode(elements[i].innerHTML);
//     p.appendChild(text);
//     showElements.appendChild(p);
// }

// // (part iv)
// var firstName = document.getElementById("first-name");
// firstName.value = "Zeeshan";

// // (part v)
// var lastName = document.getElementById("last-name");
// lastName.value = "Chohan";
// var email = document.getElementById("email");
// email.value = "zeeshanchohan50@gmail.com";





// // Task # 2

// (part i)
// var checkType = document.getElementById("form-content");
// console.log(checkType.nodeType);

// (part ii)
// var checkType2 = document.getElementById("lastName");
// console.log(checkType2.nodeType);
// console.log(checkType2.childNodes[0].nodeType);

// (part iii)
// var checkType3 = document.getElementById("lastName");
// checkType3.innerHTML = "Last Name: Waseem"

// (part iv)
// var check = document.getElementById("main-content");
// console.log(check.firstChild);
// console.log(check.lastChild);

// (part v)
// var check2 = document.getElementById("lastName");
// console.log(check2.nextSibling);
// console.log(check2.previousSibling);

// (part vi)
// var check3 = document.getElementById("email");
// console.log(check3.parentNode);
// console.log(check3.nodeType);

// the end ****************