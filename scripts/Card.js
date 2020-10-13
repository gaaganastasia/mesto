export class Card {
  constructor(cardTitle, cardSrc, cardTemplate, openPopup, closePopup, popupImg, popupImgCaption, popupImgPhoto) {
    this._title = cardTitle;
    this._src = cardSrc;
    
    this._card = cardTemplate.cloneNode(true);

    this._card.querySelector('.element__title').textContent = this._title;
    this._cardImage = this._card.querySelector('.element__image');
    this._cardImage.setAttribute('src', this._src);

    this._popupImg = popupImg;
    this._popupImgCaption = popupImgCaption;
    this._popupImgPhoto = popupImgPhoto;

    this._openPopup = openPopup;
    this._closePopup = closePopup;
  }

  _setEventListeners() { // слушатели
    this._card.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });
    
    this._card.querySelector('.element__delete').addEventListener('click', (evt) => {
      this._removeCard(evt);
    });

    this._cardImage.addEventListener('click', () => {
      this._openPopup(this._popupImg);

      this._popupImgCaption.textContent = this._title;
      this._popupImgPhoto.setAttribute('src', this._src);
      this._popupImgPhoto.setAttribute('alt', this._title);
    });
  }

  _toggleLike(evt) { //лайки
    evt.target.classList.toggle('element__like_active');
  }

  _removeCard(evt) { // удаление
    evt.target.closest('.element').remove();
  }

  generateCard() {
    this._setEventListeners();
    return this._card;
  }
}