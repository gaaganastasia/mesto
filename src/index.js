import './pages/index.css';

import {initialCards} from './utils/initial-сards.js';
import {FormValidator} from './components/FormValidator.js';
import {Card} from './components/Card.js';
import {Section} from './components/Section.js';
import {UserInfo} from './components/UserInfo.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';

import { cardTemplate, cardsContainer, formConfig, popupAdd, popupAddOpenButton, popupAddContainer, popupImg, popupImgCaption, popupImgPhoto, popupEdit, popupEditContainer, popupEditJobInput, popupEditNameInput, popupEditOpenButton, infoSelectors, cardInputSelectors } from './utils/constants.js';

/////////////////классы

const popupWithImg = new PopupWithImage(popupImg, popupImgCaption, popupImgPhoto);
const profileInfo = new UserInfo(infoSelectors);

//валидация
const validateForm = (formElement) => {
  const formVal = new FormValidator(formConfig, formElement);
  formVal.enableValidation();
}

const popupEditForm = new PopupWithForm(popupEdit, (evt) => {
  evt.preventDefault();
  profileInfo.setUserInfo(popupEditNameInput.value, popupEditJobInput.value);
  popupEditForm.close();
});

const popupAddForm = new PopupWithForm(popupAdd, (evt) => {
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
}, cardsContainer);

cardList.renderItems();

function handleCardClick(evt) {
  const cardTitle = evt.target.getAttribute('alt');
  const cardSrc = evt.target.getAttribute('src');
  popupWithImg.open(cardTitle, cardSrc);
}

//////////// слушатели

popupEditOpenButton.addEventListener('click', () => { //открытие popup-edit
  popupEditForm.open();
  validateForm(popupEditContainer);

  popupEditNameInput.value = profileInfo.getUserInfo().userName;
  popupEditJobInput.value = profileInfo.getUserInfo().userInfo;
});


popupAddOpenButton.addEventListener('click', () => { // открытие popup-add
  popupAddForm.open();
  validateForm(popupAddContainer);
});
