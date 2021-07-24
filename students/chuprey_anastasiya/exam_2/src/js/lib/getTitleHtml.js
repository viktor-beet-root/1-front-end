function getTitleHtml(title) {
    let titleHtml = `
    <div class="slider__slide-item">
    <h2 class="slider__slide-title">${title.name}</h2>
    <p class="slider__slide-subtitle">${title.subtitle}</p>
    </div>
    `


    return titleHtml;
}



export default getTitleHtml;
