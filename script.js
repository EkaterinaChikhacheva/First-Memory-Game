const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple", 
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
// //////////////let openedCards = [];

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // let openedCards = []
    // openedCards = openedCards.push(color);
    // console.log(openedCards)
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attributes for the value we are looping over
    newDiv.classList.add(color);
    // newDiv.classList.toggle('open')
    // newDiv.classList.toggle('show')
    // newDiv.classList.toggle('disabled')
  
    
    
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  if(noClicking) return; //WHAT DOES IT RETURN? TRUE OR FALSE?
  if (event.target.classList.contains('flipped')) return; //SAME QUESTION. AND HOW CAN ANYTHING CONTAIN 'FLIPPED' IF WE NEVER MENTIONED IT IN OR CODE BEFORE?

  let currentCard = event.target;
currentCard.style.backgroundColor = currentCard.classList[0] //SO... WHAT DO WE ACCES HERE?

if (!card1 || !card2) {
  currentCard.classList.add('flipped');
  card1 = card1 || currentCard;
  card2 = currentCard === card1 ? null : currentCard; //DOES IT MEAN THAT WE DO NOT LET THE SECOND CARD TO BE DECLARED IF IT'S THE SAME CARD BEING CLICKED?
}
if (card1 && card2) { //DOES IT CHECK IF THEIR VALUES ARE NOT NULL OR UNDEFINED?
  noClicking = true;
  //debugger
  let gif1 = card1.className; //DID WE JUST GIVE CARD1 A CLASS OF GIF1?
  let gif2 = card2.className;

  if ( gif1 === gif2 ) {
    cardsFlipped += 2; //WE NEVER DECLARED THAT
    card1.removeEventListener('click', handleCardClick);
    card2.removeEventListener('click', handleCardClick);
    card1 = null;
    card2 = null;
    noClicking = false
  } else {
    setTimeout(function() { //I DON'T QUITE UNDERSTAND WHAT THIS ESLE STATEMENT DOES/
      card1.style.backgroundColor = '';
      card2.style.backgroundColor = '';
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1=null;
      card2=null;
      noClicking = false;
    }, 1000);
  }
}
if (cardsFlipped === COLORS.length) alert ('game over!')
  //   countClicks++
//   // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
//   setTimeout(function(){
//     if (countClicks<=2) {
//  event.target.classList.add('clicked')
//  // }
//  // if (event.target === document.querySelector('.red clicked') && event.target === document.querySelector('.red clicked')) {
//    // event.target.classList.add('match')
//    countClicks= 0;
//   }}, 1000)
// cardOpen()
// matched()
// unmatched()
// disable()
}
//add opened cards to OpenedCards list and check if cards are match or not
// function cardOpen() {
//   openedCards.push(color);
// var len = openedCards.length;
// if (len === 2) {
//   moveCounter();
//       if (openedCards[0].type === openedCards[1].type){
//           matched();
//   } else {
//             unmatched();
//           }
//       }
//   };

  //for when cards match
//   function matched(){
//     openedCards[0].classList.add('match');
//     openedCards[1].classList.add('match');
//     openedCards[0].classList.remove('show', 'open');
//     openedCards[1].classList.remove('show', 'open');
//     openedCards = [];
//   }

//   //for when cards don't match
//   function unmatched(){
// openedCards[0].classList.add('unmatched');
// openedCards[1].classList.add('unmatched');
// disable();
// setTimeout(function(){
//   openedCards[0].classList.remove('show','open','unmatched');
//   openedCards[1].classList.remove('show','open','unmatched');
//   enable();
//   openedCards = [];
// }, 1000);
//   }

//disable cards temporarily
// function disable(){
//   Array.prototype.filter.call(COLORS, function(color){
//     color.classList.remove('disabled');
//     for(var i = 0; i< matchedCard.length; i++){
//       matchedCard[i].classList.add('disabled');
//     }
//   });
// }
// when the DOM loads
createDivsForColors(shuffledColors);
