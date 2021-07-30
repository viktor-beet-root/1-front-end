import './slider/sliderNews';
import './slider/sliderHero';
import './menu/openMenu';
import './scroll/scrollTo';
import './scroll/stickyHeader';
import './menu/scrollActiveMenu'
import './btn/moreDetails';
import './btn/seeMoreBtn';
import './form/validateForm';

import createElem from "./createDom/createElem";
import Popup from "./popup/popup";


const tradePopup = new Popup({
    wrapper: document.querySelector('.popup'),
    mode: 'alert',
    title: 'Hello',
    text: tradeText,
});
const commercePopup = new Popup({
    wrapper: document.querySelector('.popup'),
    mode: 'alert',
    text: commerceText,
});


const tradeBtn = document.getElementById('detailsTrade');
const tradeText = document.getElementById('tradeText');

tradeBtn.addEventListener('click', tradePopup.show.bind(tradePopup));
commerceBtn.addEventListener('click', commercePopup.show.bind(commercePopup))
