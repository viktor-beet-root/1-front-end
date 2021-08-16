import btnClosePopup from './btnClosePopup';

const tradeBtn = document.getElementById('detailsTrade');
const tradeBtnClose = document.querySelector('.popup-trade__btn');

const commerceBtn = document.getElementById('detailsCommerce');
const commerceBtnClose = document.querySelector('.popup-commerce__btn')

tradeBtn.addEventListener('click', (e) => {
    const popup = document.querySelector('.popup-trade')
    console.log(popup)
    popup.classList.add('active')
})

commerceBtn.addEventListener('click', (e) => {
    const popup = document.querySelector('.popup-commerce')
    console.log(popup)
    popup.classList.add('active')
})

btnClosePopup(tradeBtnClose, document.querySelector('.popup-trade'))
btnClosePopup(commerceBtnClose, document.querySelector('.popup-commerce'))
