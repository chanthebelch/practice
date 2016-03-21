/**
 * Created by Michael on 3/21/2016.
 */
var suits = ['diamond', 'club', 'heart', 'spade'];
var cards = [['ace', [0,0,0,0,0], [0,0,3,0,0]],
    ['two', [0,0,0,0,0], [1,0,0,0,5]],
    ['three', [0,0,0,0,0], [1,0,3,0,5]],
    ['four', [1,0,0,0,5], [0,0,0,0,0]],
    ['five', [1,0,0,0,5], [0,0,3,0,0]],
    ['six', [1,0,3,0,5], [0,0,0,0,0]],
    ['seven', [1,0,3,0,5], [0,2,0,0,0]],
    ['eight', [1,0,3,0,5], [0,2,0,4,0]],
    ['nine', [1,2,3,4], [0,0,3,0,0]],
    ['ten', [1,2,3,4], [0,2,0,4,0]],
    ['jack', '&#9820'],
    ['queen', '&#9819'],
    ['king', '&#9818']];

//function initializeACard() {
//    var suitIndex = Math.floor(Math.random()*4);
//    var cardIndex = Math.floor(Math.random()*13);
//    var card = [suitIndex, cardIndex];
//
//    return card;
//}

function displayACard() {
    var suitIndex = Math.floor(Math.random()*4);
    var cardIndex = Math.floor(Math.random()*13);
    // remove a old suit class for .suit
    for (var i = 0; i < suits.length; i++) {
        $(this).removeClass(suits[i]);
    }
    // remove a old value class for .value
    for (i = 0; i < cards.length; i++) {
        $(this).removeClass(cards[i][0]);
    }

    // add a new suit class for .suit and a new value class for .value
    $(this).addClass(suits[suitIndex]);
    $(this).addClass(cards[cardIndex][0]);

    // change the value for the card
    //$(this).find('.value').text(cards[cardIndex][1]);

    // change the middle part of the card
    var middle = $(this).find('.middle');
    var edge = $(this).find('.edge');
    var center = $(this).find('.center');
    var cells = $(this).find('.middle>div>div');

    if (cardIndex < 10) {

        // remove span tag from .middle
        middle.find('span').remove();

        // remove v class for .middle>div>div
        cells.removeClass('v');

        // add a v class for the cells
        var edgeContents = cards[cardIndex][1];
        var centerContents = cards[cardIndex][2];
        for (i = 0; i < edgeContents.length; i++) {
            edge.find('div:nth-child(' + edgeContents[i] + ')').addClass('v');
        }
        for (i = 0; i < centerContents.length; i++) {
            center.find('div:nth-child(' + centerContents[i] + ')').addClass('v');
        }
    }
    else {
        // remove old span child
        middle.find('span').remove();
        // add a new span child
        middle.append('<span>' + cards[cardIndex][1] + '</span>');
    }
}

$(document).ready(function() {
    // generate 3 more copied of sample card (exponentially!)
    for (var i = 0; i < 2; i++) {
        var newCard = $('.card').clone();
        $('.desk').append(newCard);
    }
    // change a card when click on it
    $('.card').click(displayACard);
});
