function openDetails(node, btn) {
    btn.addEventListener('click', () => {
        node.classList.toggle('initial-text')
    })
}

const tradeBtn = document.getElementById('detailsTrade');
const tradeText = document.getElementById('tradeText');

const commerceBtn = document.getElementById('detailsCommerce');
const commerceText = document.getElementById('commerceText');

openDetails(tradeText, tradeBtn);
openDetails(commerceText, commerceBtn)
