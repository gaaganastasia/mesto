export class Section {
  constructor({ items, renderer }, cardsContainer) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}