export class Card {
    constructor(cardInfo, template, popup) {
        this._name = cardInfo["card-name"];
        this._link = cardInfo["card-link"];
        this.card = document.querySelector("#" + template).content.querySelector("." + template).cloneNode(true);
        this._popup = popup;
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

    _setCardImageEvent(popup, link, name) {
        this._cardImage.addEventListener("click", function () {
            popup.open(link, name);
        });
    }

    getNewCard() {
        this._setImage();
        this._setCardTittle();
        this._setCardLikeEvent();
        this._setCardTrashEvent(this.card);
        this._setCardImageEvent(this._popup, this._link, this._name);
        return this.card;
    }
}
