import $ from 'jquery';
import 'slick-carousel';

const slider = $('.hero__slider');
slider.slick({
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    sliderToShow: 1,
    dots: true,
    appendDots: $('.hero__dots'),
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
})
