(function openMenu() {
    const btn = document.getElementById('openMenu');
    const menu = document.querySelector('.menu');
    btn.addEventListener('click', function () {
        menu.classList.toggle('active');
        document.body.classList.toggle('fixed');
    })
})()
