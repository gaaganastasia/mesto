export const cardTemplate = document.querySelector(".template-card").content;

export const formConfig = {
  form: ".popup-form__container",
  formInput: ".popup-form__input",
  inputTypeError: "popup-form__input_type_error",
  inputErrorActive: "popup-form__input-error_active",
  formSubmit: ".popup-form__submit",
  buttonDisabled: "popup-form__submit_disabled",
};

export const formAdd = document.querySelector(".popup-add__container");
export const formEditAvatar = document.querySelector(
  ".popup-edit-avatar__container"
);
export const popupEditOpenButton = document.querySelector(".info__edit-button");
export const popupEditNameInput = document.querySelector(
  ".popup-edit__input_name"
);
export const popupEditJobInput = document.querySelector(
  ".popup-edit__input_job"
);
export const popupEditAvatarInput = document.querySelector(".popup-edit-avatar__input");

export const infoSelectors = {
  name: document.querySelector(".info__title"),
  job: document.querySelector(".info__subtitle"),
  avatar: document.querySelector(".profile__image"),
};

export const cardInputSelectors = {
  title: document.querySelector(".popup-add__input_title"),
  src: document.querySelector(".popup-add__input_url"),
};
