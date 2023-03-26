// map is object in javascript

let card = [];
let sum = 0;
let isalive = true;
let messageEl = document.getElementById('message-el');
let cardEl = document.getElementById('card-el');
let sumEl = document.getElementById('sum-el');
let gameIsStart = false;
// ace = 11, king = 10

let message = ""
let mes = cardEl.textContent;
let messum = sumEl.textContent;
function randomNumber() {
    let aa = Math.floor(Math.random() * 13)+1;
    if(aa > 10) {
     return 10;
    } else if(aa == 1){
     return 11;
    } else {
     return aa;
    }
 }

function startgame() {
    gameIsStart= true;
    isalive = true;
    let a = randomNumber();
    let b = randomNumber();
    sum = a+b;
    card = [];
    card.push(a);
    card.push(b);
    helper();
}

function helper() {

    if(sum < 21) {
        message = "Do you want another card"
    }
    else if(sum === 21){
        message = "you have won the blackjack"
        gameIsStart = false;
    }
    else {
        message = "you have lost the game"
        isalive = false;
    }
    if(isalive == false) {
        messageEl.textContent = message
        cardEl.textContent = mes;
        sumEl.textConten = ''
        sumEl.textContent = messum + ' ' + sum;
        sum = 0;
        card=[]
        gameIsStart = false;
        return
    }
    messageEl.textContent = message
    cardEl.textContent = ''
    let cardItem = '';
    for(let aa=0 ; aa<card.length ; aa++) {
        cardItem+=card[aa]+' ';
    }
    cardEl.textContent= mes + ' ' + cardItem;
    sumEl.textConten = ''
    sumEl.textContent = messum + ' ' + sum;

}
function newCard() {
    if(gameIsStart==false) {
        return;
    }
    let c = randomNumber();
    card.push(c);
    sum +=c;
    helper();
}

let airnib = {
    'title': 'live like an king',
    'price': 14.99,
    'isava': true,
};
console.log(airnib['price']);