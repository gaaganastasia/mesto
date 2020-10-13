import {initialCards} from './initial-сards.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

const cardTemplate = document.querySelector('.template-card').content;
const cardsContainer = document.querySelector('.elements');

const formConfig = {
  form: '.popup-form__container',
  formInput: '.popup-form__input',
  inputTypeError: 'popup-form__input_type_error',
  inputErrorActive: 'popup-form__input-error_active',
  formSubmit: '.popup-form__submit',
  buttonDisabled: 'popup-form__submit_disabled'
};

const formElements = document.querySelectorAll(formConfig['form']);

const popupAdd = document.querySelector('.popup-add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup-add__reset');
const popupAddTitleInput = document.querySelector('.popup-add__input_title');
const popupAddLinkInput = document.querySelector('.popup-add__input_url');
const popupAddContainer = document.querySelector('.popup-add__container');

const popupImg = document.querySelector('.popup-img');
const popupImgCloseButton = document.querySelector('.popup-img__reset');
const popupImgCaption = document.querySelector('.popup-img__caption');
const popupImgPhoto = document.querySelector('.popup-img__image');

const popupEdit = document.querySelector('.popup-edit'); 
const popupEditOpenButton = document.querySelector('.info__edit-button');
const popupEditCloseButton = document.querySelector('.popup-edit__reset');
const popupEditContainer = document.querySelector('.popup-edit__container');
const popupEditNameInput = document.querySelector('.popup-edit__input_name');
const popupEditJobInput = document.querySelector('.popup-edit__input_job');
const nameInfo = document.querySelector('.info__title');
const jobInfo = document.querySelector('.info__subtitle');

const escapeCode = 27;

let openedPopup;



function renderCard(cardTitle, cardSrc) {
  const card = new Card({cardTitle, cardSrc, cardTemplate, openPopup, popupImg, popupImgCaption, popupImgPhoto});
  // отображаем на странице
  prependCard(card.generateCard());
};

//добавляем в массив
function prependCard(element){
  cardsContainer.prepend(element);
}

initialCards.forEach(function(item) {
  renderCard(item.name, item.link);
});

//валидация
formElements.forEach((formElement) => {
  const formVal = new FormValidator(formConfig, formElement);
  formVal.enableValidation();
});

// универсальная ф-я открытия попапа 
function openPopup(popup) { 
  openedPopup = popup;
  popup.classList.add('popup_opened'); 
   
  document.addEventListener('keydown', handleEscClose);  //добавляем слушатели 
  document.addEventListener('click', handleOverlayClose); 
} 
 
// универсальная ф-я закрытия попапа 
function closePopup(popup) { 
  openedPopup = popup; 
  popup.classList.remove('popup_opened'); 
   
  document.removeEventListener('keydown', handleEscClose);  //удаляем слушатели 
  document.removeEventListener('click', handleOverlayClose); 
} 
 
// ф-я закрытия попапа на esc 
function handleEscClose(evt) { 
  if (evt.keyCode == escapeCode) {
    closePopup(openedPopup); 
  }; 
} 
 
// закрытие попапа на оверлей 
function handleOverlayClose(evt) { 
  if (evt.target.classList.contains('popup')) { 
    closePopup(openedPopup); 
  } 
} 

// создаём новую карточку
popupAddContainer.addEventListener('submit', function (evt) { 
    evt.preventDefault();

    renderCard(popupAddTitleInput.value, popupAddLinkInput.value);
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

popupImgCloseButton.addEventListener('click', () => closePopup(popupImg)); //закрытие popup-img
