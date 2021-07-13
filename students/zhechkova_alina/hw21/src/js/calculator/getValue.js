import $ from 'jquery';
import getCalc from './getCalc';

function getValue() {
    const form = $('.calculate_form')
    const item = $('.calculate-item');
    item.each(function (i, item) {
        $(item).on('click', function (e) {
            const newVal = $(this).val()
            $('#calc').val(function (i, val) {
                return val + newVal;
            });
        })
    })
    form.on('submit', getCalc);
}

getValue()
