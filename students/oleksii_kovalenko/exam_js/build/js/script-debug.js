"use strict";

var $slider = $('.header__slider').slick({
  arrows: false,
  dots: true,
  appendDots: $('.header__dots'),
  vertical: true,
  dotsClass: 'slick-dots',
  autoplay: true,
  autoplaySpeed: 4000
});
var header = document.getElementById('header');
var bgNum = [1, 2, 3, 4, 5];
$slider.on('afterChange', function (e, slick, index) {
  header.style.backgroundImage = 'url(./image/bg_footer' + bgNum[index] + '.jpg)';
});
var settings = {
  dots: true,
  dotsClass: 'slick-dots',
  appendDots: $('.news__slider-dots'),
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 1
    }
  }]
};
var $sliderNews = $('.news__list').slick(settings);
var arrowNewsSlider = $('.news__list button.slick-arrow');
var arrowNewsSliderArr = $.makeArray(arrowNewsSlider);
var arrowPrev = document.createElement('div');
var arrowNext = document.createElement('div');
arrowPrev.classList.add('news__arrow-prev');
arrowNewsSlider[0].appendChild(arrowPrev);
arrowNext.classList.add('news__arrow-next');
arrowNewsSlider[1].appendChild(arrowNext);
var logoLink = $('.logo__link');
logoLink[0].addEventListener('click', scrollToElement);
var menuLink = $('.menu__link');

for (var i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', scrollToElement);
}

var scrollHeader = $('.header__scroll');
scrollHeader[0].addEventListener('click', scrollToElement);
var galleryBtn = $('.gallery__btn');
var galleryImgHidden = $('.gallery__img-row02');
galleryBtn[0].addEventListener('click', function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top - 200;
  $('html').animate({
    scrollTop: destination
  }, 2000);
  return false;
});
galleryBtn[0].addEventListener('click', function () {
  show(galleryImgHidden[0]);
});

function scrollToElement() {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html').animate({
    scrollTop: destination
  }, 2000);
  return false;
}

function show(element) {
  if (element.classList.contains('gallery__hidden')) {
    element.classList.remove('gallery__hidden');
  }

  ;
}

;
var sectionAbout = $('#whatWeDo');
var menuFixed = $('.menu__wrapp');
$(window).scroll(setInterval(function () {
  if ($(this).scrollTop() > 500 && menuFixed.hasClass("menu__noSticky")) {
    menuFixed.fadeOut('fast', function () {
      $(this).removeClass("menu__noSticky").addClass("menu__sticky").fadeIn('fast');
    });
  } else if ($(this).scrollTop() <= 500 && menuFixed.hasClass("menu__sticky")) {
    menuFixed.fadeOut('fast', function () {
      $(this).removeClass("menu__sticky").addClass("menu__noSticky").fadeIn('fast');
    });
  }

  var sections = $('section');
  sections.each(function (i, el) {
    var top = $(el).offset().top - 100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');

    if (scroll > top && scroll < bottom) {
      $('a.menu__active').removeClass('menu__active');
      $('a[href="#' + id + '"]').addClass('menu__active');
    }

    if (scroll < $(sections[0]).offset().top - 100) {
      $('a.menu__active').removeClass('menu__active');
    }
  });
}), 0);
var menuList = $('.menu__item');

function initMap() {
  var cords = {
    lat: 50.41230533423103,
    lng: 30.544846627880688
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cords,
    zoom: 11,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#e8e8e8"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#908989"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#8C8C87"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 50.45866512019024,
      lng: 30.518067452139135
    },
    map: map,
    icon: './image/marker.png'
  });
}

;
window.initMap = initMap;