import getHtml from "./getHtml";

function newAjax(link) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            getHtml(JSON.parse(xhr.responseText));
        }
    }
}
export default newAjax;
