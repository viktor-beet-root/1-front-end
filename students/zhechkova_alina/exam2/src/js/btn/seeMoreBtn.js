const smBtn = document.getElementById('seeMoreBtn');

function getPhoto(response) {
    let html = ``;
    response.forEach(photo => {
        html += `<img src=${photo.urls.raw} alt=${alt_description} class="col-6">`
        console.log(photo, html)
    });
    const div = document.getElementById('ajaxWrap');
    div.innerHTML = html
    console.log(response)
}

smBtn.addEventListener('click', function () {
    return ajax_get("https://api.unsplash.com/photos/random/?count=4&client_id=cpnwAlnMv_WQLAZD4dS3j9dNZIwN8NYCx8ByylfYd_c", function (data) {
        return getPhoto(JSON.parse(data));
    })
})


function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var data = xmlhttp.responseText;
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
