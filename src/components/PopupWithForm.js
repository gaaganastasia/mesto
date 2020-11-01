import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunc) {
    super(popupSelector);
    this._submit = submitFunc;
  }

  _getInputValues(inputSelectors) {
    const titleValue = inputSelectors.title.value;
    const srcValue = inputSelectors.src.value;
    const inputValues = {titleValue, srcValue};
    return inputValues;
  }

  setEventListeners() {
    this._popup.querySelector('.popup-form__container').addEventListener('submit', this._submit);

    super.setEventListeners();
  }
}