


let input_ele= document.querySelector('input');


function func(event){
    console.log(input_ele.value);
    // console.log(event.target.value);
    // console.log(input_ele.dataset);
    console.dir(event);
}
input_ele.addEventListener('input',func);