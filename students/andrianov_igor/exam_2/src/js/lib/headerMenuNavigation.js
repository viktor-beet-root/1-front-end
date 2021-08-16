import $ from 'jquery';
import headerSlider from './headerSlider';

//Open Burger Menu
setTimeout(function () {
    const menuList = document.querySelector(".menu__items"),
        menuBurgerBtn = document.querySelector(".menu__hidden_btn"),
        menuBurgerBtnSocial = document.querySelector(".social__items-js"),
        menuBurgerBtnAnimate = document.querySelector(".menu__hidden_btn-line");
    menuBurgerBtn.addEventListener("click", (function () {
        menuList.classList.toggle("menu-open");
        menuBurgerBtnSocial.classList.toggle("social__items-header-burger-btn-active");
        menuBurgerBtnAnimate.classList.toggle("active");
    }));
}, 0);

// Close Burger Menu after click on link
$(document).ready(function () {
    setTimeout(function () {
        $(".menu__item-link, .social__item-link-header-burger-btn").on('click', function () {
            $(".menu__items").removeClass('menu-open');
            $(".social__items-js").removeClass('social__items-header-burger-btn-active');
            $(".menu__hidden_btn-line").removeClass('active');
        });
    }, 0);
});

//Heder Menu Naviagation
function headerMenuNavigation() {
    const $header = $('#header');
    let isSticky = false;
    $(window).on('scroll', function () {
        setTimeout(function () {
            if ($(this).scrollTop() > 900 && !isSticky) {
                $header.addClass("header_fixed");
                isSticky = true;
            } else if ($(this).scrollTop() < 880 && isSticky) {
                $header.removeClass("header_fixed");
                isSticky = false;
            }
        }, 0);
    });
};

window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    setTimeout(function () {
        if (window.innerWidth > 200) {
            document.querySelectorAll('section').forEach((element, index) => {
                if (element.offsetTop - document.querySelector('nav').clientHeight <= scrollDistance) {
                    document.querySelectorAll('nav a').forEach((element) => {
                        if (element.classList.contains('menu__item-link_active')) {
                            element.classList.remove('menu__item-link_active');
                        }
                    });
                    document.querySelectorAll('nav li')[index].querySelector('a').classList.add('menu__item-link_active');
                }
            });
        }
    }, 0);
});

// Плавная прокрутка к якорю на странице
setTimeout(function () {
    $('ul a').on('click', smothScroll);
    $('.header__link').on('click', smothScroll);
    $('.footer__logo-link').on('click', smothScroll);
    $('.header-section__scroll-link').on('click', smothScroll);
}, 0);

const smothScroll = function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700, // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
    return false;
}

//Checkbox Burger menu (hides the menu when you click on it)
$(document).ready(function () {
    setTimeout(function () {
        $(".menu__item-link").on('click', function () {
            $("#menuBtn").prop("checked", !$("#menuBtn").prop("checked"));
        });
        $(".social__item-link-header-burger-btn").on('click', function () {
            $("#menuBtn").prop("checked", !$("#menuBtn").prop("checked"));
        });
    }, 0);
});

export default headerMenuNavigation;
