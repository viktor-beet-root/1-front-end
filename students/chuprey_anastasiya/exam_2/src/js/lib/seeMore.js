import $ from 'jquery';

function seeMore() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const morePhotots = document.getElementById('morePhotots');
    morePhotots.style.display = "none";
    seeMoreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        morePhotots.style.display = "block";

    })
}
//     const seeMore = $('.append__row');
//     const seeMoreBtn = $('button__link');
//     seeMore.hide();
//     seeMoreBtn.click(function (event) {
//         event.preventDefault();
//         if (a = 1) {
//             morePhotots.style.display = "none";
//             return a = 1;
//         } else {
//             morePhotots.style.display = "block";
//             return a = 0;
//         }
//     })
// }







export default seeMore;
