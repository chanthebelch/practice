$(document).ready(function() {
    var cardIds = range(0, 52);
    var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    
    // defiine a Pythonic range() function!
    function range(start, stop, step) {
        if (typeof(stop) == 'undefined') {
            // one param defined
            stop = start;
            start = 0;
        }
        if (typeof(step) == 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <=stop)) {
            return []
        }
        var result = [];
        for (var i = 0; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result
    };
    // generate a card randomly.
    function generateACard() {
        var id = Math.floor(Math.random() * 52);
        var index = Math.floor(id / 4);
        var newCard = '<p>' + values[index] + '</p>';
        
        return newCard
    };
    // display Cards
    function displayCards() {
        $('.cardContainer').each(function() {
            $(this).empty();
            $(this).append(generateACard());
            $(this).children('p').addClass('card');
            $(this).draggable({revert : false});
        });
    };
    // return to original status
    function initializeCards() {
        $('.cardContainer').each(function() {
            $(this).draggable({revert : true});
        });
    };
    
    $('#q').click(function() {
        displayCards();
    });
    $('#a').click(function() {
        initializeCards();
    });
});