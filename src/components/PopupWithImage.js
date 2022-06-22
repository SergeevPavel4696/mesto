import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPicture = this._popup.querySelector(".popup__image");
    }

    open(link, name) {
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        this._popup.querySelector(".popup__image-title").textContent = name;
        super.open();
    }
}
