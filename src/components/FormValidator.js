export class FormValidator {
    constructor(validation, form) {
        this._form = form;
        this._inputSelector = validation.inputSelector;
        this._submitButtonSelector = validation.submitButtonSelector;
        this._inactiveButtonClass = validation.inactiveButtonClass;
        this._inputErrorClass = validation.inputErrorClass;
        this._errorClass = validation.errorClass;
        this._inputArray = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector);
    }

    _addError(input) {
        const errorMessage = document.querySelector(`.${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        errorMessage.textContent = input.validationMessage;
        errorMessage.classList.add(this._errorClass);
    }

    _deleteError(input) {
        const errorMessage = document.querySelector(`.${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass);
    }

    _isValid(input) {
        if (input.validity.valid) {
            this._deleteError(input);
        } else {
            this._addError(input);
        }
    }

    _invalidInput() {
        return this._inputArray.some((input) => {
            return !input.validity.valid;
        })
    }

    _switchButton() {
        if (this._invalidInput()) {
            this._button.classList.add(this._inactiveButtonClass);
        } else {
            this._button.classList.remove(this._inactiveButtonClass);
        }
    }

    enableValidation() {
        this._inputArray.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input);
                this._switchButton();
            });
        });
    }

    resetErrors() {
        this._inputArray.forEach((input) => {
            this._deleteError(input);
        });
        this._switchButton();
    }
}
