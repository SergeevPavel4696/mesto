import {Card} from "../components/Card.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupDeleteCard} from "../components/PopupDeleteCard.js";
import {UserInfo} from "../components/UserInfo.js";
import {Section} from "../components/Section.js";
import {API} from "../components/API.js";
import {validationData} from "../utils/constants.js";
import {FormValidator} from "../components/FormValidator.js";
import '../pages/index.css';

const nameSelector = ".profile__info-name";
const aboutSelector = ".profile__info-about-myself";
const avatarSelector = ".profile__avatar-image";
const userInfo = new UserInfo({nameSelector, aboutSelector, avatarSelector});
const section = new Section({renderer: createCard}, ".cards");
const api = new API("cohort-45", "4747a9b7-656d-443b-a639-e96059ef3169");

function getProfileInputValues(popup) {
    setTimeout(() => {
        popup.formSubmitButton.focus()
    }, 100);
    return userInfo.getUserInfo();
}

function getCardInputValues(popup) {
    return {name: "", link: ""};
}

function getAvatarInputValues(popup) {
    return {avatar: ""};
}

function getFormValidator(form) {
    return new FormValidator(validationData, form);
}

function handleResponse(response, popup) {
    response
        .then(() => {
            popup.close();
        })
        .catch((err) => {
            console.log(err);
            popup.formSubmitButton.textContent = "Произошла ошибка";
        })
        .finally(() => {
            setTimeout(() => {
                popup.formSubmitButton.textContent = popup._submitButtonText;
            }, 5000);
        });
}

Promise.all([api.initializeProfile(), api.initialCards()])
    .then(([info, cards]) => {
        userInfo.setUserInfo(info);
        section.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    })

function addCard(formValues) {
    handleResponse(api.addCard(formValues)
        .then(response => {
            section.addItem(createCard(response));
        }), popupCardAdd);
}

function deleteCard(id, card) {
    handleResponse(api.deleteCard(id)
        .then(() => {
            card.deleteCard();
        }), popupCardDelete);
}

function addLike(id, switchLike) {
    api.addLike(id)
        .then((response) => {
            switchLike(response["likes"].length);
        })
        .catch((err) => {
            console.log(err);
        });
}

function deleteLike(id, switchLike) {
    api.deleteLike(id)
        .then((response) => {
            switchLike(response["likes"].length);
        })
        .catch((err) => {
            console.log(err);
        });
}

function updateUserAvatar(formValues) {
    handleResponse(api.updateUserAvatar(formValues)
        .then(response => {
            userInfo.setUserInfo(response);
        }), popupAvatar);
}

function updateUserInfo(formValues) {
    handleResponse(api.updateUserInfo(formValues)
        .then(response => {
            userInfo.setUserInfo(response);
        }), popupProfile);
}

function createCard(formValues) {
    const newCard = new Card(formValues, "card", (link, name) => {
        popupWithImage.open(link, name);
    }, (id, card) => {
        popupCardDelete.open(card, () => {
            deleteCard(id, newCard);
        });
    }, addLike, deleteLike, userInfo.id);
    return newCard.getNewCard();
}

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();
const popupProfile = new PopupWithForm(".popup_profile", "Сохранение...", validationData, getProfileInputValues,
    updateUserInfo, ".profile__info-button", getFormValidator);
popupProfile.setEventListeners();
const popupCardAdd = new PopupWithForm(".popup_add", "Отправка...", validationData, getCardInputValues,
    addCard, ".profile__add", getFormValidator);
popupCardAdd.setEventListeners();
const popupAvatar = new PopupWithForm(".popup_avatar", "Сохранение...", validationData, getAvatarInputValues,
    updateUserAvatar, ".profile__avatar-edit", getFormValidator);
popupAvatar.setEventListeners();
const popupCardDelete = new PopupDeleteCard(".popup_delete", "Удаление...", validationData);
popupCardDelete.setEventListeners();
