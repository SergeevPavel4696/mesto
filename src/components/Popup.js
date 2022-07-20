export class Popup {
    constructor(popupSelector, buttonSubmitText) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupClose = this._popup.querySelector(".popup__close");
        this._submitButtonEventText = buttonSubmitText;
        this.close = this.close.bind(this);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _closePopupByClickOnBackground = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupClose.addEventListener('mousedown', this.close);
        this._popup.addEventListener('mousedown', this._closePopupByClickOnBackground);
    }
}
