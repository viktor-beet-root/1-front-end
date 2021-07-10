import newAjax from "./newAjax";

function getValue(e) {
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=ca7928216bf68cd760cad71e1df9e9d3&language=en-US&query=`;

    const inputTitle = document.getElementById('inputTitle');

    const title = inputTitle.value;
    url += `${encodeURIComponent(title)}&page=1&include_adult=false`

    newAjax(url);

    inputTitle.value = '';
}
export default getValue;
