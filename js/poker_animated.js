var suits = [['diamond', '&#9830;', '\2666'],
             ['club', '&#9827;', '\2665'],
             ['heart', '&#9829;', '\2663'],
             ['spade', '&#9824;', '\2660']];
var cards = [['ace', 'A', [0, 0, 0, 0, 0], [0, 0, 3, 0, 0]],
            ['two', '2', [0, 0, 0, 0, 0], [1, 0, 0, 0, 5]],
            ['three', '3', [0, 0, 0, 0, 0], [1, 0, 3, 0, 5]],
            ['four', '4', [1, 0, 0, 0, 5], [0, 0, 0, 0, 0]],
            ['five', '5', [1, 0, 0, 0, 5], [0, 0, 3, 0, 0]],
            ['six', '6', [1, 0, 3, 0, 5], [0, 0, 0, 0, 0]],
            ['seven', '7', [1, 0, 3, 0, 5], [0, 2, 0, 0, 0]],
            ['eight', '8', [1, 0, 3, 0, 5], [0, 2, 0, 4, 0]],
            ['nine', '9', [1, 2, 3, 4], [0, 0, 3, 0, 0]],
            ['ten', '10', [1, 2, 3, 4], [0, 2, 0, 4, 0]],
            ['jack', 'J', '&#9820'],
            ['queen', 'Q', '&#9819'],
            ['king', 'K', '&#9818']];

function randomCard() {
    var nameIndex = Math.floor(Math.random() * 13);
    var suitIndex = Math.floor(Math.random() * 4);
    return [nameIndex, suitIndex];
}
function getAllCards() {
    var allCards = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 13; j++) {
            allCards.push([suits[i][0], cards[j][0]]);
        }
    }
    return allCards;
}
function displayACard(self, card) {
    var nameIndex = card[0];
    var suitIndex = card[1];
    var middle = self.find('.middle');
    var edge = self.find('.edge');
    var center = self.find('.center');
    var cells = self.find('.middle>div>div');
    // remove old name
    for (var i = 0; i < 13; i++) {
        self.removeClass(cards[i][0]);
    }
    // remove old suit
    for (var i = 0; i < 4; i++) {
        self.removeClass(suits[i][0]);
    }
    // remove span tag
    middle.find('span').remove();
    // add a new name
    self.addClass(cards[nameIndex][0]);
    // add new text for .name
    self.find('.name').text(cards[nameIndex][1]);
    // add a new suit
    self.addClass(suits[suitIndex][0]);
    if (nameIndex < 10) {
        // remove v class for .middle>div>div
        cells.removeClass('v');
        // add a v class for the cells
        var edgeContents = cards[nameIndex][2];
        var centerContents = cards[nameIndex][3];
        for (i = 0; i < edgeContents.length; i++) {
            edge.find('div:nth-child(' + edgeContents[i] + ')').addClass('v');
        }
        for (i = 0; i < centerContents.length; i++) {
            center.find('div:nth-child(' + centerContents[i] + ')').addClass('v');
        }
    }
    else {
        // add a new span child
        middle.append('<span>' + cards[nameIndex][2] + '</span>');
    }
}

$(document).ready(function() {
    var sample = $('#sample');
    var cardName = $('#card_name');
    var cardSuit = $('#card_suit');
    var reset = $('#card_reset');
    var enter = $('#enter');
    var desk = $('#desk');
    var passwordHolder = $('#password');
    var $passwords = [];
    //
    function changeAcard() {
        var self = $(this), card = randomCard();
        displayACard(self, card);
    }
    // initialize. add 4 cards to desk as passwords.
    for (var i = 0; i < 4; i++) {
        sample.clone(true).removeAttr('id').appendTo('#desk');
    }
    var deskCards = $('#desk .card');
    deskCards.on('click', changeAcard);
    deskCards.trigger('click').off();
    cardName.prop('disabled', false);
    cardSuit.prop('disabled', false);
    enter.prop('disabled', true);
    reset.prop('disabled', true);
    //
    sample.on('click', function() {
        var self = $(this), card = [];
        // slightly smaller than 13 and 4 respectively
        var nameIndex = Math.floor(cardName.val() / 7.7);
        var suitIndex = Math.floor(cardSuit.val() / 25.1);
        card = [nameIndex, suitIndex];
        // x, y goes into passwordHolder, while $x, $y goes into $passwords
        var x = cards[card[0]][1], y = suits[card[1]][1];
        var $x = cards[card[0]][0], $y = suits[card[1]][0];
        cardName.next().find('span').text(x);
        cardSuit.next().find('span').html(y);
        displayACard(self, card);
        var z = passwordHolder.text().length;
        if (z < 16) {
            passwordHolder.append('['+x+y+']');
            $passwords.push([$x, $y]);
            reset.prop('disabled', false);
        }
        if (z = 16) {
            enter.prop('disabled', false);
        }
    });
    //
    cardName.on('change', function() {
        var index = Math.floor($(this).val() / 7.7);
        var txt = cards[index][1];
        $(this).next().find('span').text(txt);
    });
    //
    cardSuit.on('change', function() {
        var index = Math.floor($(this).val() / 25.1);
        var txt = suits[index][1];
        // text() does NOT work, you HAVE TO use html()
        $(this).next().find('span').html(txt);
        sample.trigger('click');
    });
    //
    reset.on('click', function() {
        $('#control span').text('');
        cardName.val(50);
        cardSuit.val(50);
        enter.prop('disabled', true);
        reset.prop('disabled', true);
        $passwords = [];
    });
    enter.on('click', function() {
        var passwords  = [];
        var cardNodes = deskCards.toArray();
        for (var i = 0, j = cardNodes.length; i < j; i++) {
            var z = cardNodes[i].className.split(' ');
            passwords.push([z[1], z[2]]);
        }
        if (passwords.toString() !== $passwords.toString()) {
            $('#room').addClass('open');
            deskCards.addClass('rotateCard');
            desk.fadeTo(5000, 0, function() {
                var backwall = $('#backwall');
                for (var i = 0; i < 4; i++) {
                    backwall.append($('<div class="egg">'));
                }
                desk.parentsUntil(backwall).remove();
            });
            sample.off();
            $('input').prop('disabled', true);
        }
        else {
            deskCards.on('click', changeAcard);
            deskCards.trigger('click').off();
            alert('CORRECT password! try again!');
        }

    });
});
