import './pages/index.css';

import {FormValidator} from './components/FormValidator.js';
import {Card} from './components/Card.js';
import {Section} from './components/Section.js';
import {UserInfo} from './components/UserInfo.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {Api} from './components/Api.js';

import { 
  cardTemplate,
  formConfig,
  formAdd,
  formEditAvatar,
  popupEditJobInput,
  popupEditNameInput,
  infoSelectors,
  cardInputSelectors
} from './utils/constants.js';


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '0f98b9d9-de6c-47c4-8011-fc8d2aa2d9ac',
    'Content-Type': 'application/json'
  }
});


const profileInfo = new UserInfo(infoSelectors);

//получаем инфу профиля с сервера
api.getProfileInfo().then(profileInfoData => {
  profileInfo.setUserInfo(profileInfoData.name, profileInfoData.about);
  profileInfo.setUserAvatar(profileInfoData.avatar);
})


const popupEditForm = new PopupWithForm(document.querySelector('.popup-edit'), (evt) => { 
  evt.preventDefault(); 
  renderLoading(true, 'Сохранить');
  profileInfo.setUserInfo(popupEditNameInput.value, popupEditJobInput.value); 

  //отправляем новую инфу профиля на сервер
  api.setProfileInfo(popupEditNameInput.value, popupEditJobInput.value).finally(() => {
    renderLoading(false, 'Сохранить')
  });

  popupEditForm.close(); 
}); 


const popupEditAvatar = new PopupWithForm(document.querySelector('.popup-edit-avatar'), (evt) => {
  evt.preventDefault();
  renderLoading(true, 'Сохранить');
  profileInfo.setUserAvatar(document.querySelector('.popup-edit-avatar__input').value); 

  api.setProfileAvatar(document.querySelector('.popup-edit-avatar__input').value).finally(() => {
    renderLoading(false, 'Сохранить')
  });

  popupEditAvatar.close();
});




const cardList = new Section({renderer: createCard}, document.querySelector('.elements'));

const popupWithImg = new PopupWithImage(document.querySelector('.popup-img'), document.querySelector('.popup-img__caption'), document.querySelector('.popup-img__image'));
const popupDeleteCard = new PopupWithForm(document.querySelector('.popup-delete'), () => {});


//получаем набор карточек с сервера
api.getInitialCards().then(cardsData => {
  cardList.renderItems(cardsData.reverse())
})

function createCard(data) {
  const card = new Card(data, cardTemplate, popupDeleteCard, {
    handleCardClick: () => {popupWithImg.open(data.name, data.link)},
    addLike: (cardId) => {api.addLike(cardId)},
    removeLike: (cardId) => {api.removeLike(cardId)},
    handleCardRemove: (cardId) => {api.deleteCard(cardId)}
  });

  cardList.addItem(card.generateCard());
}


const popupAddForm = new PopupWithForm(document.querySelector('.popup-add'), (evt) => {
  evt.preventDefault();
  renderLoading(true, 'Создать');

  const inputValues = popupAddForm.getInputValues(cardInputSelectors);
  const cardTitle = inputValues.titleValue;
  const cardSrc = inputValues.srcValue;

  //загружаем новую карточку на сервер
  api.createNewCard(cardTitle, cardSrc)
    .then(data => {createCard(data)})
    .finally(() => {renderLoading(false, 'Создать')}); 

  cardInputSelectors.title.value = '';
  cardInputSelectors.src.value = '';

  popupAddForm.close();
});


//ожидание загрузки
function renderLoading(isLoading, text) {
  if (isLoading) {
    document.querySelector('.popup-form__submit').textContent = 'Сохранение...';
  }
  else {
    document.querySelector('.popup-form__submit').textContent = text;
  }
}


const editFormVal = new FormValidator(formConfig, document.querySelector('.popup-edit__container'));
const addFormVal = new FormValidator(formConfig, formAdd);
const editAvatarFormVal = new FormValidator(formConfig, formEditAvatar);

//// валидация и снятие предыдущих error
const validateForm = (formVal) => {
  formVal.inputList.forEach((inputElement) => {
    formVal.hideInputError(inputElement);
  })
  formVal.enableValidation();
}

//////////// слушатели

document.querySelector('.info__edit-button').addEventListener('click', () => { //открытие popup-edit
  popupEditForm.open();

  validateForm(editFormVal);
  editFormVal.buttonElement.classList.remove(formConfig['buttonDisabled']); // активн кнопка

  popupEditNameInput.value = profileInfo.getUserInfo().userName;
  popupEditJobInput.value = profileInfo.getUserInfo().userInfo;
});


document.querySelector('.profile__add-button').addEventListener('click', () => { // открытие popup-add
  popupAddForm.open();

  formAdd.reset();

  validateForm(addFormVal);
});



document.querySelector('.profile__image-container').addEventListener('click', () => { // открытие popup-edit-avatar
  popupEditAvatar.open();

  formEditAvatar.reset();

  validateForm(editAvatarFormVal);
});