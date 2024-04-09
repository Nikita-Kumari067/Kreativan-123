// console.log("hello")
// let a =8;
// let b=7;
// let sum=a+b;
// console.log("the sum of a and b is: "+sum);  //by using 2 forward slash we can do comment in js
// let pencilPrice=10;
// let eraser=5;
// let output=`The total price is: ${pencilPrice + eraser} Rupees`;
// console.log(output);

// let color="red";
// if(color==="red"){
//     console.log("stop")
// }
// if(color==="yellow"){
//     console.log("slow down")
// }
// if(color==="green"){
//     console.log("go")
// }

// //Pocorn price 
// let size = "M";
// if (size === "XL") {
//     console.log("Price is Rs. 250")
// }
// else if (size === "L") {
//     console.log("price is Rs. 200")
// }
// else if (size === "M") {
//     console.log("price is Rs. 100")
// }
// else if (size === "S") {
//     console.log("price is Rs. 50")
// }

// let color = "red";
// switch (color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("broken light");
// }


// let firstName=prompt("enter your first name");
// let lastName=prompt("enter your last name");
// let fullName=firstName+" "+lastName;
// console.log(fullName);



// let num=6;
// if(num%10==0){
//     console.log("good");
// }
//     else{
//         console.log("bad");
// }


// let name = prompt("enter your name:");
// let age = prompt("enter your age:");
// let sent = `${name}is ${age} years old.`;
// alert(sent);


// let phase = "Quarter 2";
// switch (phase) {
//     case "Quarter 1":
//         console.log("January, February, March");
//         break;
//     case "Quarter 2":
//         console.log("April, May, June");
//         break;
//     case "Quarter 3":
//         console.log("July, August, September");
//         break;
//     case "Quarter 4":
//         console.log("October, November, December")
//         break;
//         default:
//             console.log("Not a month")



// }

// let word="Animal";
// if((word[0]==="A" || word[0]==="a")&&(word.length>5)){
// console.log("Golden String");
// }
// else{
//     console.log("Not a Golden String");
// }


// let a=7;
// let b=9;
// let c=5;
// if(a>b){
//     if(a>c){
//         console.log(a,"is largest");
//     }
//     else{
//         console.log(c,"is largest")
//     }
// }
// else{
//     if(b>c){
//         console.log(b,"is largest");
//     }
//     else{
//         console.log(c, "is largest");
//     }
// }

// let game=[["X",null,"O"],[null,"X",null],["O",null,"X"]]
// console.log(game);


// let num=[7,9,0,-2];
// n=3;
// console.log(num.slice(0,n));
// let num1=[7,9,0,-2];
// n=3;
// console.log(num1.slice(num1.length-n));

// let string=prompt("enter your string");
// if(string.length==0){
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty")
// }

// let str=prompt("enter your string:");
// let idx=3;
// if(str[idx] ==str[idx].toLowerCase()){
//     console.log("character is lowercase");
// }
// else{
//     console.log('character is not lowercase');
// }


// const favMovie="Avatar";
// let guess=prompt("Enter your movie name:");
// while((favMovie!=guess)&&(guess!="quit")){
   
//     guess=prompt("wrong guess! Please try again");
// }

// if(guess==favMovie){
//     console.log("congrats!");
// }
// else{
//     console.log("you quit the game");
// }


// let todo=[];

// let req=prompt("please enter your request");



// while(true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("-----------");

//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);

//         }
//         console.log("----------------");
//     }
//         else if(req=="add"){
//             let task=prompt("please enter your task you want to add");
//             todo.push(task);
//             console.log("task added");

//         }
//         else if(req="delete"){
//             let idx=prompt("please enter the task index");
//             todo.splice(idx, 1);
//             console.log("task deleted");
//         }
//         else{
//             console.log("wrong request");
//         }
//         req=prompt("Please enter your request");
        
            


//         }



        // let arr=[1,2,3,4,5,6,2,3];
        // let num=2;
        // for(let i=0; i<arr.length;i++){
        //     if(arr[i]==num){
        //         arr.splice(i, 1);
        //     }
        // }
        // console.log(arr);



        // let number=287152;
        // let count=0;
        // While(number!==0){
        //     number=Math.floor(number/10);
        //     count++;

        // }


      //   let nums=287152;
      //   let sum=0;
      //   While(nums!== 0) {
      //      sum+=nums%10;
      //      nums=Math.floor(nums/10);

      //   }
      //   console.log(sum);


      //   let n=7;


      // const max=prompt("enter max number:");
      // const random=Math.floor(Math.random()*max)+1;

      // let guess=prompt("Guess the number");
      // while(true){
      //    if(guess=="quit"){
      //    console.log("user quit");
      //    break;
      //    }
      //    if(random==guess){
      //       console.log("you are correct")
      //       break;

      //    }
      //    else if(guess<random){
      //       guess=prompt("your guess was too small. please try again")
      //    }
      //    else{
      //       guess=prompt("your guess was too large.please try again");
      //    }
      // }



 const diceNum= Math.floor(Math.random()*6)+1;
console.log("the random number belongs to dice roll",diceNum);   




const car={
   name:"BMW",
   model:"BMWXM",
   color:"Mineral White Metallic"
};

let carName=car.name;
console.log(carName);





const Person={
   personname:"Nikita",
   personage:23,
   personcity:"Greater Noida"
};

Person.personcity="New York";
console.log(Person);

Person.country="United States";
console.log(Person);




        

       
       
       
       
       
       
   





