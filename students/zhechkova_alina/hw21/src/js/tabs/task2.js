import $ from 'jquery';
import changeSlide from './changeSlide';
import changeBtnActive from './changeBtnActive';

function prepareNewSLide() {
    const btn = $('.btn');
    const game = $('.slide');
    btn.each(function (index, item) {
        $(item).on('click', function (e) {
            changeSlide(game, index);
            changeBtnActive(btn, index);
        })
    })
}

prepareNewSLide()
