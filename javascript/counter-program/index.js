// counter program

const decreaseBtn = document.getElementById("js-btn-decrease");
const resetBtn = document.getElementById("js-btn-reset");
const increaseBtn = document.getElementById("js-btn-increase");
const countLable = document.getElementById("js-count-label")

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

