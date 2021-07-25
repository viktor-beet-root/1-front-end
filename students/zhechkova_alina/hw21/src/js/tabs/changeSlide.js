import $ from 'jquery';

function changeSlide(game, index) {
    game.each((i, item) => {
        $(item).removeClass('active');
    })
    $(game[index]).addClass('active')
}
export default changeSlide
