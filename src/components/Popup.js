import { escapeCode } from '../utils/constants.js';

export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
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
    document.addEventListener('click', (evt) => {
      this._handleOverlayClose(evt);
    });

    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });

    this._popup.querySelector('.popup__reset').addEventListener('click', this.close);
  }
}