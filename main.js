console.log("Up and running!");
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var checkForMatch = function(){
     if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You Found A Match!");
        }
        else {
            console.log('Try Again');
        }
}

var flipCard = function (cardId) {
    console.log("User flipped" + cards[cardId])
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
      checkForMatch() 
    }
}


flipCard(0);
flipCard(2);