$(document).ready(function() {
    var egg = $('.egg'), eva = $('#eva');
    eva.hide();
    egg.on('click', function() {
        $(this).addClass('rotate').delay(2000).effect('explode').next().show();
    });

});
