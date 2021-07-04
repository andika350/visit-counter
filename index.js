let countI = document.getElementById("count-i");

let count = 0;

function increment() {
    count += 1;
    countI.textContent = count;
}

let saved = document.getElementById("text");

function save() {
    if (count != 0) {
    let entered = count + " - ";
    saved.textContent += entered;
    count=0;
    countI.textContent=0;
    } else {
        null;
    }
    
}

function reset() {
    count=0;
    countI.textContent=0;
    saved.textContent="PREVIOUS VISITOR : ";
}

let totalSum = document.getElementById("sum");


function sum() {
    let total = 0;
    total = total + count;
    console.log(total)
    totalSum.textContent = total;
}

