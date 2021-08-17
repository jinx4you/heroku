// variable declaration

var list = ['AC', '2C', '3C', '4C', '5C', '6C', '7C',
  '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AD',
  '2D', '3D', '4D', '5D', '6D', '7D', '8D',
  '9D', '10D', 'JD', 'QD', 'KD', 'AH', '2H',
  '3H', '4H', '5H', '6H', '7H', '8H', '9H',
  '10H', 'JH', 'QH', 'KH', 'AS', '2S', '3S',
  '4S', '5S', '6S', '7S', '8S', '9S', '10S',
  'JS', 'QS', 'KS'
];
var playerCards = [];
var flop = [];
var turn = [];
var river = [];

// function that gets called when the deal button is pressed from the hand.html page which will assign 2 random cards to both playes

function cardDistribute(numberOfPlayers) {
  for (var i = 0; i < (numberOfPlayers * 2); i++) {
    initialDeal();
    document.getElementsByClassName("dealCard")[i].src = "images/Deck/" + (playerCards[i]) + ".PNG";
  }
};

// function to generate random numbers which will move the identified record from list array to playerCard array


function initialDeal() {
  random = Math.floor(Math.random() * list.length);
  playerCards.push(list[random]);

  list = removeCard(list, list[random]);
};

// removes the list item from list array

function removeCard(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

// deals the flop on the flop button click and removes the dealt cards from list array

function dealFlop() {
  for (var i = 0; i < 3; i++) {
    random = Math.floor(Math.random() * list.length);
    flop.push(list[random]);
    document.getElementsByClassName("flopCard")[i].src = "images/Deck/" + (flop[i]) + ".PNG";
    list = removeCard(list, list[random]);
  }
};

// deals the turn on the turn button click and removes the dealt card from list array

function dealTurn() {
  random = Math.floor(Math.random() * list.length);
  turn.push(list[random]);
  document.getElementsByClassName("turnCard")[0].src = "images/Deck/" + (turn[0]) + ".PNG";
  list = removeCard(list, list[random]);
};


// deals the river on the river button click and removes the dealt card from list array

function dealRiver() {
  random = Math.floor(Math.random() * list.length);
  river.push(list[random]);
  document.getElementsByClassName("riverCard")[0].src = "images/Deck/" + (river[0]) + ".PNG";
  list = removeCard(list, list[random]);
};

// ---club creation and user validation----
