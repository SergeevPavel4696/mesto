export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._cardGrid = document.querySelector(containerSelector);
    }

    addItem(card) {
        this._cardGrid.prepend(card);
    }

    renderItems(items) {
        items.slice().reverse().forEach((item) => {
            this.addItem(this._renderer(item));
        });
    }
}
