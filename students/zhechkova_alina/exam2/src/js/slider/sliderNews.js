import $ from 'jquery';
import 'slick-carousel';
const sliderNew = $('.news__wrapper');
sliderNew.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.news__dots'),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                innerHeight: '500px',
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                innerHeight: '500px'
            }
        }
    ]
});
