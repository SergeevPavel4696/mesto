export class Section {
    constructor({items, renderer}, containerSelector, popup) {
        this._renderer = renderer;
        this._items = items;
        this._cardGrid = document.querySelector(containerSelector);
        this._popup = popup;
    }

    getPopup() {
        return this._popup;
    }

    addItem(card) {
        this._cardGrid.prepend(card);
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(this._popup, this._cardGrid, item);
        });
    }
}
