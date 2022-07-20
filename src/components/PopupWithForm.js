import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, buttonSubmitText, validationData,
                getFieldsValues, submitFormHandler, buttonOpenPopupHandler, formValidator) {
        super(popupSelector, buttonSubmitText);
        this._getFieldsValues = getFieldsValues;
        this._submitFormHandler = submitFormHandler;
        this._buttonOpenPopupHandler = document.querySelector(buttonOpenPopupHandler);
        this._form = this._popup.querySelector(validationData.formSelector);
        this._inputList = this._form.querySelectorAll(validationData.inputSelector);
        this._formValidator = formValidator(this._form);
        this._formValidator.enableValidation();
        this._fieldsByName = {};
        this.formSubmitButton = this._popup.querySelector(validationData.submitButtonSelector);
        this._submitButtonText = this.formSubmitButton.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    _createFieldsByName() {
        this._inputList.forEach(input => this._fieldsByName[input.name] = input);
    }

    open() {
        this.formSubmitButton.textContent = this._submitButtonText;
        this._inputList.forEach(input => {
            input.value = this._getFieldsValues(this)[input.name];
        });
        this._formValidator.resetErrors();
        super.open();
    }

    close() {
        super.close();
        setTimeout(() => {this._form.reset()}, 300);
    }

    _submitForm = (evt) => {
        evt.preventDefault();
        this.formSubmitButton.textContent = this._submitButtonEventText;
        this._submitFormHandler(this._getInputValues());
    }

    _clickButton = () => {
        this.open();
    }

    setEventListeners() {
        this._createFieldsByName();
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm, false);
        this._buttonOpenPopupHandler.addEventListener('click', this._clickButton, false);
    }
}
