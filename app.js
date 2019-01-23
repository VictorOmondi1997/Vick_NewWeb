// BlackJack Game Created By Victor Omondi
let suits = ["Hearts", 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 
            'Ten', 'Nine', 'Eight', 'Seven', 'Six', 
            'Five', 'Four', 'Three', 'Two']


function createDeck(){
    let deck = [];
    for(let suitIdx = 0; suitIdx<suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx<values.length; valueIdx++){
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deck;
}

function getNextCard(){
    return deck.shift();
}
let deck = createDeck();

for(let i = 0; i < deck.length; i++){
    console.log(deck[i]);
}
let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);
console.log("This Game was Built by Victor Omondi"); //Victor Omondi


//Learning if and if ... Else statement in javascript
let score = 1000;

if (score > 1000){
    score = score + 100
}
else if (score === 1000){
    console.log("Almost")
}
else {
    console.log("Score is:", score);
}

// Learning Switch and Case in JavaScript
let state = 'TX';

switch(state){
    case 'NY':
        console.log('New York');
        break;
    case 'TX':
        console.log('Texas');
        break;
    default:
        console.log("Not found");
        break;
}

// Learning For Loop in JavaScript
// Creating a Loop statement to output 1 to 4 5 exclusive
for(let i = 0; i < 5; i++){
    console.log(i);
}

// Learning While Loop in JavaScript
let count = 1;

while(count<10){
    console.log(count);
    count++;
}

//Learning Functions
function myFunction(){
    console.log('in myFunction');
}
myFunction();

// Values can be passed in a function
function myFunction2(message){
    console.log(message + 'World');
}
myFunction2('Hello');








