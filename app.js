

//add an element

// create the element

let anker_ele = document.createElement('a');

// get accs the parent element that should hold the new element
let parent_ = document.querySelector('p');
// insert the new elee=ment into the parent element content


anker_ele.textContent="  this leads to google";
anker_ele.href="www.google.com";
 parent_.append(anker_ele); //or append child  or inserbefore  will be inserted after all the
//  inserted element in the parent


// remove

let h1_element = document.querySelector('h1');
// h1_element.remove();
// h1_element.removeChild();  for old browsers



//moving

// document.body.append(h1_element);

h1_element.parentElement.append(h1_element);


//innerHTML

let para = document.body.children[1];


// document.body.children[1].textContent =" buba babay <strong> hahah </strong>";

// document.body.children[1].innerHTML =" buba babay <strong> hahah </strong>";