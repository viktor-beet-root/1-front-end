import $ from 'jquery';

function changeBtnActive(btn, index) {
    btn.each((i, item) => {
        $(item).removeClass('active');
    })
    $(btn[index]).addClass('active')
}
export default changeBtnActive
