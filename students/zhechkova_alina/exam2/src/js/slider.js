import $ from 'jquery';
import 'slick-carousel';
const sliderDiv = $('.news__wrapper');
sliderDiv.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.news__dots'),
    responsive: [{
            breakpoint: 967,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});
