$(document).ready(function() {
    var white = '<div class="white"></div>';
    var black = '<div class="black"></div>';
    
    $('#whitebowl').find('button').click(function() {
        console.log('white added');
        $(this).after(white);
        $('.white').draggable();
    });
    $('#blackbowl').find('button').click(function() {
        $(this).after(black);
        $('.black').draggable();
    });
});