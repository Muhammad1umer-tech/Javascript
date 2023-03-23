let h1_element= document.querySelector('h1');


function func(){
    h1_element.textContent="clicked";
    console.log("aa");

}
h1_element.addEventListener('click',func);