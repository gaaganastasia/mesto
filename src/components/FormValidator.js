export class FormValidator {
  constructor(formConfig, formElement) {
    this._formConfig = formConfig;
    this._formElement = formElement;

    this.inputList = Array.from(
      this._formElement.querySelectorAll(this._formConfig["formInput"])
    );
    this.buttonElement = this._formElement.querySelector(
      this._formConfig["formSubmit"]
    );
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._formConfig["inputTypeError"]);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._formConfig["inputErrorActive"]);
  }

  hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._formConfig["inputTypeError"]);
    this._errorElement.classList.remove(this._formConfig["inputErrorActive"]);
    this._errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  enableValidation() {
    this._toggleButtonState(this.inputList, this.buttonElement);

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this.inputList, this.buttonElement);
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._formConfig["buttonDisabled"]);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(this._formConfig["buttonDisabled"]);
      buttonElement.removeAttribute("disabled");
    }
  }
}
