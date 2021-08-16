window.onscroll = function () {
    myFunction()
};

var header = document.querySelector("header");

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
