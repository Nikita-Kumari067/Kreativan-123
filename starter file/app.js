// let smallImage=document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImage.length; i++){
//     console.dir(smallImage[i]);
// }

// let smallImage=document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImage.length; i++){
//     console.dir(smallImage[i].src);
// }

// let smallImage = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImage.length; i++) {
//     smallImage[i].src = "spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);

// }

// console.dir(document.querySelectorAll("div a"));

// let newP=document.createElement('p');
// console.dir(newP);
// newP.innerText="Hey I am red!";
// document.querySelector('body').append(newP);

// newP.classList.add("red");


// let head=document.createElement('h3');
// head.innerText="Hey I'm blue!";
// document.querySelector('body').append(head);
// head.classList.add("blue");





// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para=document.createElement("p");

// h1.innerText="I'm in a div";
// para.innerText="ME TOO!";

// div.append(h1);
// div.append(para);
// div.classList.add("box");
// document.querySelector('body').append(div);


//Create a new input and button element on the page using js only. set the text of button to click me

let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Click Me";
document.querySelector("body").append(button);
document.querySelector("body").append(input);


input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

let btn=document.querySelector("#btn");
btn.classList.add("btnstyle");

let heading=document.createElement("h1");
heading.innerText="<u>DOM Practice</u>";
document.querySelector("body").append(heading);
heading.classList.add("chng_color");

let para=document.createElement("p");
para.innerText="Apna College <b>Delta</b> Practice"
document.querySelector("body").append(para);




