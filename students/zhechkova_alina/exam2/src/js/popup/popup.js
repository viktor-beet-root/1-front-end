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
    addTitle(title) {
        if (title) {
            this.title.textContent = title;
            return;
        }
        if (this.options.title) {
            this.title.textContent = this.options.title;
        }
    }
    addText(text) {
        if (text) {
            this.text.textContent = text;
            return;
        }
        if (this.options.text) {
            this.text.textContent = this.options.text
        };
    }


}

export default Popup;
