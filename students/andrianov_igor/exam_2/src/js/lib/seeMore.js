import $ from 'jquery';
//See more
function seeMore() {
    const htmlGalleryPhotos = `
<div class="container append">
    <div class="row append__row append__row_adaptive id="seeMoreP">

        <div class="col-3 col-md-6 img-list__image-wrapper-a img-list__image-wrapper_left">
            <a class="img-list__image-link-a" href="./images/gallery_2.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_2.png" alt="gallery">
            </a>
            <a class="img-list__image-link-a" href="./images/gallery_3.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_3.png" alt="gallery">
            </a>
        </div>

        <div class="col-3 col-md-6 img-list__image-wrapper-a img-list__image-wrapper_right">
            <a class="img-list__image-link-a" href="./images/gallery_4.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_4.png" alt="gallery">
            </a>
            <a class="img-list__image-link-a" href="./images/gallery_5.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_5.png" alt="gallery">
            </a>
        </div>

        <div class="col-3 col-md-6 img-list__image-wrapper-a img-list__image-wrapper_left">
            <a class="img-list__image-link-a" href="./images/gallery_2.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_2.png" alt="gallery">
            </a>
            <a class="img-list__image-link-a" href="./images/gallery_3.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_3.png" alt="gallery">
            </a>
        </div>

        <div class="col-3 col-md-6 img-list__image-wrapper-a img-list__image-wrapper_right">
            <a class="img-list__image-link-a" href="./images/gallery_4.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_4.png" alt="gallery">
            </a>
            <a class="img-list__image-link-a" href="./images/gallery_5.png" data-lightbox="lbox">
                <img class="img-list__img-a" src="./images/gallery_5.png" alt="gallery">
            </a>
        </div>

    </div>

</div>
`

    //Add photos at Gallery Section

    $(document).ready(function () {
        let $seeMore = $('#seeMore');
        setTimeout(function () {
            $seeMore.on("click", function () {
                $('#morePhotos').before(htmlGalleryPhotos);
            });
        }, 0);
    });

};

export default seeMore;
