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

  $("#scroll").on("click", function (event) {
      event.preventDefault();
      const id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
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

function initMap() {
  const brooklun = {lat: 40.686280255564796, lng: -73.90061989110093};
  const map = new google.maps.Map(document.getElementById('map'), {
    center: brooklun,
    zoom: 13
  });

  const marker = new google.maps.Marker({
    position: brooklun,
    map,
    title:'Park',
    icon:'image/Pin.png'
    
  });
}
