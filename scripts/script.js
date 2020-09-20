const cardTemplate = document.querySelector('.template-card').content;
const cardsContainer = document.querySelector('.elements');

function cardCreate(src, title) {  //создание карточки
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image')
  const removeButton = cardElement.querySelector('.element__delete');
  const likeButton = cardElement.querySelector('.element__like');
  const popupImg = document.querySelector('.popup-img');

  cardImage.setAttribute('src', src);
  cardElement.querySelector('.element__title').textContent = title;
  cardImage.setAttribute('alt', title);

  likeButton.addEventListener('click', function (evt) {  //лайки
    evt.target.classList.toggle('element__like_active');
  });
  
  removeButton.addEventListener('click', function () {  //удаление карточек
    const closeElement = removeButton.closest('.element');
    closeElement.remove();
  });

  cardImage.addEventListener('click', function () {  //попап открытия картинки
    openPopup(popupImg);

    document.querySelector('.popup-img__caption').textContent = title;
    document.querySelector('.popup-img__image').src = src;
    document.querySelector('.popup-img__image').alt = title;

    document.querySelector('.popup-img__close-icon').addEventListener('click', () => closePopup(popupImg));
  });

  return cardElement;
}

function cardPrepend(element) { //добавляем в массив
  cardsContainer.prepend(element); 
}

function cardUpload(src, title) { // загружаем на страницу
  cardPrepend(cardCreate(src, title));
}

initialCards.forEach(function (card) { //загружаем карточки на страницу
  cardUpload(card.link, card.name);
});

function openPopup(popup) {  // универсальная ф-я открытия попапа
  popup.classList.add('popup_opened');
}

function closePopup(popup) { // универсальная ф-я закрытия попапа
  popup.classList.remove('popup_opened');
}


const popupAdd = document.querySelector('.popup-add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup-add__close-icon');
const popupAddTitleInput = document.querySelector('.popup-add__form_title');
const popupAddLinkInput = document.querySelector('.popup-add__form_subtitle');
const popupAddContainer = document.querySelector('.popup-add__container');

//попап добавления карточки
popupAddOpenButton.addEventListener('click', () => openPopup(popupAdd)); // открытие

popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd)); //закрытие

popupAddContainer.addEventListener('submit', function (evt) { // создаём новую карточку
    evt.preventDefault();

    cardUpload(popupAddLinkInput.value, popupAddTitleInput.value);
    closePopup(popupAdd);
});


const popupEdit = document.querySelector('.popup-edit'); 
const popupEditOpenButton = document.querySelector('.info__edit-button');
const popupEditCloseButton = document.querySelector('.popup-edit__close-icon');//edit
const popupEditContainer = document.querySelector('.popup-edit__container');
const popupEditNameInput = document.querySelector('.popup-edit__form_title');
const popupEditJobInput = document.querySelector('.popup-edit__form_subtitle');
const nameInfo = document.querySelector('.info__title');
const jobInfo = document.querySelector('.info__subtitle');

//попап редактирования профиля
popupEditOpenButton.addEventListener('click', function () { //открытие
  openPopup(popupEdit);
  popupEditNameInput.value = nameInfo.textContent;
  popupEditJobInput.value = jobInfo.textContent;
});

popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit)); //закрытие

popupEditContainer.addEventListener('submit', function (evt) { //загрузка данных в инфу профиля
    evt.preventDefault();

    nameInfo.textContent = popupEditNameInput.value;
    jobInfo.textContent = popupEditJobInput.value;

    closePopup(popupEdit);
});