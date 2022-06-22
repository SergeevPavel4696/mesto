import {Popup} from "./Popup.js";
import {FormValidator} from "./FormValidator.js";

let _validationData = {
    formSelector: '.form',
    inputSelector: '.form__field',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_nonactive',
    inputErrorClass: 'form__field_error',
    errorClass: 'form__field-error_active'
};

export class PopupWithForm extends Popup {
    constructor(popupSelector, callBack, openPopup, openButton) {
        super(popupSelector);
        this._callBack = callBack;
        this._openPopup = openPopup;
        this._openButton = document.querySelector(openButton);
        this._form = this._popup.querySelector(_validationData.formSelector);
        this._inputList = this._form.querySelectorAll(_validationData.inputSelector);
        this._formValidator = new FormValidator(_validationData, this._form);
        this._formValidator.enableValidation();
        this._fieldsByName = {};
    }

    getInput(name) {
        return this._fieldsByName[name];
    }

    getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    _createFieldsByName() {
        this._inputList.forEach(input => this._fieldsByName[input.name] = input);
    }

    _open() {
        this._openPopup(this);
        this._formValidator.resetErrors();
        super._open();
    }

    setEventListeners() {
        this._createFieldsByName();
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this);
            this._close();
        }, false);
        this._openButton.addEventListener('click', () => {
            this._open();
        }, false);
    }
}
