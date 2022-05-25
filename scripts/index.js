import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const validationData = {
    formSelector: '.form',
    inputSelector: '.form__field',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_nonactive',
    inputErrorClass: 'form__field_error',
    errorClass: 'form__field-error_active'
};

const popups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector(".popup");
const formProfile = popupProfile.querySelector(".form");
const profileFormValidator = new FormValidator(validationData, formProfile);
profileFormValidator.enableValidation();

const infoButton = document.querySelector(".profile__info-button");
const formClose = popupProfile.querySelector(".popup__close");
const formSave = popupProfile.querySelector(".form");

const infoName = document.querySelector(".profile__info-name");
const infoAboutMyself = document.querySelector(".profile__info-about-myself");
const formFieldName = document.querySelector(".form__field_input_name");
const formFieldAboutMyself = document.querySelector(".form__field_input_about-myself");


const popupAdd = document.querySelector(".popup_add");
const formAdd = popupAdd.querySelector(".form");
const addFormValidator = new FormValidator(validationData, formAdd);
addFormValidator.enableValidation();

const profileAdd = document.querySelector(".profile__add");
const formAddClose = popupAdd.querySelector(".popup__close");
const formAddSave = popupAdd.querySelector(".form");
const cardGrid = document.querySelector(".cards");

const cardName = popupAdd.querySelector(".form__field_input_card-name");
const cardLink = popupAdd.querySelector(".form__field_input_link");


export const popupImage = document.querySelector(".popup_image");

export const popupPicture = popupImage.querySelector(".popup__image");

const formImageClose = popupImage.querySelector(".popup__close");

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape);
}

function openPopupProfile() {
    formFieldName.value = infoName.textContent;
    formFieldAboutMyself.value = infoAboutMyself.textContent;
    profileFormValidator._switchButton();
    openPopup(popupProfile);
    profileFormValidator.resetErrors();
}

function closePopupProfile() {
    closePopup(popupProfile);
}

function setInfo(evt) {
    evt.preventDefault();
    infoName.textContent = formFieldName.value;
    infoAboutMyself.textContent = formFieldAboutMyself.value;
    closePopupProfile();
}

function openPopupCards() {
    cardName.value = "";
    cardLink.value = "";
    addFormValidator._switchButton();
    openPopup(popupAdd);
    addFormValidator.resetErrors();
}

function closePopupCards() {
    closePopup(popupAdd);
}

function createCard(link, name) {
    const card = new Card(link, name, "card");
    return card.getNewCard();
}

function createNewCard(evt) {
    evt.preventDefault();
    cardGrid.prepend(createCard(cardLink.value, cardName.value));
    cardLink.value = "";
    cardName.value = "";
    closePopupCards();
}

export function openPopupImage() {
    openPopup(popupImage);
}

function closePopupImage() {
    closePopup(popupImage);
}

function closeByOverlay(evt, popup) {
    if (evt.target === evt.currentTarget) {
        closePopup(popup);
    }
}

popups.forEach(function (popup) {
    popup.addEventListener('mousedown', function (evt) {
        closeByOverlay(evt, popup);
    });
});

initialCards.forEach(function (element) {
    cardGrid.prepend(createCard(element.link, element.name));
});

infoButton.addEventListener("click", openPopupProfile);
formClose.addEventListener("click", closePopupProfile);
formSave.addEventListener("submit", setInfo, false);

profileAdd.addEventListener("click", openPopupCards);
formAddClose.addEventListener("click", closePopupCards);
formAddSave.addEventListener("submit", createNewCard, false);

formImageClose.addEventListener("click", closePopupImage);
