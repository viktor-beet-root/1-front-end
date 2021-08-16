const form = document.getElementById('contactForm');

function validateForm(e) {
    e.preventDefault();
    const inputName = document.getElementById('nameInput');
    const messageDiv = document.querySelectorAll('.error-message');
    messageDiv.forEach(message => {
        message.textContent = ''
    })
    const emailInput = document.getElementById('emailInput');
    if (!inputName.value && !emailInput.value) {
        const name = document.querySelector('#nameInput+.error-message');
        name.textContent = 'Введите имя';
        const email = document.querySelector('#emailInput+.error-message');
        email.textContent = 'Введите email';
        return;
    }
    if (!(/[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?/.test(nameInput.value))) {
        const message = document.querySelector('#nameInput+.error-message');
        message.textContent = 'Введите имя';
        return;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))) {
        const message = document.querySelector('#emailInput+.error-message');
        message.textContent = 'Введите email';
        return;
    }

    inputName.value = '';
    emailInput.value = '';
}
form.addEventListener('submit', validateForm)
