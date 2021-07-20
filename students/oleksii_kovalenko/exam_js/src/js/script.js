import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';

//menu-sticky//

$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                       .addClass("fixed transbg")
                       .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                       .addClass("default")
                       .fadeIn('fast');
            });
        }
    });
});

//smoth scroll and active menu//

 var sections = $('section')
 , nav = $('nav')
 , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
 var cur_pos = $(this).scrollTop();
 
 sections.each(function() {
   var top = $(this).offset().top - nav_height,
       bottom = top + $(this).outerHeight();
   
   if (cur_pos >= top && cur_pos <= bottom) {
     nav.find('a').removeClass('active');
     sections.removeClass('active');
     
     $(this).addClass('active');
     nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
   }
 });
});

nav.find('a').on('click', function () {
 var $el = $(this)
   , id = $el.attr('href');
 
 $('html, body').animate({
   scrollTop: $(id).offset().top - nav_height
 }, 500);
 
 return false;
});

///header slider///

const slider = $('.slider');

slider.slick({
    dots: true,
    infinite: true,
    arrows: false,
    vertical: true,
    dotsClass: "vertical-dots",
    appendDots: $('.vertical-dots'),
});

///newsSlider///

const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    appendDots: $('.news__slider-dots'),
    slidesToShow: 3,

    arrows: true,
    autoplaySpeed: 3000,

    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        },
    ]
};

const $sliderNews = $('.news__list').slick(settings);


///// smoth scroll JS ////

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
   const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

/////google map/////

function initMap() {
  const cords = {
    lat: 40.678939246838084,
    lng:-73.8983101753608
  };
  const map = new google.maps.Map(document.getElementById('map'), {
      center: cords,
      zoom: 13,

      styles: [{
              "elementType": "geometry",
              "stylers": [{
                  "color": "#e8e8e8"
              }]
          },
          {
              "elementType": "labels.icon",
              "stylers": [{
                  "visibility": "off"
              }]
          },
          {
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#616161"
              }]
          },
          {
              "elementType": "labels.text.stroke",
              "stylers": [{
                  "color": "#f5f5f5"
              }]
          },
          {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#908989"
              }]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#eeeeee"
              }]
          },
          {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#757575"
              }]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#8C8C87"
              }]
          },
          {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#9e9e9e"
              }]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#ffffff"
              }]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#757575"
              }]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#dadada"
              }]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#616161"
              }]
          },
          {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#9e9e9e"
              }]
          },
          {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#e5e5e5"
              }]
          },
          {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#eeeeee"
              }]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                  "color": "#c9c9c9"
              }]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#9e9e9e"
              }]
          }
      ]
  });

  const marker = new google.maps.Marker({
    position: {
        lat: 40.69460410073613,
        lng:-73.91008627144909
    },
    map: map,
    icon: './image/marker.png',
})
};

window.initMap = initMap;

//form validation//

const form = document.forms.form1

form.addEventListener('change', function() {
    this.btnSubmit.disabled = this.checkValidity() ? false : true
});

Array.from(form.elements).forEach(inp => {
    if(inp.required && inp.type != 'checkbox') {
        inp.addEventListener('change', () => {
            if(inp.checkValidity()) {
                inp.classList.remove('invalid')
                inp.classList.add('valid')
            } else {
                inp.classList.remove('valid')
                inp.classList.add('invalid')
                inp.reportValidity()
            }
        })
    }
});
