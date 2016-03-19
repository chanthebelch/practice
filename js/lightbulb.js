$(document).ready(function() {
    
    var binary = $('#binary-number>div>p');
    var total = 0;
    
    binary.click(function() {
        var m = $(this).attr('m');
        
        if ($(this).text() == 0) {
            $(this).text("1");
            $(this).next().css('background', 'yellow');
            total += m * 1;
        }
        else {
            $(this).text("0");
            $(this).next().css('background', 'white');
            total -= m * 1;
        }
        
        $('#displayer>input').val(total);
    });
});