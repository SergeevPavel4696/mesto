import {Card} from "./Card.js";

export class Section {
    constructor({items, renderer}, containerSelector, popup) {
        this._renderer = renderer;
        this._items = items;
        this._cardGrid = document.querySelector(containerSelector);
        this._popup = popup;
    }

    addItem(formValues) {
        this._cardGrid.prepend(new Card(formValues, "card", this._popup).getNewCard());
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(this._popup, this._cardGrid, item);
        });
    }
}
