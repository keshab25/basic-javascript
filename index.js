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

// const Input = document.querySelector("input");
// const AddBtn = document.querySelector("#add");
// const BtnLogout = document.querySelector("#clear");

// const AddWebstorage = () => {
//     localStorage.setItem("key",JSON.stringify(
//         {
//             name:"Ram",
//             age:23,
//             gender:"Male", 
//             isMarried: false,
//           })
//     ); 
// };
// AddBtn.addEventListener("click",AddWebstorage);

// BtnLogout.addEventListener("click",() => {
//     localStorage.clear();
// });
// if(localStorage.getItem("key")){
//     console.log(JSON.parse(localStorage.getItem("key")));  
// }


//oop
//constucture fun -yeuta fun bata multiple object at same time 
//object vitra value - object object vitra fun vaye method
// function person(name,age){
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log(
//             'Hello everyone my name is :${this.name}.and my age is:${this.age}'       
//              );
//     };
// }
// const person1 = new person("Ram",23);
// const person2 = new person("hari",25);
// const person3 = new person("shyam",26);


// console.log(person1,person2,person3);
// person1.greet();



// function BankAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     this.deposit = function(amount){
//         this.balance += amount;
//     };
//     this.withdraw = function(amount){
//         this.balance -= amount;
//     };
// }

// // const ramAccount = new BankAccount("Ram",5000);
// // const shyamAccount = new BankAccount("shyam",10000);

// // shyamAccount.deposit(3000);
// // shyamAccount.withdraw(3000);

// // console.log(ramAccount ,shyamAccount);

// const addForm = document.querySelector("#addAccount");
// const customerName = document.querySelector("#customerName");
// const balance = do+cument.querySelector("#balance");

// const depositForm = document.querySelector("#depositAccount");
// const accountNumber = document.querySelector("#accountNumber");
// const amount = document.querySelector("#amount");



// let accounts = [];
// addForm.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     const newAccount = new BankAccount(customerName.Value, +balance.value)
//     accounts.push(newAccount);
//     console.log(accounts);
// });

// depositForm.addEventListener("submit",(e) => {
//     e.preventDefault();

//     const Account = accounts.find(
//         (value,index) => value.accountNumber === +accountNumber.value
//     );
//     if (!Account) return alert("account not found!");
//     Account.deposit(+amount.value);
//     console.log(accounts);
// });


// function BankAccount(customerName,balance=0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
 
//     }

//     BankAccount.prototype.deposit = function(amount){
//         this.balance += amount;
//      };
//      BankAccount.prototype.withdraw = function(amount){
//         this.balance -= amount;
//      };


//      const ramAccount = new BankAccount("Ram",4000);
//      ramAccount.deposit(3000);
//      console.log(ramAccount);


//class
// class BankAccount{
//     constructor(custmerName,balance=0){
//         this.customerName = custmerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }

//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }

// }

// class SavingAccount extends BankAccount{
//     constructor(custmerName, balance=0){
//         super(custmerName,balance);
//     }
//     transactionLimit = 50000;

//     takePersonLoan(amount){
//         console.log('Taking personal loanis: ${amount}');
//     }
// }

// // ramAccount.deposit(2000);
// // ramAccount.takePersonLoan(40000);
// // // const sitaAccount = new SavingAccount("Sita",4000);

// // // sitaAccount.deposit(3000);
// // console.log(ramAccount);
// // // console.log(sitaAccount);



// class CurrentAccount extends BankAccount{
//     constructor(custmerName, balance=0){
//         super(custmerName,balance);
//     }
//     transactionLimit = 100000;

    
// }

// const ramAccount = new CurrentAccount("Ram",4000);
// const shyamAccount = new SavingAccount("Shyam",5000);


// console.log(ramAccount);
// console.log(shyamAccount);


// class BankAccount{
//     customerName;
//     accountNumber;
//     #balance = 0;
//     constructor(customerName = customerName, balance=0){
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.#balance = balance;
//     }
//     deposit(amount){
//         this.#balance += amount;
//     }

//     withdraw(amount){
//         this.#balance -= amount;
//     }
//     setBalance(newbalance){
//         if(isNaN(newbalance)){
//             throw new Error("Number must be valid!")
//         }
//         this.#balance = newbalance;
//     }

//     getBalance(){
//         return this.#balance
//     }
    
// }


// class CurrentAccount extends BankAccount {
//     transactionLimit =  50000;
//     constructor(customerName,balance=0){
//         super(customerName,balance);
//     }

//     #calculateInterest(amount) {
//         console.log(`calculating amount interest is : ${amount}`);

//         const interest = amount*0.05;
//         console.log(`calculating amount interest is : ${interest}`);
//     }


//     takeBusinessLoan(amount) {
//         this.#calculateInterest(amount);
//         console.log(`Taking business loan is : ${amount}`);
//     }
// }

// const ramAccount = new CurrentAccount("Ram",3000);
// // ramAccount.setBalance(9000);
// // console.log(ramAccount.getBalance());

// ramAccount.takeBusinessLoan(20000);
// console.log(ramAccount);


//static property and method

// class Auth{
//     static dbEmail = "email@gmail.com";
//     static dbPassword = "password";
//     static dbToken = "sjdbfkdf";
// }

// console.log(Auth.dbEmail);


// class person {
//     constructor(name,age,income){
//         this.name = name;
//         this.age = age;
//         this.income = income;
//     }

//     static compareAge(a,b){
//         return a.age - b.age;
//     }

//     static compareIncome(a,b){
//         return a.income - b.income;
//     }

//     static compareFilter(value,index){
//         return value.income>10000;
//     }


// }

// const user1 = new person("Ram",58,4000);
// const user2 = new person("Sita",20,50000);
// const user3 = new person("Shyam",38,6000);

// const users = [user1,user2,user3];

// const resultSortByAge = users.sort(person.compareAge);
// console.log(resultSortByAge);

// const resultFilter = users.filter(person.compareFilter);
// console.log(resultFilter);

// const result = users.sort((a,b) => a.age - b.age);
// const result = users.sort(person.compareByAge);
// console.log(result);

// const result = users.filter(person.compareByFilter);
// const result = users.filter(person => person.compareByFilter());
// console.log(result);

// class Person {
//     constructor(name, age, income) {
//         this.name = name;
//         this.age = age;
//         this.income = income;
//     }

//     static compareAge(a, b) {
//         return a.age - b.age;
//     }

//     static compareIncome(a, b) {
//         return a.income - b.income;
//     }

//     static compareFilter(value, index) {
//         return value.income > 10000;
//     }
// }

// const user1 = new Person("Ram", 68, 4000);
// const user2 = new Person("Sita", 20, 8000);
// const user3 = new Person("Shyam", 48, 6000);

// const users = [user1, user2, user3];

// const result = users.sort(person => person.compareByAge);

// // const result = users.filter(person => Person.compareFilter);
// console.log(result);


// js is single thread synchronous - default behaviour of js

// function add(a,b,callBack){
//     const result = a+b;
//     callBack(result);
// }

// function displaySum(ans){
//     console.log(`The sum of two number is : ${ans}`);

// }

// const ans = add(4,8,displaySum);
// console.log(ans);


//synchronously
// let myArr = [7,8,3,4,9,2,1];
// function calculation(arr = [],cb){
//     let ans = [];
//     for(let i = 0; i<arr.length;i++){
//         ans.push(cb(arr[i]));
//     }
//     console.log(ans);
// }

// function multiply(a){
//     return a*10
// }
// function divide(a){
//     return a/10
// }

// calculation(myArr,multiply);
// calculation(myArr,divide);

// calculation(myArr,(a) => a*10);
// calculation(myArr,(a) => a/10);
// calculation(myArr,(a) => a+10);
// calculation(myArr,(a) => a-10);

// let myArr = [7,8,3,4,9,2,1];
// function calculation(arr = [],cb){
//     let ans = [];
//     for(let i = 0; i<arr.length;i++){
//         ans.push(cb(arr[i]));
//     }
//     console.log(ans);

// calculation(myArr,(a) => a*10);
// calculation(myArr,(a) => a/10);
// calculation(myArr,(a) => a+10);
// calculation(myArr,(a) => a-10);


//asynchronously

// let personList = [];
// const fetchedData = (callBack) =>{
//     setTimeout((callBack)=>{
//         personList.push(
//             {id: 1, name:"Ram", age:23},
//             {id: 2, name:"shyam", age:25},
//             {id: 3, name:"gita", age:30},
//             {id: 4, name:"Hari", age:60},
//         );
//         callBack();
//         console.log(personList);
//     },4000,
//     callBack
//     );
//     };
//     console.log(personList);

// // fetchedData();
// // console.log(personList);


// const displayNmae = ()=>{
//     setTimeout(() => {
//         for(let i = 0; i<personList.length;i++){
//             const p = document.createElement("p");
//             p.innerHTML = personList[i].name;
//             document.body.append(p);
//         }
//     },1000,
    
//     );
// };

// fetchedData(displayNmae);



//promices - is a object handle asynchronous task during api 

// const ans = new Promise((resolve,reject) => {
//     resolve("promice fulfilled");

// });
// ans.then((message)=> console.log(message));

// const ans = new Promise((resolve,reject) => {
//     let success = true;
//     if(success) resolve("promice fulfilled");
//     else reject("Internal server error");

// });
// ans
// .then((message)=> console.log(message))
// .Catch((err)=> console.log(err))
// .finally(()=> console.log("Both"));


// const arr = [];

// const fetchedData = ()=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             arr.push({name: "ram"});
//             if(arr.length > 0) resolve("Data fetched!");
//             else reject ("some technical error");
//         },4000);
//     });
// };

// fetchedData(arr)
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err));

// const URL = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1")

// const fetchedData = async()=>{
//    try {
//     const res =  await fetch(URL);
//    const data = await res.json();
// h1.innerHTML = data.fact;
//    } catch (error) {
//     console.log(error);
//    }
// };
// fetchedData();


// const fetchedData = ()=>{
   
//     fetch(URL).then((res) => res.json())
//     .then((data) => (h1.innerHTML = data.fact)).catch((err)=>console.log(err))
// };

// fetchedData();



// console.log(navigator);
// navigator.geolocation.getCurrentPosition((a) => console.log(a.coords))

// console.log(screen)

// console.log(history)
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.host);
// console.log(location.hostname);

// console.log(location.href);
// console.log(location.search);


// const obj = {
//    name : "John",
//    printName: function(){
//       console.log(this.name);
//    }
//    obj.printName();

//    const obj1 = {
//       name : "John",
//       .printName
//    }
   
// }


//normal fn -acess the argument
//arrow fn - can not access the the argument

//hoisting 

// function myFunc(){
//    console.log("Hello world")
// }



//project

const temperatureField = document.querySelector(".weather1")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const weatherField = document.querySelector(".weather3 span")
const form = document.querySelector("form")
const input = document.querySelector(".searchField")

let target = "kathmandu"
const fetchedData = async() =>{
   try {
      const res = await fetch(
         `https://api.weatherapi.com/v1/current.json?key=8074945cf25549a0a8492144231406&q=${target}`
         );
   
   
   const data = await res.json();
   console.log(data);
   
   //d structure concept
   const {current:{temp_c,condition:{icon,text}},location:{name,localtime}} = data;
   
   temperatureField.innerHTML = `${temp_c}&deg;c`;
   cityField.innerHTML = name;
   emojiField.src = icon;
   weatherField.innerHTML = text;
   
   const exactTime = localtime.split(" ")[1];
   const exactDate = localtime.split(" ")[0];
   console.log(exactTime);
   
   const currentDate = new Date();
   const currentDay = getTodaysDay(currentDate.getDay());
   
   dateField.innerText = `${exactTime} -${currentDay} ${exactDate}`;
   } catch (error) {
      alert("location not found");
   }
};

fetchedData(target);

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   if (input.value.trim() === "") {
      alert("field must be filled!");
      
   } else {
      target = input.value;
      fetchedData(target);
      
   }
});

function getTodaysDay(num){
   switch(num){
      case 0:
         return "Sunday";
      
      case 1:
         return "Monday";

         case 2:
         return "Tuesday";
      
      case 3:
         return "Wednesday";

         case 4:
         return "Thursday";

         case 5:
         return "Friday";
      
      case 6:
         return "Saturday";

         default:
            return "Invalid"


   }
}


