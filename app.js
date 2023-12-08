document.write("<h1>Muhammad Sadiq CCO-116650</h1>");


//decalre multi dimensional array

document.write("<h2>Declare Multi dimensional Array:</h2>");

let mulitArray = [
    [],
    [],
    []
]

document.write("Multi dimensional Array Declared == > "+ mulitArray)

document.write("<br><br><br>");

// Declare and initialize a multidimensional array representing the matrix

document.write("<h2>Declare and initialize Multi dimensional Array in given matrix:</h2>");
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

document.write("Matrix: " + matrix);


document.write("<br><br><br>");

//program for counting from 1 to 10

document.write("<h2>Programe for counting from 1 to 10:</h2>");

for(i=1;i<=10;i++){
    document.write(i+"<br>")
}

document.write("<br><br><br>");


//user defined table and its length
// document.write("<h2>Programe for Table from user input:</h2>");
// let userTableNumber = +prompt("Mention the Number You Want the table of:");
// let tableLenght = +prompt("Upto what Number you want the table to?");

// for(i=1;i<=tableLenght;i++){
//     document.write(userTableNumber + " X "+i+" = "+userTableNumber*i+"<br>")
// }

document.write("<br><br><br>");

//print array using for loop

document.write("<h2>Print array items using for loop:</h2>");

var fruits = ["Mango","Banana","Orange","Grapes","Watermelon","Guava"];


for (i=0; i<fruits.length; i++){
    document.write( fruits[i]+"<br>")
    
    
}
document.write("<br>")

for (i=0; i<fruits.length; i++){
document.write("Element at Index " + i +" is "+ fruits[i]+"<br>")
}

document.write("<br><br><br>");

//series counting

document.write("<h2>Series Counting:</h2>");
document.write("<br>")
document.write("Counting: ")
for (i=1;i<=15;i++){
    document.write(+i+", ");
    
}

document.write("<br>")
document.write("Reverse Counting: ")
for (i=10;i>0;i--){
    document.write(i+ ", ")
}

document.write("<br>");
document.write("Even Counting: ");

for (i=0;i<=20;i+=2){
    document.write(i+", ")
}
document.write("<br>");
document.write("Odd Counting: ");

for (i=1;i<=20;i+=2){
    document.write(i+", ")
}

document.write("<br>");
document.write("Series: ");

for (i=2;i<=20;i+=2){
    document.write(i+"K, ")
}

document.write("<br><br><br>");

// user input and index info
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What are You looking for? : (example “cake”, “apple pie”, “cookie”, “chips”, “patties”")
userInput = userInput.toLowerCase()

var flag =false;
for (i=0; i<bakery.length; i++){

    if ( userInput === bakery[i]){
       flag = true;
       alert(userInput + " is available at index " + i + " in our bakery.")
       break
}       
}
if(!flag){
    alert("sorry we dont have "+userInput+" in our bakery.");
}

document.write("<br><br>");

// largest number search in Array of numbers

document.write("<h2>Largest Number In Array:</h2>")
let numbers = [24, 53, 78, 91, 12];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}

document.write("The largest number in the array is: " + largestNumber);

document.write("<br><br><br>");

//multiply with 5
document.write("<h2>Multiply with 5:</h2>")

for (i=0;i<=100;i+=5){
    document.write(i+", ")
}