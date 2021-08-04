import $ from 'jquery';
import 'slick-carousel';
import titleList from './titleList';
import getTitleHtml from './getTitleHtml';
function verticalSlider() {
    const slider = $('.slider');
    let titleItemHtml = '';
    titleList.forEach((title) => {
        titleItemHtml += (getTitleHtml(title));
    })

    slider.append(titleItemHtml);
    slider.slick({
        infinite: true,
        dots: true,
        speed: 1000,
        cssEase: 'linear',
        dotsClass: "vertical-dots",
    })
}

export default verticalSlider;
