export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._close = this._close.bind(this);
        this._popupClose = this._popup.querySelector(".popup__close");
    }

    _open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    _close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this._close();
        }
    }

    setEventListeners() {
        this._popupClose.addEventListener('mousedown', this._close);
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this._close();
            }
        });
    }
}
