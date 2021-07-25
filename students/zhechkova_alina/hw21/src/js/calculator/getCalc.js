import $ from 'jquery';

function getCalc(e) {
    e.preventDefault();
    const q = eval($('#calc').val());
    $('#calc').val(function (i, val) {
        if (!val) return;
        return val + '=' + q;
    });
}
export default getCalc
