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

// const header = document.getElementById("myHeader");
// const subHeader = document.getElementsByClassName("myClass");
// subHeader[0].innerHTML="nks";
// subHeader[0].style.color= "white";
// console.log(header);
// header.innerHTML = "oh no";
// header.style.backgroundColor = "red";
// header.style.color = "white";
// console.log(header);




// function myFunc(a,b){
//     return a*b
// }

// const ans = myFunc(8,9)
// console.log(ans)

// console.log(document.body)

//DOM MANIPULATION 
//let Btn = document.query

// const text = document.getElementById("Hello");
// const text1 = document.getElementsByClassName("myclass");
// const mayor = document.getElementsByTagName("span");
// const Btn = document.querySelectorAll("button");
// const clickBtn = document.querySelector("#click");

// console.log(clickBtn.getAttribute("id"));
// clickBtn.setAttribute("class","meroClass");
// function showWhenClick(){
//     const h1 = document.createElement("h1");
// h1.innerHTML = "Nepal has adopted non-alliagnance goreign policy";
// document.body.prepend(h1);
// }
// function deleteOnes() {
//     const h1= document.querySelector("h1");
//     h1.remove();
// }
// clickBtn.onclick = showWhenClick;
// Btn[1].onclick = deleteOnes;
//prepend le frist ma print garxa and append le last ma
// console.log(Btn);

// clickBtn.style.backgroundColor = "green";
// clickBtn.style.color = "white";
// clickBtn.style.border = "none";
// clickBtn.style.cursor = "pointer";
// clickBtn.style.padding = "10px";
// clickBtn.style.margin = "5px";

// Btn[1].style.backgroundColor = "red";
// Btn[1].style.color = "white";
// Btn[1].style.border = "none";
// Btn[1].style.cursor = "pointer";
// Btn[1].style.padding = "10px";
// Btn[1].style.margin = "5px";


// mayor[0].innerHTML = "Harka rai";
// mayor[1].innerHTML = "Balen shah";
// // console.log(text1[0]);
// text1[0].innerHTML = "<h2>im goood what about you</h2>";
// text1[0].style.backgroundColor = "blue";
// text1[0].style.color = "red";

// text.innerHTML = "<h1>How is your life</h1>";
// text.style.backgroundColor = "red";
// text.style.color = "white";


//Advanced array methods
// const arr = [3,5,6,2,1,8,9,7];

// arr.find((value,index)=>{
//     if(value ===6){
//         console.log("6 existed!");
//     }

// });

// const result = myFunc(4,5);
// console.log(result);

//find method
// arr.find((value,index)=>console.log(value,index));
// const newArr= arr.find((value,index)=>value>5);
// console.log(newArr);

//filter
// const newArr= arr.filter((value,index)=>value>5);
// console.log(newArr);

//sort
// const newArr= arr.sort((a,b)=>a-b);
// console.log(newArr);

//flat
// const subArr = [
//     [1,,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]];
// const newArr = subArr.flat();
// console.log(newArr);

//some
// const result = arr.some((value,index)=>value>6);
// console.log(result);

//every
// const result = arr.every((value,index)=>value>6);
// console.log(result);

//foreach
// const result = arr.foreach((value,index)=> (value += 5));
// console.log(result);
// console.log(arr);

//map
// const result = arr.map((value,index)=> (value += 5));
// console.log(result);
// console.log(arr);

//reduce
// const result = arr.reduce(
//     (prevValue,currentValue)=> prevValue + currentValue
// );
// console.log(result);
//  console.log(arr);


//events
//add event listner
// const header = document.querySelector("#header");
// const Box = document.querySelector("#box");
// const Btn = document.querySelector("#listen");
// const Input = document.querySelector("input");

// Input.addEventListener("change",(e) => {
//     console.log(event.target.value);
// });

// Btn.classList.add("classForDiv");

// Btn.addEventListener("click",() => {
//     header.innerHTML = "prachanda lee bhaisi lyayo";
//     Box.classList.add("classForBox");
//     // console.log("clicked");
// });

// Btn.addEventListener("contextmenu",(e) =>{
//     e.preventDefault();
//     Btn.style.backgroundColor = "purple";
// });

// Box.addEventListener("mouseover",() => {
//     header.style.backgroundColor = "Orange";
//     header.style.color = "white";
//     Btn.style.transform = "scale(1,2)";
// });

// Box.addEventListener("mouseout",()=>{
//     header.style.backgroundColor = "";
//     header.style.color = "";
//     Btn.style.transform = "";
//     // Btn.style.filter = "";

// });

// Box.addEventListener("dblclick",() =>{
//     document.body.style.backgroundColor = "black";
// });

// Box.addEventListener("click",() =>{
//     document.body.style.backgroundColor = "#fff";
// });

// window.addEventListener("contextmenu",(e) =>{
//     e.preventDefault();
//     Btn.style.filter = "blur(10px)";
// });



//math object in javascript
//to generate otp code 

// const result = Math.round(4.5);
// document.write(result);
// console.log(result);

// const result = Math.floor(4.5);
// document.write(result);
// console.log(result);

// const result = Math.ceil(4.1);
// document.write(result);
// console.log(result);

// const result = Math.trunc(4.1);
// document.write(result);
// console.log(result);

// const result = Math.pow(2,3);
// document.write(result);
// console.log(result);

// const result = Math.sqrt(25);
// document.write(result);
// console.log(result);

// const result = Math.random();
// document.write(result);
// console.log(result);

//convert num into degree 
// const result = Math.tan((45*Math.PI)/180);
// document.write(result);
// console.log(result);

// const result = Math.sin((90*Math.PI)/180);
// document.write(result);
// console.log(result);

// const result = Math.log2(8);
// document.write(result);
// console.log(result);

// const result = Math.log10(100);
// document.write(result);
// console.log(result);


// const result = new Date();
// console.log(result);
// document.write(result);

// const result = new Date();
// console.log(result.getDay());
// document.write(result.getDay());

// const result = new Date();
// console.log(result.getFullYear());
// document.write(result.getFullYear());

//local storage
// let key = prompt("enter key you want to set");
// let value = prompt("enter value you want to set");

// localStorage.setItem(key,value)
// console.log('the value at ${key} is $(localStorage.getItem(key)}')

const Input = document.querySelector("input");
const AddBtn = document.querySelector("#add");
const BtnLogout = document.querySelector("#clear");

const AddWebstorage = () => {
    localStorage.setItem("key",JSON.stringify(
        {
            name:"Ram",
            age:23,
            gender:"Male", 
            isMarried: false,
          })
    ); 
};
AddBtn.addEventListener("click",AddWebstorage);

BtnLogout.addEventListener("click",() => {
    localStorage.clear();
});
if(localStorage.getItem("key")){
    console.log(JSON.parse(localStorage.getItem("key")));  
}








