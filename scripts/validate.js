const validation = {
  form: '.popup-form__container',
  formInput: '.popup-form__form',
  inputTypeError: 'popup-form__input_type_error',
  inputErrorActive: 'popup-form__input-error_active',
  formSubmit: '.popup-form__save-button',
  buttonDisabled: 'popup-form__save-button_disabled'
};

const showInputError = (formElement, inputElement, errorMessage, validation) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validation['inputTypeError']);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validation['inputErrorActive']);
};

const hideInputError = (formElement, inputElement, validation) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validation['inputTypeError']);
  errorElement.classList.remove(validation['inputErrorActive']);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validation) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validation);
  } else {
    hideInputError(formElement, inputElement, validation);
  }
};

const setEventListeners = (formElement, validation) => {
  const inputList = Array.from(formElement.querySelectorAll(validation['formInput']));
  const buttonElement = formElement.querySelector(validation['formSubmit']);

  toggleButtonState(inputList, buttonElement, validation);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validation);
      toggleButtonState(inputList, buttonElement, validation);
    });
  });
}; 

const enableValidation = (validation) => {
  const formList = Array.from(document.querySelectorAll(validation['form']));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validation);
  });
};

enableValidation(validation);


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}


function toggleButtonState(inputList, buttonElement, validation) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validation['buttonDisabled']);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validation['buttonDisabled']);
    buttonElement.removeAttribute('disabled');
  } 
  //console.log(validation['buttonDisabled']);
}