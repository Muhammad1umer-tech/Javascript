//javascipt is camel case
let count_ele =  document.getElementById("count-el");
let btn = document.getElementById("increment-btn");
let SaveBtn = document.getElementById("save-btn");

    let count = 0;
    
function incrementlap() {
    count = count+1;
    count_ele.innerHTML = count;
}