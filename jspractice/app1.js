// // print a poem
// function printPoem() {
//     console.log("Twinkle twinkle little star");
//     console.log("How I wonder what you are");
//     console.log("up above the world so high");
//     console.log("like a diamond in the sky");



// }
// printPoem();

// // create  a function to roll a dice & always display the value of the dice(1 to6 )

// function rollDice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }


// ///create a function that gic=ves us the average of 3 numbers

// function calcAvg(num1, num2, num3){
//     let avgsum=(num1+num2+num3)/3;
//     console.log(avgsum);

// }

// calcAvg(1,2,3);
// calcAvg(3,7,8);
// calcAvg(10,23,45);


// //crete a function that prints the multiplication table of a number

// function table(num){
// for(let i=num; i<=num*10; i=i+num){
//     console.log(i)
// }
// }

// table(9);


//create a function that returns the sum from 1 to n


// function sumFun(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;

// }

// let s=sumFun(8);
// console.log(s);

//performing settimeout function

// setTimeout(()=>{
//    console.log("how are you??");
// },4000);
// console.log("hello");

// write a function that prints "Hello world" 5 times at interval of 2sec eachh


// let id = setInterval(()=>{
//    console.log("hello world");
// }, 2000)

// setTimeout(()=>{
//    clearInterval(id);
//    console.log("clear interval ran");
// }, 10000);


// //write an arrow function named arrayAverage that accepts an array of numbers and returns the average of thoge number.

// const arrayAverage=(arr)=>{
//    let total=0;
//    for(let number of arr){
//       total+=number;
//    }
//    return total/arr.length;

// };
// let arr=[1,2,3,4,5];
// console.log(arrayAverage(arr));

// //return whether a num is odd or even
// num=8;
// let isEven=(num)=>num%2==0;


let num=[1,2,3,4,5];
let double=num.map((el)=>{
   return el*el;
});

let value=double;
console.log(value);

