import $ from 'jquery';

const num = $('input');
console.log(num);

num.each((index, item) => {})



function getCalc(e) {
    e.preventDefault();
    console.log($('#calc').val())
}
num.on('click', function () {
    $('#calc').val(this.value)
});
$('#btnSubmit').on('submit', getCalc)
