/**
 * Created by Michael on 3/21/2016.
 */
var suits = ['diamond', 'club', 'heart', 'spade'];
var cards = [['ace', 'A', [0,0,0,0,0], [0,0,3,0,0]],
            ['two', '2', [0,0,0,0,0], [1,0,0,0,5]],
            ['three', '3', [0,0,0,0,0], [1,0,3,0,5]],
            ['four', '4', [1,0,0,0,5], [0,0,0,0,0]],
            ['five', '5', [1,0,0,0,5], [0,0,3,0,0]],
            ['six', '6', [1,0,3,0,5], [0,0,0,0,0]],
            ['seven', '7', [1,0,3,0,5], [0,2,0,0,0]],
            ['eight', '8', [1,0,3,0,5], [0,2,0,4,0]],
            ['nine', '9', [1,2,3,4], [0,0,3,0,0]],
            ['ten', '10', [1,2,3,4], [0,2,0,4,0]],
            ['jack', 'J', '&#9820'],
            ['queen', 'Q', '&#9819'],
            ['king', 'K', '&#9818']];

function inputACard() {}

function getACard() {
    var suitIndex = Math.floor(Math.random()*4);
    var cardIndex = Math.floor(Math.random()*13);

    return [suitIndex, cardIndex];
}

function getAllCards() {
    var allCards = [];
    for (var i in suits) {
        for (var j in cards) {
            allCards.push([suits[i], cards[j][0]]);
        }
    }
    return allCards;
}

function displayACard() {
    var suitIndex = Math.floor(Math.random()*4);
    var cardIndex = Math.floor(Math.random()*13);

    var middle = $(this).find('.middle');
    var edge = $(this).find('.edge');
    var center = $(this).find('.center');
    var cells = $(this).find('.middle>div>div');

    // remove a old suit class for .suit
    for (var i = 0; i < suits.length; i++) {
        $(this).removeClass(suits[i]);
    }
    // remove a old value class for .value
    for (i = 0; i < cards.length; i++) {
        $(this).removeClass(cards[i][0]);
    }

    // remove span tag from .middle
    middle.find('span').remove();

    // add a new suit class for .suit and a new value class for .value
    $(this).addClass(suits[suitIndex]);
    $(this).addClass(cards[cardIndex][0]);

    // change the value for the card
    $(this).find('.value').text(cards[cardIndex][1]);

    // change the middle part of the card
    if (cardIndex < 10) {
        // remove v class for .middle>div>div
        cells.removeClass('v');
        // add a v class for the cells
        var edgeContents = cards[cardIndex][2];
        var centerContents = cards[cardIndex][3];
        for (i = 0; i < edgeContents.length; i++) {
            edge.find('div:nth-child(' + edgeContents[i] + ')').addClass('v');
        }
        for (i = 0; i < centerContents.length; i++) {
            center.find('div:nth-child(' + centerContents[i] + ')').addClass('v');
        }
    }
    else {
        // add a new span child
        middle.append('<span>' + cards[cardIndex][2] + '</span>');
    }
}

function displayAllCards() {}

$(document).ready(function() {

    // generate 3 more copied of sample card
    for (var i = 0; i < 3; i++) {
        var newCard = $('.sample').clone();
        newCard.removeClass('sample').appendTo('.desk');
    }

    // change a card when click on it
    var currentCards = $('.card');
    currentCards.click(displayACard);
    // initialize! (virtually click all shown cards!)
    currentCards.each(function() {
        $(this).click();
    });
    // change current shown cards when click on question button
    $('#question').click(function() {
        currentCards.click();
    });
});
