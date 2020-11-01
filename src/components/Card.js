export class Card {
  constructor({cardTitle, cardSrc, cardTemplate}, handleCardClick) {
    this._title = cardTitle;
    this._src = cardSrc;
    this._card = cardTemplate.cloneNode(true);

    this._handleCardClick = handleCardClick;
  }

  // слушатели
  setEventListeners() { 
    this._card.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });
    
    this._card.querySelector('.element__delete').addEventListener('click', (evt) => {
      this._removeCard(evt);
    });

    this._cardImage.addEventListener('click', (evt) => {
      this._handleCardClick(evt);
    });
  }

  //лайки
  _toggleLike(evt) { 
    evt.target.classList.toggle('element__like_active');
  }

  // удаление
  _removeCard(evt) { 
    this._cardImage.removeEventListener('click', (evt) => {
      this._handleCardClick(evt);
    });
    
    evt.target.closest('.element').remove();
  }

  generateCard() {
    this._card.querySelector('.element__title').textContent = this._title;
    this._cardImage = this._card.querySelector('.element__image');
    this._cardImage.setAttribute('src', this._src);
    this._cardImage.setAttribute('alt', this._title);

    this.setEventListeners();

    return this._card;
  }
}