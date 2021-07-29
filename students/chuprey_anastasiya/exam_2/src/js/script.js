import $ from 'jquery';
import 'slick-carousel';
import titleList from './lib/titleList';
import getTitleHtml from './lib/getTitleHtml';
window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0)
});

$(document).ready(function () {
    $('a[href*="#"]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});

const menuItems = document.querySelector('.menu__items');
const menuLinks = document.querySelectorAll('.menu__item-link');
const menuLength = menuLinks.length;
const current = document.getElementsByClassName('active');

for (let i = 0; i < menuLength; i++) {

    menuLinks[i].addEventListener('click', function () {

        current[0].className = current[0].className.replace('active');
        this.className += ' active';

        if (this.classList.contains('undefined')) {
            this.classList.remove('undefined');
        }
    })
}





const slider = $('.slider');
let titleItemHtml = '';
titleList.forEach((title) => {
    titleItemHtml += (getTitleHtml(title));
})

slider.append(titleItemHtml);
slider.slick({
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: 'linear',
    dotsClass: "vertical-dots",
})




const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.menu__items')
const logo = document.querySelector('.header__logo')
const social = document.querySelector('.social')
const menuItem = document.querySelectorAll('.menu__item');

let menuOpen = false;

burger.addEventListener('click', () => {
    if (!menuOpen) {
        burger.classList.add('open');
        menuOpen = true;
    } else {
        burger.classList.remove('open')
        menuOpen = false;
    }
});

const navSlide = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        social.classList.toggle('social-burger')

    })
}

navSlide();



$('.menu__item-link').click(function () {
    $('.menu__items').toggleClass('nav-active');
    $('.social').toggleClass('social-burger')
})



$(document).ready(function () {
    $('.news-items').slick({
        infinite: true,
        dots: true,
        speed: 1000,
        slidesToShow: 3,
    });
})
