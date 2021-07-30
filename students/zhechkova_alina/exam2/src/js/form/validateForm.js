const form = document.getElementById('contactForm');

function validateForm(e) {
    e.preventDefault()
    const inputName = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    if (!inputName.value || !emailInput.value) {
        console.log('Need to fill')
    }
}
form.addEventListener('submit', validateForm)
