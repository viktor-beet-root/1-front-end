function btnClosePopup(btn, popup) {
    btn.addEventListener('click', () => {
        popup.classList.remove('active')
    })
}

export default btnClosePopup
