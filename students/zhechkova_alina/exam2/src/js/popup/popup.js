import defaultOptions from "./defaultOptions";
import setEventPopup from "./setEventPopup";

class Popup {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options
        }

        setEventPopup.apply(this);
        this.title = '';
        this.text = '';

    }

    show() {
        this.options.wrapper.classList.add('active');
    }

    hide() {
        this.options.wrapper.classList.remove('active');
    }

}

export default Popup;
