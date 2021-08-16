(function openMenu() {
    const btn = document.getElementById('openMenu');
    const menu = document.querySelector('.menu');
    btn.addEventListener('click', function () {
        menu.classList.toggle('active');
        document.body.classList.toggle('fixed');
    });
    const menuItem = document.querySelectorAll('.menu__link');
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            document.body.classList.remove('fixed');
            menu.classList.remove('active')
        })
    })
})()
