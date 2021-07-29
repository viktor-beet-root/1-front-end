import $ from 'jquery';

$('a[href^="#"').on('click', function () {

    let href = $(this).attr('href');
    let addr = $(href).offset().top;
    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
