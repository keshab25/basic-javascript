// alert("hello world")
//type conversion 
/*const x=90;
console.log(x)
console.log(typeof x);
console.log(typeof String(x));*/

 //const x="hello world";
// console.log(x)
// console.log(typeof x);
// console.log(typeof number(x));

//string method
//  let result = "hello world!";
// console.log(result.length);
//length

//concat
//console.log(result.concat("Harka rai"));
//replace
// console.log(result.replace("hello","how"));

//charat
// console.log(result.charAt(6));
//indexof
// console.log(result.indexof("H"));

//includes
// console.log(result.includes("world"));

// console.log(result.substring(0,4));
// console.log(result.slice(0,4));

// console.log(result.toLowerCase());
// console.log(result.toLocaleUpperCase());

// console.log(result.toLowerCase());

// if else
// 

// let grade = "A";
// if(grade==="85")
// {
//     console.log("excellent");
// }
// else if(grade==="75"){
//     console.log("very good");
// }
// else if(grade==="65"){
//     console.log("good");
// }
// else {
//     console.log("you need to work hard");
// }

// const string1="im keshab saud";
// console.log(string1);

// var a="keshab saud";
// console.log(a);

// const cups=40;
// switch (cups) {
//     case 4:
//         console.log("the no. of cups is 4");
//         break;
//     case 2:
//         console.log("the no of cups is 2");
//         break; 
//     default:
//         console.log("the value of cups is non of 4,2");
//         break;
// }

// let day = new Date().getDay();
// let dayName;

// switch (day) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Unknown";
//     break;
// }

// console.log("Today is " + dayName);

// let num = 42;
// let numAsString = String(num); // numAsString is a string
// let str = "123";
// let strAsNumber = Number(str); // strAsNumber is a number
// let bool = false;
// let boolAsNumber = Number(bool); // boolAsNumber is a number

// let day = new Date().getDay();
// switch (day) {
//     case 0:
//         console.log("today is a sunday");
        
//         break;
//     case 1:
//             console.log("today is a monday");
//         break;

//     case 2:
//         console.log("today is a tuesday");
//         break;
//     case 3:
//         console.log("today is a wednesday");
//         break;
//     case 4:
//         console.log("today is a thursday");
//         break;
//     case 5:
//         console.log("today is a friday");
//         break;
//     case 6:
//         console.log("today is a saturday");
//         break;
//     default:
//         console.log("invalid day");
//         break;
// }


// let month = "June";
// switch (month) {
//     case "january":
//     case "february":
//     case "march":
//         console.log("the month is in Q1");
//          break;
//     case "April":
//     case "may":
//     case "June":
//         console.log("the month is in Q2");
//         break;
//     case "July":
//     case "August":
//     case "Sepetmember":
//         console.log("the month is in Q3");
//         break;
//     case "octuber":
//     case "nobember":
//     case "december":
//         console.log("the month is in Q4");
//         break;
    
//     default:
//         console.log("new year");
//         break;
// }

// let grade = "A";
// switch (80) {
//     case 60:
//         console.log("excellent");
        
//         break;
//     case 70:
//         console.log("very good");

//     default:
//         console.log("need to help");
//         break;
// }



// for(let i=0;i<10;i++){
//     console.log(Math.random());

// }

// for(let i=0;i<10;i++){
//     console.log("Iteration");

// }

// for(let i=0;i<10;i++){
//     if(i%2==0){
//             console.log("even number",i);
        
//         }

// }

// let inputValue = prompt("enter your number!");
// let number = Number(inputValue);

// if(isNaN(number)){
//     alert("enter valid number");
// } else{
//     document.write("odd number are:");

//     for(let i= 0; i<=10;i++){
//         if(i%2!==0){
//             document.write("<br>",i);
//         }
//     }
// }

//while loop

// let i=0;
// while(i<=10){
//     console.log("Iteration",i);
//     i++;
// }

//do while loop
// let i=10;
// do {
//     console.log("hello world");
//     i++;
// } while (i<10);


//Array
// const arr = [4,5,7,"ram",9,2,3]
// console.log(arr[4]);

// const arr = [];

// arr[0] = 90;
// arr[1] = 100;

// console.log(arr)

//array methods

// const arr = [8,7,2,3,6,4,5,6];
// console.log(arr.length);

//push
// arr.push(90);
// console.log(arr);

// arr.pop(90);
// console.log(arr);

// arr.unshift(56);
// arr.shift();
// console.log(arr);

// const ans = arr.includes(3);
// console.log(arr);
// console.log(ans);


//bich ko no gayab parn

// const ans = arr.slice(2,5);
// console.log(arr);
// console.log(ans);

//arr.sort()=>

// const obj = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   console.log(obj.firstName);

// const arr = new Array(1,3,4,5);
// console.log(arr);

// const arr = [];

// for(let i = 0;i<10;i++) {
//     arr.push(i);
// }
// console.log(arr);  

//obj collection of properties

//objects
// const car = {
//     name:"Toyota",
//     model:"camry",
//     color:"red",
//     runwheel: 4,
//     iselectric: false,

// // console.log(car);
// // console.log(car.name);
// startEngine: function () {
//     console.log("start Engine");
//     return true;
// },

// closeEngine : function () {
//     console.log("close Engine");
//     return false;
//  },
// };
// console.log(car);
// if(car.startEngine()){
//     console.log("your car is ready to go");
// } else{
//     console.log("your car is not start");
// }

//function

// function myFunc() {
//     let x = 89;
//     let y = 90;
//     let ans = x + y;
//     console.log(ans);
// }
// myFunc();

// function myFunc(a,b,c) {
//     console.log(c);
//     return a+b+c;
// }
// const result = myFunc(6,7,10);
// console.log(result);

// function SumArray(arr=[]){
//     let total = 0;
//     for(let i = 0; i<arr.length;i++){
//         total=total+arr[i]
//         // console.log(arr[i]);
//     }

// }
// Sum([4,7,5,9,3,5,6]);
// const ans = SumArray(arr);
// console.log(ans);

//spcoping
// let x=90;
// {
//     let y= 9+9;
//     // console.log(y);
// }
// console.log(y);
//var xa vane baira bata ni access garn milxa but let ra const le mildain 4

//var scope 
// var x= 90;
// function myVar(){
//     if(true) {
//         var x = 9+9;
//         console.log(x);
// }
// console.log(x);
// myVar();


//for let
// function myLet() 
// {
//     if(true) {
//         let x= 8*8;
//         // console.log(x);
//     }
//     console.log(x)
// }
// myLet();
//block scope() and function scope


//DOM

const header = document.getElementById("myHeader");
const subHeader = document.getElementsByClassName("myClass");
subHeader[0].innerHTML = "Bina dhewa k";
subHeader[0].style.color= "white";
// console.log(header);
header.innerHTML = "oh no";
header.style.backgroundColor = "red";
header.style.color = "white";
console.log(header);



