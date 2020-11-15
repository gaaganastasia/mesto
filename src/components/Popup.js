export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");

    document.addEventListener("click", this._handleOverlayClose);
    document.addEventListener("keydown", this._handleEscClose);

    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");

    document.removeEventListener("click", this._handleOverlayClose);
    document.removeEventListener("keydown", this._handleEscClose);
    
    this._popup.querySelector(".popup__reset").removeEventListener("click", this.close);
  }

  _handleEscClose(evt) {
    if (evt.keyCode === 27) {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".popup__reset")
      .addEventListener("click", this.close);
  }
}
