import {Popup} from "./Popup.js";
import {FormValidator} from "./FormValidator.js";
import {validationData} from "../utils/constants.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler, openButtonHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._openButtonHandler = document.querySelector(openButtonHandler);
        this._form = this._popup.querySelector(validationData.formSelector);
        this._inputList = this._form.querySelectorAll(validationData.inputSelector);
        this._formValidator = new FormValidator(validationData, this._form);
        this._formValidator.enableValidation();
        this._fieldsByName = {};
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
        super.open();
        this._formValidator.resetErrors();
    }

    close() {
        super.close();
        this._form.reset();
    }

    _submitForm = (evt) => {
        evt.preventDefault();
        this._submitFormHandler(this._getInputValues());
        this.close();
    }

    _clickButton = () => {
        this.open();
    }

    setEventListeners() {
        this._createFieldsByName();
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm, false);
        this._openButtonHandler.addEventListener('click', this._clickButton, false);
    }
}
