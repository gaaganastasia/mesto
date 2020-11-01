import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupImgCaption, popupImgPhoto) {
    super(popupSelector);
    this._caption = popupImgCaption;
    this._photo = popupImgPhoto;
  }

  open(cardTitle, cardSrc) {
    const title = cardTitle;
    const src = cardSrc;

    this._caption.textContent = title;
    this._photo.setAttribute('src', src);
    this._photo.setAttribute('alt', src);

    super.open();
  }
}