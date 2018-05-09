$(function () {
    // script hier
    $('table').first().addClass('table-hover');
    $('table tr').filter(':eq(3)').addClass('text-danger');
    $('table tr:nth-child(8)').addClass('text-danger');
});