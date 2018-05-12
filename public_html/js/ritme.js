$(window).resize($(function () {
    if ($(window).outerWidth() >= 576) {
        $('article section').each(function () {
            $(this).find('img, p').addClass('hide');
            $(this).css('cursor', 'pointer');
            $(this).addClass('clickable');
        });

        // Test 3
        $('article section').click(function () {
            switch ($(this).attr('id')) {
                case 'clone':
                    break;
                case 'clicked':
                    break;
                default:
                    $('#clone').remove();
                    $('#clicked').find('h3').removeClass('hide').end().removeAttr('id').css('cursor', 'pointer').addClass('clickable');
                    $(this).attr('id', 'clicked').removeClass('clickable').css('cursor', 'auto');
                    $(this).clone().removeAttr('class').addClass('col-12').attr('id', 'clone').find('img, p').removeClass('hide').end().insertBefore('article:first');
                    $(this).find('h3').addClass('hide');
                    $('html, body').scrollTop(0);
                    break;
            }
        });
    }
}));