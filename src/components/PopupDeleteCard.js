import {Popup} from "./Popup.js";
import {validationData} from "../utils/constants.js";

export class PopupDeleteCard extends Popup {
    constructor(popupSelector, buttonSubmitText) {
        super(popupSelector, buttonSubmitText);
        this._form = this._popup.querySelector(validationData.formSelector);
        this._formSubmitButton = this._popup.querySelector(validationData.submitButtonSelector);
        this._submitButtonText = this._submitButton.textContent;
    }

    _deleteCard(card, delCard) {
        return (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = this._submitButtonEventText;
            delCard(card);
            this.close();
        }
    }

    open(card, deleteCard) {
        this.deleteCard = this._deleteCard(card, deleteCard);
        this._submitButton.textContent = this._submitButtonText;
        super.open();
        this._form.addEventListener('submit', this.deleteCard, false);
    }

    close() {
        this._form.removeEventListener('submit', this.deleteCard, false);
        super.close();
    }
}
