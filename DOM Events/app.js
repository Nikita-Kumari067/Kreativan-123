// let btn = document.querySelectorAll("button");
// console.dir(btn);
// btn.onclick= function (){
//     console.log("button was clicked");
//     alert("button was clicked");
// };


// for(btns of btn ){
//     btns.addEventListener("click", sayHello);
//     btns.addEventListener("click", sayName);

// }
// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Apna college");
// }


// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;


//     let div=document.querySelector("div")
//     div.style.backgroundColor=randomColor;
//     console.log("Color updated!!!")
// });



// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
// let color=`rgb(${red}, ${green}, ${blue})`
// return color;
// }


// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("Para was clicked!")
// })
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box");
// });

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let p=document.querySelector("p");

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";


// }


// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

let inp=document.querySelector("input")
inp.addEventListener("keydown", function(event){
    // console.log(event.key);
    console.log("code =",event.code);
    // console.log("key was pressed");
    if(event.code=="ArrowUp"){
        console.log("character moves forward");
    }else if(event.code=="ArrowDown") {
        console.log("character moves backward");
    }
    else if(event.code=="ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code=="ArrowRight"){
        console.log("character moves Right");
    }


});




