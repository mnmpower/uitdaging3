$(function() {
    $('article section div').each(function () {
        $(this).find('h3').css('text-align', 'left').addClass('col-8');
        $(this).find('img').css('float', 'right').wrap('<div class="col-4"></div>');
        $(this).find('p').addClass('col-12')
    })
});