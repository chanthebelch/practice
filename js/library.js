var book1 = {number: 1001,
            cover: 'image/cover_css_zen_garden.jpg',
            buyer: '李晓波',
            buyerGender: '男',
            price: 35.6};

var book2 = {number: 1002,
            cover: 'image/cover_metamorphosis.jpg',
            buyer: '孙明明',
            buyerGender: '男',
            price: 37.8};

var book3 = {number: 1003,
            cover: 'image/cover_the_three_body_problem.jpg',
            buyer: '张文萱',
            buyerGender: '女',
            price: 45.6};

var books = [book1, book2, book3];

$(document).ready(function() {
    for (var i = 0; i < 5; i++) {
        var trNode = $('#library tr:nth-child(2)').clone();
        trNode.appendTo($('#library tbody'));
    }
    var tableRow = $('#library tr:not(:first-child)');
    var checkBoxes = tableRow.find('input');
//    for (var i = 0; i < tableRow.length; i++) {
//        for (var j = 0; j < books.length; j++) {
//            tableRow[i].find('td:nth-child(2)').text(books[j].number);
//            tableRow[i].find('td:nth-child(3)>img').attr(src, books[j].cover);
//            tableRow[i].find('td:nth-child(4)').text(books[j].buyer);
//            tableRow[i].find('td:nth-child(5)').text(books[j].buyerGender);
//            tableRow[i].find('td:nth-child(6)').text(books[j].price + '元');
//        }
//    }
    $('#chkAll').click(function(evt) {
        console.log(evt);
        if ($(this).prop('checked')) {
            checkBoxes.attr('checked', true);
        }
        else {
            checkBoxes.attr('checked', false);
        }
    });
    $('#chkRev').click(function() {
        if(checkBoxes.prop('checked')) {
            checkBoxes.attr('checked', false);
        }
        else {
            checkBoxes.attr('checked', true);
        }
    });
    // delete selected rows. hide them actually.
    $('#btnDel').click(function() {
        $('#library tr td input:checked').closest('tr').hide();
    });
    // show hidden rows
    $('#btnRst').click(function() {
        $('#library tr:hidden').show();
    });
});
