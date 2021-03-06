export class Card {
  constructor(myId, data, cardTemplate, popupDeleteCard, functions) {
    this._title = data.name;
    this._src = data.link;
    this._card = cardTemplate.cloneNode(true);
    this._likeCounter = this._card.querySelector(".element__like-counter");
    this._likeButton = this._card.querySelector(".element__like");
    this._likesArray = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._popupDeleteCard = popupDeleteCard;

    this._addLike = functions.addLike;
    this._removeLike = functions.removeLike;
    this._handleCardRemove = functions.handleCardRemove;

    this._handleCardClick = functions.handleCardClick.bind(this);
    this._handleLike = this._handleLike.bind(this);
    this._handleRemove = this._handleRemove.bind(this);

    this._myId = myId;
  }

  // слушатели
  _setEventListeners() {
    this._card
      .querySelector(".element__delete")
      .addEventListener("click", this._handleRemove);

    this._cardImage.addEventListener("click", this._handleCardClick);
    this._likeButton.addEventListener("click", this._handleLike);
  }

  _isLiked() {
    return this._likesArray.some((l) => l._id === this._myId);
  }

  //лайки
  _handleLike(evt) {
    evt.target.classList.toggle("element__like_active");

    if (evt.target.classList.contains("element__like_active")) {
      this._addLike(this._cardId);
      this._likeCounter.textContent++;
    } else {
      this._removeLike(this._cardId);
      this._likeCounter.textContent--;
    }
  }

  //remove
  _handleRemove(evt) {
    const element = evt.target.closest(".element");
    this._popupDeleteCard.open();

    this._popupDeleteCard._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleCardRemove(this._cardId);

      element.remove();

      this._likeButton.removeEventListener("click", this._handleLike);
      this._cardImage.removeEventListener("click", this._handleCardClick);

      element
        .querySelector(".element__delete")
        .removeEventListener("click", this._handleRemove);

      this._popupDeleteCard.close();
    });
  }

  generateCard() {
    this._card.querySelector(".element__title").textContent = this._title;
    this._cardImage = this._card.querySelector(".element__image");
    this._cardImage.setAttribute("src", this._src);
    this._cardImage.setAttribute("alt", this._title);
    this._likeCounter.textContent = this._likesArray.length;

    //иконка удаления
    if (this._ownerId == this._myId) {
      this._card
        .querySelector(".element__delete")
        .classList.add("element__delete_shown");
    }

    //проверка на лайк
    if (this._isLiked()) {
      this._likeButton.classList.add("element__like_active");
    }

    this._setEventListeners();

    return this._card;
  }
}
