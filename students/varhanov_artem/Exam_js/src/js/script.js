function initMap() {
  const brooklun = {lat: 40.686280255564796, lng: -73.90061989110093};
  const map = new google.maps.Map(document.getElementById('map'), {
    center: brooklun,
    zoom: 13,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
          "color": "#e8e8e8"
      }]
  },
 
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
          "color": "#757575"
      }]
  },
]
  });
  const marker = new google.maps.Marker({
    position: brooklun,
    map,
    title:'Park',
    icon:'image/Pin.png',
  });
}


function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}



$(document).ready(function(){
  $('.hero').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.news__row').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows:false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });
  

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

  $(".scroll").on("click", function (event) {
      event.preventDefault();
      const id  = $(event.currentTarget).attr('href');
      const section = $(id)[0];
      if (section !== undefined) {
        const top = section.offsetTop
        $('body,html').animate({scrollTop: top}, 1500);
      }
  });

  $(".mobile-menu__menu").on("click","a", function (event) {
      event.preventDefault();
      const id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  }); 

  $('.button-mobmenu').click(function(event){
  $('.button-mobmenu,.mobile-menu').toggleClass("active")
  });
});


document.addEventListener('DOMContentLoaded', () =>{
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.header');
  const heroCenter = hero.offsetHeight / 2;


  const showHeaderThrottle = () => {
    const scrollTop = window.scrollY;
    (scrollTop >= 100) ? header.classList.add('invisible') : header.classList.remove('invisible');
    (scrollTop >= heroCenter) ? header.classList.add('sticky') : header.classList.remove('sticky');
  }
  
  window.addEventListener('scroll', showHeaderThrottle);
});










const sections = document.querySelectorAll("section, footer");
const navLi = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 8) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
      
    }
  });
});






// Valid form
$(function() {
  $(".btn-submit").on("click", validate);

  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
  
  function sendForm() {
    $(".error").text("Form sending").fadeIn();
  }

  function validate() {
    var email = $(".email").val();
    var $error = $(".error");
    $error.text("");
    $error.css("color", "green");

    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text(email + " is not valid");
        $error.css("color", "red");
     
    }
    return false;
  }
});
