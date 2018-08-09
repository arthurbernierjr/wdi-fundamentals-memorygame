console.log("Up and running!");



var cards = ['queen','queen','king','king' ];
var cardsInPlay=[];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
//cardsInPlay.push(cardThree);
//cardsInPlay.push(cardFour);

alert(cardsInPlay);
    
    
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length===2)
{
    if (cardsInPlay[0]===cardsInPlay[1])
    {
        alert("You Found A Match!");
    }
    else
        {
        alert('Try Again');
        }
}else{
    alert('You made a mistake bruh');
}