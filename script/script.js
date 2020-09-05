const popup = document.querySelector('.popup');
const editButton = document.querySelector('.info__edit-button');
const closeIcon = document.querySelector('.popup__close-icon');

function popupOpen() {
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpen);


function popupClose() {
  popup.classList.remove('popup_opened');
}

closeIcon.addEventListener('click', popupClose);

//

let formElement = document.querySelector('.popup__container');

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    let nameInput = document.querySelector('.popup__title');
    let jobInput = document.querySelector('.popup__subtitle');

    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    let nameInfo = document.querySelector('.info__title');
    let jobInfo = document.querySelector('.info__subtitle');

    nameInfo.textContent = nameInputValue;
    jobInfo.textContent = jobInputValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupClose);