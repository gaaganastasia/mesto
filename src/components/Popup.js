import { escapeCode } from '../utils/constants.js';

export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('click', this._handleOverlayClose.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));

    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');

    document.removeEventListener('click', this._handleOverlayClose.bind(this));
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.keyCode === escapeCode) {
      this.close(); 
    }; 
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) { 
      this.close(); 
    } 
  }

  setEventListeners() {
    this._popup.querySelector('.popup__reset').addEventListener('click', this.close.bind(this));
  }
}