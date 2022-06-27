export class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderer = renderer;
        this._items = items;
        this._cardGrid = document.querySelector(containerSelector);
    }

    addItem(card) {
        this._cardGrid.prepend(card);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item));
        });
    }
}
