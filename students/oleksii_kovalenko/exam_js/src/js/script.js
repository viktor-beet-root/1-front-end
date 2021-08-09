import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import 'jquery-validation';

//menu-sticky//

$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 200 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                       .addClass("fixed transbg")
                       .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed transbg")
                       .addClass("default")
                       .fadeIn('fast');
            });
        }
    });
});

//menu-close//

$('.gamburger').click(function(){
    $('span:nth-child(1)').toggleClass('first');
    $('span:nth-child(2)').toggleClass('middle');
    $('span:nth-child(3)').toggleClass('last');
    $('.menu__items').toggleClass('menu__active');
});

$('.menu__items a').click(function() {
    $('.menu__items').removeClass('menu__active');
    $('span:nth-child(1)').removeClass('first');
    $('span:nth-child(2)').removeClass('middle');
    $('span:nth-child(3)').removeClass('last');
});

// active menu//

var positions = [],
	currentActive = null,
	links = $('.scroll-to');

$(".anchor").each(function(){
	positions.push({
		top: $(this).position().top - 200,
		a: links.filter('[href="#'+$(this).attr('id')+'"]')
	});
});

positions = positions.reverse();

$(window).on('scroll',function() {
	var winTop = $(window).scrollTop();
	for(var i = 0; i < positions.length; i++){
		if(positions[i].top < winTop){
			if(currentActive !== i){
				currentActive = i;
				links.removeClass('active');
				positions[i].a.addClass("active");
			}
			break;
		}
	}
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
    autoplay: true,
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

// const form = document.forms.form1

// form.addEventListener('change', function() {
//     this.btnSubmit.disabled = this.checkValidity() ? false : true
// });

// Array.from(form.elements).forEach(inp => {
//     if(inp.required && inp.type != 'checkbox') {
//         inp.addEventListener('change', () => {
//             if(inp.checkValidity()) {
//                 inp.classList.remove('invalid')
//                 inp.classList.add('valid')
//             } else {
//                 inp.classList.remove('valid')
//                 inp.classList.add('invalid')
//                 inp.reportValidity()
//             }
//         })
//     }
// });

$(document).on('click', '.send', function() {
    var validateForm = $(document).find('#contacsform');
    validateForm.validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            }
            ,email: {
                required: true,
                email: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Enter your name",
            }
            ,phone: {
                required: "Enter Email",
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorPlacement: function(error, element) {
            var item = element.parents('.item');
            item.append(error);
        }
    });
 
    validateForm.submit();
});
