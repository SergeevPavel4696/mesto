import {Popup} from "./Popup.js";

export class PopupDeleteCard extends Popup {
    constructor(popupSelector, buttonSubmitText, validationData) {
        super(popupSelector, buttonSubmitText);
        this._form = this._popup.querySelector(validationData.formSelector);
        this.formSubmitButton = this._popup.querySelector(validationData.submitButtonSelector);
        this._submitButtonText = this.formSubmitButton.textContent;
    }

    _deleteCard(card, delCard) {
        return (evt) => {
            evt.preventDefault();
            this.formSubmitButton.textContent = this._submitButtonEventText;
            delCard(card);
        }
    }

    open(card, deleteCard) {
        this.deleteCard = this._deleteCard(card, deleteCard);
        super.open();
        this._form.addEventListener('submit', this.deleteCard, false);
        setTimeout(() => {this.formSubmitButton.focus()}, 100);
    }

    close() {
        this._form.removeEventListener('submit', this.deleteCard, false);
        super.close();
    }
}
