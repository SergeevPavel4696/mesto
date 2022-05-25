import {openPopupImage, popupImage, popupPicture} from "./index.js";

export class Card {
    constructor(link, name, template) {
        this.name = name;
        this.link = link;
        this.card = document.querySelector("#" + template).content.querySelector("." + template).cloneNode(true);
        this.cardImage = this.card.querySelector(".card__image");
    }

    _setImage() {
        this.cardImage.src = this.link;
        this.cardImage.alt = this.name;
    }

    _setCardTittle() {
        this.card.querySelector(".card__title").textContent = this.name;
    }

    _setCardLikeEvent() {
        this.card.querySelector(".card__like").addEventListener("click", function (event) {
            event.target.classList.toggle("card__like_active");
        });
    }

    _setCardTrashEvent(card) {
        card.querySelector(".card__trash").addEventListener("click", function () {
            card.remove();
        });
    }

    _setCardImageEvent(link, name) {
        this.cardImage.addEventListener("click", function () {
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
        this._setCardImageEvent(this.link, this.name);
        return this.card;
    }
}
