// How to accept user input

// 1. EZ way = window prompt

// let username;

// username = window.prompt("What's your username??");

// console.log(username);


// -------------------------------------------
// 2. Professional way = html textbox

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `He lo ${username}`;
}


// --------------------------
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("circum").textContent = circumference;
}

