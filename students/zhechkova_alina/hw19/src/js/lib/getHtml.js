function getHtml(info) {
    const parentElem = document.getElementById('app');
    let newTag = ``;
    if (!info.total_results) {
        newTag = `Movie not found!`;
        parentElem.insertAdjacentHTML('beforeend', newTag);
    } else {
        info.results.forEach((item, index) => {
            newTag = `<div class="film-list">
                <h2>
                    ${index+1}. ${item.title}
                </h2>
                <p>
                    Average vote: ${item.vote_average}
                </p>
                <small>
                    Release date:${item.release_date}
                </small>
                <button type="button" class="openOverview">
                    Details
                </button>
                <p class="film-overview" id="text${index}">
                    ${item.overview}
                </p>
                
            </div>`;
            parentElem.insertAdjacentHTML('beforeend', newTag);
        });
    }
    openPreview();
}


function openPreview() {
    const btn = document.querySelectorAll('.openOverview')
    btn.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            const p = document.querySelector(`#text${index}`);
            p.classList.toggle('active')
        })
    })
}
export default getHtml
