export class FormValidator {
  constructor(formElement, validation) {
    this._validation = validation;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) { 
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._validation['inputTypeError']); 
    this._errorElement.textContent = errorMessage; 
    this._errorElement.classList.add(this._validation['inputErrorActive']); 
  }; 

  _hideInputError(inputElement) { 
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._validation['inputTypeError']); 
    this._errorElement.classList.remove(this._validation['inputErrorActive']); 
    this._errorElement.textContent = ''; 
  };

  _checkInputValidity(inputElement) { 
    if (!inputElement.validity.valid) { 
      this._showInputError(inputElement, inputElement.validationMessage); 
    } else { 
      this._hideInputError(inputElement); 
    } 
  };

  enableValidation() { 
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validation['formInput'])); 
    this._buttonElement = this._formElement.querySelector(this._validation['formSubmit']); 
   
    this._toggleButtonState(this._inputList, this._buttonElement); 
   
    this._inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkInputValidity(inputElement); 
        this._toggleButtonState(this._inputList, this._buttonElement); 
      }); 
    }); 
  };

  _hasInvalidInput(inputList) { 
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid; 
    }) 
  } 

  _toggleButtonState(inputList, buttonElement) { 
    if (this._hasInvalidInput(inputList)) { 
      buttonElement.classList.add(this._validation['buttonDisabled']); 
      buttonElement.setAttribute('disabled', true); 
    } else { 
      buttonElement.classList.remove(this._validation['buttonDisabled']); 
      buttonElement.removeAttribute('disabled'); 
    }  
  } 
}
