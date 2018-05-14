$(window).on('resize load', function () {
    console.warn("OK");
    if ($(window).outerWidth() >= 576) {
        $('article section').each(function () {
            // hide all but the title and make sections active
            $(this).find('img, p').addClass('hide');
            $(this).not('#clicked').css('cursor', 'pointer');
            $(this).not('#clicked').addClass('clickable');
        });

        // Test 3
        $('article section').click(function () {
            switch ($(this).attr('id')) {
                case 'clone':
                    break;
                case 'clicked':
                    break;
                default:
                    // reset previous actions
                    $('#clone').remove();
                    $('#clicked').find('h3').removeClass('hide').end().removeAttr('id').css('cursor', 'pointer').addClass('clickable');
                    // make the selected section (and clone) inactive
                    $(this).attr('id', 'clicked').removeClass('clickable').css('cursor', 'auto');
                    // clone the selected section
                    $(this).clone().removeAttr('class').addClass('col-12').attr('id', 'clone').find('img, p').removeClass('hide').end().insertBefore('article:first');
                    // make the selected section inactive part 2
                    $(this).find('h3').addClass('hide');
                    // scroll to the clone
                    $('html, body').scrollTop(0);
                    break;
            }
        });
    } else {
        $('article section').each(function () {
            // remove all actions from bigger window size
            $(this).find('img, p').removeClass('hide');
            $(this).css('cursor', 'auto');
            $(this).removeClass('clickable');
            $('#clone').remove();
            $('#clicked').find('h3').removeClass('hide').end().removeAttr('id').css('cursor', 'auto').removeClass('clickable');
        });
    }
});