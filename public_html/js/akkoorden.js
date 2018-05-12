$(function() {
    $('article section div').each(function () {
        $(this).find('h3').css('text-align', 'left').addClass('col-8').children().addClass('transition-ready');
        $(this).find('img').css('float', 'right').wrap('<div class="col-4"></div>');
        $(this).find('p').addClass('col-12');
    });

    $('#stop').click(function () {
        if($(this).prev().css('animation-play-state') == 'running') {
            $(this).prev().css('animation-play-state', 'paused');
            $(this).removeClass('far fa-pause-circle').addClass('far fa-play-circle');
        } else {
            $(this).prev().css('animation-play-state', 'running');
            $(this).removeClass('far fa-play-circle').addClass('far fa-pause-circle');
        }
    });
});