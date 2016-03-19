$(document).ready(function() {
    $('main, footer').toggle();
    $('#after').toggle();
    $('#tohide').click(function() {
        $('.jumbotron').slideToggle(500);
        $('main, footer').toggle();
    });
    $('.jumbotron').find('h1').hover(function() {
        $(this).text('the real animal farm');
        $('.jumbotron').css('background', 'red');
        $('#before').toggle();
        $('#after').toggle();
    }, function() {
        $(this).text('animal farm');
        $('.jumbotron').css('background', 'lightgreen');
        $('#before').toggle();
        $('#after').toggle();
    });
    $('.jumbotron').click(function() {
        alert('Try to find the secret of Animal Farm by moving your mouse around');
    });
    $('img').click(function() {
        alert('help us!');
    });
});