export class Card {
    constructor(cardInfo, template, popupOpenHandler, popupDeleteOpenHandler, addLike, deleteLike, userId) {
        this._name = cardInfo["name"];
        this._link = cardInfo["link"];
        this.id = cardInfo["_id"];
        this._likes = cardInfo["likes"];
        this.card = document.querySelector("#" + template).content.querySelector("." + template).cloneNode(true);
        this._cardTitle = this.card.querySelector(".card__title")
        this._cardImage = this.card.querySelector(".card__image");
        this._cardTrash = this.card.querySelector(".card__trash");
        this._cardLike = this.card.querySelector(".card__like");
        this._cardLikesNumber = this.card.querySelector(".card__like-number");
        this._popupOpenHandler = popupOpenHandler;
        this._popupDeleteOpenHandler = popupDeleteOpenHandler;
        this._addLike = addLike;
        this._deleteLike = deleteLike;
        this._userId = userId;
    }

    _setImage() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
    }

    _setCardTittle() {
        this._cardTitle.textContent = this._name;
    }

    _setCardLikes() {
        if (this._likes.length) {
            this._cardLike.classList.add("card__like_with-number");
            this._cardLikesNumber.textContent = this._likes.length;
        } else {
            this._cardLike.classList.remove("card__like_with-number");
            this._cardLikesNumber.textContent = "";
        }
        this._likes.forEach((user) => {
            if (user["_id"] === this._userId) {
                this._cardLike.classList.add("card__like_active");
            }
        });
    }

    _updateCardLike(number) {
        if (number) {
            this._cardLikesNumber.textContent = number;
            this._cardLike.classList.add("card__like_with-number");
        } else {
            this._cardLikesNumber.textContent = "";
            this._cardLike.classList.remove("card__like_with-number");
        }
        this._cardLike.classList.toggle("card__like_active");
    }
    
    _setCardLikeEvent() {
        this._cardLike.addEventListener("click",  () => {
            if (this._cardLike.classList.contains("card__like_active")) {
                this._deleteLike(this.id, (number) => {
                    this._updateCardLike(number);
                });
            } else {
                this._addLike(this.id, (number) => {
                    this._updateCardLike(number);
                })
            }
        });
    }

    _setCardTrashEvent() {
        if (this._userId === this.idOwner) {
            this._cardTrash.addEventListener("click", () => {
                this._popupDeleteOpenHandler(this.id, this.card);
            });
        } else {
            this._cardTrash.remove();
            this._cardTrash = null;
        }
    }

    _setCardImageEvent() {
        this._cardImage.addEventListener("click", () => {
            this._popupOpenHandler(this._link, this._name);
        });
    }

    deleteCard() {
        this.card.remove();
        this.card = null;
    }

    getNewCard() {
        this._setImage();
        this._setCardTittle();
        this._setCardLikes();
        this._setCardLikeEvent();
        this._setCardTrashEvent();
        this._setCardImageEvent();
        return this.card;
    }
}
