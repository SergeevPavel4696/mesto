import {openPopupImage, popupImage, popupPicture} from "./index.js";

export class Card {
    constructor(link, name, template) {
        this._name = name;
        this._link = link;
        this.card = document.querySelector("#" + template).content.querySelector("." + template).cloneNode(true);
        this._cardImage = this.card.querySelector(".card__image");
    }

    _setImage() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
    }

    _setCardTittle() {
        this.card.querySelector(".card__title").textContent = this._name;
    }

    _setCardLikeEvent() {
        this.card.querySelector(".card__like").addEventListener("click", function (event) {
            event.target.classList.toggle("card__like_active");
        });
    }

    _setCardTrashEvent(card) {
        this.card.querySelector(".card__trash").addEventListener("click", function () {
            card.remove();
            card = null;
        });
    }

    _setCardImageEvent(link, name) {
        this._cardImage.addEventListener("click", function () {
            popupPicture.src = link;
            popupPicture.alt = name;
            popupImage.querySelector(".popup__image-title").textContent = name;
            openPopupImage();
        });
    }

    getNewCard() {
        this._setImage();
        this._setCardTittle();
        this._setCardLikeEvent();
        this._setCardTrashEvent(this.card);
        this._setCardImageEvent(this._link, this._name);
        return this.card;
    }
}
