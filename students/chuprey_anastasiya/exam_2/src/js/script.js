import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import googleMap from './lib/googleMap';
import seeMore from './lib/seeMore';
import stickyHeader from './lib/stickyHeader';
import horizontalSlider from './lib/horizontalSlider';
import verticalSlider from './lib/verticalSlider';


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
        social.classList.toggle('social-burger');


    })
}



$('.menu__item-link').click(function () {
    $('.menu__items').toggleClass('nav-active');

    burger.classList.remove('open');
    if ($(window).width() < 768) {
        $('.social').toggleClass('social-burger');
    }

    menuOpen = false;
})


navSlide();
seeMore();
googleMap();
horizontalSlider();
stickyHeader();
verticalSlider();
