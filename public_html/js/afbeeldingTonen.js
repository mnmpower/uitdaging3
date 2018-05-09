$(function () {
    $('i').not(':first-of-type').addClass('hide');
});

$(function () {
    // script hier
    $('i:nth-of-type(2)').click(function () {
        $(this).addClass('hide');
        $('img').removeClass('hide');
        $('#gif').addClass('gif');
        $('i:first-of-type').removeClass('hide');
    })
});

$(function () {
    $('i:first-of-type').click(function () {
        $(this).addClass('hide');
        $('img').addClass('hide');
        $('#gif').removeClass('gif');
        $('i:nth-of-type(2)').removeClass('hide');
    })
});