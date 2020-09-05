const popup = document.querySelector('.popup');
const editButton = document.querySelector('.info__edit-button');
const closeIcon = document.querySelector('.popup__close-icon');

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__form_title');
let jobInput = document.querySelector('.popup__form_subtitle');
let nameInfo = document.querySelector('.info__title');
let jobInfo = document.querySelector('.info__subtitle');

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;

}

function popupClose() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    nameInfo.textContent = nameInputValue;
    jobInfo.textContent = jobInputValue;

    popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

editButton.addEventListener('click', popupOpen);
closeIcon.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);