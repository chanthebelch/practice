$(document).ready(function() {
    var suits = ["diamond", "club", "heart", "spade"];
    var layouts = ["layoutA", "layoutB", "layout1", "layout2"]
    var cards = [["ace", ["layoutA", "layout1"], [0,0,0,0,0],[0,0,3,0,0]],
                 ["two", ["layoutA", "layout1"], [0,0,0,0,0],[1,0,0,0,5]],
                 ["three", ["layoutA", "layoutA"], [0,0,0,0,0],[1,0,3,0,5]],
                 ["four", ["layoutA", "layout1"], [1,0,0,0,5],[0,0,0,0,0]],
                 ["five", ["layoutA", "layout1"], [1,0,0,0,5],[0,0,3,0,0]],
                 ["six", ["layoutA", "layoutA"], [1,0,3,0,5],[0,0,0,0,0]],
                 ["seven", ["layoutA", "layout1"], [1,0,3,0,5],[0,2,0,0,0]],
                 ["eight", ["layoutA", "layout2"], [1,0,3,0,5],[0,2,0,4,0]],
                 ["nine", ["layoutB", "layout1"], [1,2,3,4],[0,0,3,0,0]],
                 ["ten", ["layoutB", "layout2"], [1,2,3,4],[0,2,0,4,0]],
                 ["jack"], ["queen"], ["king"]];
    
    function cardGenerator() {
        var suitsIndex = Math.floor(Math.random()*4);
        var cardsIndex = Math.floor(Math.random()*13);
        var card = [suits[suitsIndex],cards[cardsIndex][0]];
        
        // remove a old suit
        for (var i = 0; i < suits.length; i++) {
            $(this).removeClass(suits[i]);
        }
        
        // remove a old name
        for (var i = 0; i < cards.length; i++) {
            $(this).removeClass(cards[i][0]);
        }
        
        // remove a old layout style
        for (var i = 0; i < layouts.length; i++) {
            $(this).find('.edge').removeClass(layouts[i]);
            $(this).find('.center').removeClass(layouts[i]);
        }
        
        // add a new suit and a new name
        $(this).addClass(card[0]);
        $(this).addClass(card[1]);
        
        // add a layout style
        if (cardsIndex < 10) {
            var edgeLayout = cards[cardsIndex][1][0];
            var centerLayout = cards[cardsIndex][1][1];
            $(this).find('.edge').addClass(edgeLayout);
            $(this).find('.center').addClass(centerLayout);
        }
        // fill suit contents
        if (cardsIndex < 10) {
            var edgeContents = cards[cardsIndex][2];
            var centerContens = cards[cardsIndex][3];
            
            $('.middle div').removeClass('v');
            for (var i = 0; i < edgeContents.length; i++) {
                if (edgeContents[i]) {
                    $('.edge>div:nth-child(' + edgeContents[i] + ')').addClass('v');
                }
            }
            for (var i = 0; i < centerContens.length; i++) {
                if (centerContens[i]) {
                    $('.center>div:nth-child(' + centerContens[i] + ')').addClass('v');
                }
            }
        }
        else {
            $('.middle div').removeClass('v');
        }
        
    }
    
    $('.card').click(cardGenerator);
});