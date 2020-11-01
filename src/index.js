import './pages/index.css';

import {initialCards} from './utils/initial-сards.js';
import {FormValidator} from './components/FormValidator.js';
import {Card} from './components/Card.js';
import {Section} from './components/Section.js';
import {UserInfo} from './components/UserInfo.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';

import { 
  cardTemplate,
  formConfig,
  popupEditJobInput,
  popupEditNameInput,
  infoSelectors,
  cardInputSelectors
} from './utils/constants.js';

/////////////////классы

const popupWithImg = new PopupWithImage(document.querySelector('.popup-img'), document.querySelector('.popup-img__caption'), document.querySelector('.popup-img__image'));
const profileInfo = new UserInfo(infoSelectors);

//валидация
const validateForm = (formElement) => {
  const formVal = new FormValidator(formConfig, formElement);
  formVal.enableValidation();
}

const popupEditForm = new PopupWithForm(document.querySelector('.popup-edit'), (evt) => {
  evt.preventDefault();
  profileInfo.setUserInfo(popupEditNameInput.value, popupEditJobInput.value);
  popupEditForm.close();
});

const popupAddForm = new PopupWithForm(document.querySelector('.popup-add'), (evt) => {
  evt.preventDefault();
  const inputValues = popupAddForm._getInputValues(cardInputSelectors);
  const cardTitle = inputValues.titleValue;
  const cardSrc = inputValues.srcValue;
  const card = new Card({cardTitle, cardSrc, cardTemplate}, handleCardClick);
  cardList.addItem(card.generateCard());

  cardInputSelectors.title.value = '';
  cardInputSelectors.src.value = '';

  popupAddForm.close();
});

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardTitle = item.name; //достаём из initial-cards
    const cardSrc = item.link;

    const card = new Card({cardTitle, cardSrc, cardTemplate}, handleCardClick);
    cardList.addItem(card.generateCard());
  }
}, document.querySelector('.elements'));

cardList.renderItems();

function handleCardClick(evt) {
  const cardTitle = evt.target.getAttribute('alt');
  const cardSrc = evt.target.getAttribute('src');
  popupWithImg.open(cardTitle, cardSrc);
}

//////////// слушатели

document.querySelector('.info__edit-button').addEventListener('click', () => { //открытие popup-edit
  popupEditForm.open();
  validateForm(document.querySelector('.popup-edit__container'));

  popupEditNameInput.value = profileInfo.getUserInfo().userName;
  popupEditJobInput.value = profileInfo.getUserInfo().userInfo;
});


document.querySelector('.profile__add-button').addEventListener('click', () => { // открытие popup-add
  popupAddForm.open();
  validateForm(document.querySelector('.popup-add__container'));
});
