function openMenu() {
    const btn = document.getElementById('openMenu');
    const menu = document.querySelector('.menu__row');
    btn.addEventListener('click', function () {
        menu.classList.toggle('active');
        document.body.classList.add('fixed');
    })
}
export default openMenu;
