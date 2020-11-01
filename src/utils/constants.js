export const cardTemplate = document.querySelector('.template-card').content;
export const cardsContainer = document.querySelector('.elements');

export const formConfig = {
  form: '.popup-form__container',
  formInput: '.popup-form__input',
  inputTypeError: 'popup-form__input_type_error',
  inputErrorActive: 'popup-form__input-error_active',
  formSubmit: '.popup-form__submit',
  buttonDisabled: 'popup-form__submit_disabled'
};

export const popupAdd = document.querySelector('.popup-add');
export const popupAddOpenButton = document.querySelector('.profile__add-button');
export const popupAddContainer = document.querySelector('.popup-add__container');

export const popupImg = document.querySelector('.popup-img');
export const popupImgCaption = document.querySelector('.popup-img__caption');
export const popupImgPhoto = document.querySelector('.popup-img__image');

export const popupEdit = document.querySelector('.popup-edit'); 
export const popupEditOpenButton = document.querySelector('.info__edit-button');
export const popupEditContainer = document.querySelector('.popup-edit__container');
export const popupEditNameInput = document.querySelector('.popup-edit__input_name');
export const popupEditJobInput = document.querySelector('.popup-edit__input_job');

export const infoSelectors = { name: document.querySelector('.info__title'), job: document.querySelector('.info__subtitle') };
export const cardInputSelectors = {title: document.querySelector('.popup-add__input_title'), src: document.querySelector('.popup-add__input_url') };

export const escapeCode = 27;