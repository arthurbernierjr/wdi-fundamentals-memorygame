console.log("Up and running!");
let score = 0;
var cards = [
    {
        rank: "queen"
        , suit: "hearts"
        , cardImage: "images/queen-of-hearts.png"
    }
    , {
        rank: "queen"
        , suit: "diamonds"
        , cardImage: "images/queen-of-diamonds.png"
    }
    , {
        rank: "king"
        , suit: "hearts"
        , cardImage: "images/king-of-hearts.png"
    }
    , {
        rank: "king"
        , suit: "diamonds"
        , cardImage: "images/king-of-diamonds.png"
    }
, ];
var cardsInPlay = [];
var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You Found A Match!");
        cardsInPlay=[];
        score++;
    }
    else {
        alert('Sorry, Try Again');
        recreateBoard();
        cardsInPlay=[];
        score= score-1;
    }
}
var flipCard = function () {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length >= 2) {
        checkForMatch();
        
    }
}
var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}
var recreateBoard = function () {
    //   if (cardsInPlay.length >= 2) {
    //        location.reload();
    //    }
    var myNode = document.getElementById("game-board");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    createBoard();
}

var myScore= function(){
    alert(score);
}

createBoard();