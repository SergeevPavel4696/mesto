import {Popup} from "./Popup.js";
import {validationData} from "../utils/constants.js";

export class PopupDeleteCard extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardDeleteButton = this._popup.querySelector(validationData.formSelector);
    }

    _deleteCard(card, delCard) {
        return (evt) => {
            evt.preventDefault();
            delCard(card);
            this.close();
        }
    }

    open(card, delCard) {
        super.open();
        this._cardDeleteButton.addEventListener('submit', this._deleteCard(card, delCard), false);
    }
}
