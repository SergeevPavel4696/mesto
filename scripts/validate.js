const validationData = {
    formSelector: '.form',
    inputSelector: '.form__field',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_nonactive',
    inputErrorClass: 'form__field_error',
    errorClass: 'form__field-error_active'
};

const addError = (validation, input) => {
    const errorMessage = document.querySelector(`.${input.id}-error`);
    input.classList.add(validation.inputErrorClass);
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(validation.errorClass);
};

const deleteError = (validation, input) => {
    const errorMessage = document.querySelector(`.${input.id}-error`);
    input.classList.remove(validation.inputErrorClass);
    errorMessage.textContent = '';
    errorMessage.classList.remove(validation.errorClass);
};

const isValid = (validation, input) => {
    if (input.validity.valid) {
        deleteError(validation, input);
    } else {
        addError(validation, input);
    }
};

const invalidInput = (inputArray) => {
    return inputArray.some((input) => {
        return !input.validity.valid;
    })
};

const switchButton = (inputArray, button, validation) => {
    if (invalidInput(inputArray)) {
        button.classList.add(validation.inactiveButtonClass);
    } else {
        button.classList.remove(validation.inactiveButtonClass);
    }
};

const setEventListeners = (form, validation) => {
    const inputArray = Array.from(form.querySelectorAll(validation.inputSelector));
    const button = form.querySelector(validation.submitButtonSelector);
    inputArray.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(validation, input);
            switchButton(inputArray, button, validation);
        });
    });
};

const enableValidation = (validation) => {
    const formArray = Array.from(document.querySelectorAll(validation.formSelector));
    formArray.forEach((form) => {
        setEventListeners(form, validation);
    });
};

const resetErrors = (popup, validation) => {
    const inputArray = Array.from(popup.querySelectorAll(validation.inputSelector));
    const button = popup.querySelector(validation.submitButtonSelector);
    inputArray.forEach((input) => {
        deleteError(validation, input);
    });
    switchButton(inputArray, button, validation);
}

enableValidation(validationData);
