$(function () {
    var tmp0 = "";
    $('article section').each(function () {
        $(this).find('img, p').addClass('hide');
    });
    /* Test 1
    $('article section').hover(function () {
        $(this).find('img, p').removeClass('hide');
        tmp = $(this).attr('class');
        $(this).removeAttr('class').attr('class', 'col-12');
    }, function () {
        $(this).find('img, p').addClass('hide');
        $(this).removeAttr('class').attr('class', tmp);
    })
    */
    /* Test 2
    $('article section').click(function () {
        if ($(this).attr('id') != 'clicked') {
            $(this).find('img, p').removeClass('hide');
            tmp = $(this).attr('class');
            $(this).removeAttr('class').attr('class', 'col-12').attr('id', 'clicked');
        } else {
            $(this).find('img, p').addClass('hide');
            $(this).removeAttr('class').attr('class', tmp).removeAttr('id');
        }
    });
    */

    // Test 3
    $('article section').click(function () {
        switch ($(this).attr('id')) {
            case 'clone':
                break;
            case 'clicked':
                break;
            default:
                tmp0 = $(this).attr('class');
                $('#clone').remove();
                $('#clicked').find('h3').removeClass('hide').end().removeAttr('id');
                $(this).attr('id', 'clicked');
                $(this).clone().removeAttr('class').addClass('col-12').attr('id','clone').find('img, p').removeClass('hide').end().insertBefore('article:first');
                $(this).find('h3').addClass('hide');
                $('html, body').scrollTop(0);
                break;
        }
    })
});