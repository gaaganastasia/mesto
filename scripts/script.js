const cardTemplate = document.querySelector('.template-card').content;
const cardsContainer = document.querySelector('.elements');

const popupAdd = document.querySelector('.popup-add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup-add__close-icon');
const popupAddTitleInput = document.querySelector('.popup-add__form_title');
const popupAddLinkInput = document.querySelector('.popup-add__form_subtitle');
const popupAddContainer = document.querySelector('.popup-add__container');

const popupImgCaption = document.querySelector('.popup-img__caption');
const popupImgPhoto = document.querySelector('.popup-img__image');
const popupImgCloseButton = document.querySelector('.popup-img__close-icon');

const popupEdit = document.querySelector('.popup-edit'); 
const popupEditOpenButton = document.querySelector('.info__edit-button');
const popupEditCloseButton = document.querySelector('.popup-edit__close-icon');//edit
const popupEditContainer = document.querySelector('.popup-edit__container');
const popupEditNameInput = document.querySelector('.popup-edit__form_title');
const popupEditJobInput = document.querySelector('.popup-edit__form_subtitle');
const nameInfo = document.querySelector('.info__title');
const jobInfo = document.querySelector('.info__subtitle');


//создание карточки
function createCard(src, title) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image')
  const removeButton = cardElement.querySelector('.element__delete');
  const likeButton = cardElement.querySelector('.element__like');
  const popupImg = document.querySelector('.popup-img');

  cardImage.setAttribute('src', src);
  cardElement.querySelector('.element__title').textContent = title;
  cardImage.setAttribute('alt', title);

  //лайки
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  
  //удаление карточек
  removeButton.addEventListener('click', function () {
    const closeElement = removeButton.closest('.element');
    closeElement.remove();
  });

  //попап открытия картинки
  cardImage.addEventListener('click', function () {
    openPopup(popupImg);

    popupImgCaption.textContent = title;
    popupImgPhoto.src = src;
    popupImgPhoto.alt = title;

    popupImgCloseButton.addEventListener('click', () => closePopup(popupImg));
  });

  return cardElement;
}

//добавляем карточку в массив
function prependCard(element) { 
  cardsContainer.prepend(element); 
}

// загружаем карточки на страницу
function uploadCard(src, title) { 
  prependCard(createCard(src, title));
}

initialCards.forEach(function (card) {
  uploadCard(card.link, card.name);
});

// универсальная ф-я открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// универсальная ф-я закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


// создаём новую карточку
popupAddContainer.addEventListener('submit', function (evt) { 
    evt.preventDefault();

    uploadCard(popupAddLinkInput.value, popupAddTitleInput.value);
    closePopup(popupAdd);
});

//попап редактирования профиля
popupEditOpenButton.addEventListener('click', function () { //открытие
  openPopup(popupEdit);
  popupEditNameInput.value = nameInfo.textContent;
  popupEditJobInput.value = jobInfo.textContent;
});

popupEditContainer.addEventListener('submit', function (evt) { //загрузка данных в инфу профиля
    evt.preventDefault();

    nameInfo.textContent = popupEditNameInput.value;
    jobInfo.textContent = popupEditJobInput.value;

    closePopup(popupEdit);
});

popupAddOpenButton.addEventListener('click', () => openPopup(popupAdd)); // открытие popup-add

popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd)); //закрытие popup-add

popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit)); //закрытие popup-edit