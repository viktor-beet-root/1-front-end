// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
function light(event) {
    const circle = document.querySelectorAll('.red, .yellow, .green');
}

function changeColor() {
    const btn = document.getElementById('btnColor');
    btn.addEventListener('click', light, false)
}
changeColor()
//Не доделана :)
