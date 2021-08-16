import $ from 'jquery';
import 'slick-carousel';

function horizontalSlider() {
    $(document).ready(function () {
        $('.news-items').slick({
            infinite: true,
            dots: true,
            speed: 1000,
            slidesToShow: 3,
            dotsClass: "horizontal-dots",
            prevArrow: '<span class="priw_arrow"><i class="fas fa-angle-left"></i></span>',
            nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
            responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1
                }
            },
            ]

        });
    })



}

export default horizontalSlider;
