// import $ from 'jquery';
import 'lightbox2';
import seeMore from './lib/seeMore';
import sliderTitle from './lib/slider';
import btnMenu from './lib/btnMenu';

// const $menu = $("#menu");

//     $(window).scroll(function(){
//         if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
//             $menu.fadeOut('fast',function(){
//                 $(this).removeClass("default")
//                        .addClass("fixed transbg")
//                        .fadeIn('fast');
//             });
//         } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
//             $menu.fadeOut('fast',function(){
//                 $(this).removeClass("fixed transbg")
//                        .addClass("default")
//                        .fadeIn('fast');
//             });
//         }
//     });


// плавна прокрутка
document.querySelectorAll('.menu__item-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 50;

        const elemPosition = scrollTarget.getBoundingClientRect().top;

        const offsetPosition = elemPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

// слайдер новини

$(document).ready(function(){
    $('.news__news-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="priw_arrow"><i class="fas fa-angle-left"><</i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right">></i></span>',
        dots: true
    });
})


sliderTitle();
seeMore();
btnMenu();
