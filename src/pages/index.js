import {Card} from "../components/Card.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupDeleteCard} from "../components/PopupDeleteCard.js";
import {UserInfo} from "../components/UserInfo.js";
import {Section} from "../components/Section.js";
import {API} from "../components/API.js";
import '../pages/index.css';

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();
const popupProfile = new PopupWithForm(".popup_profile", "Сохранение...", setInfo, ".profile__info-button");
popupProfile.setEventListeners();
const popupCardAdd = new PopupWithForm(".popup_add", "Отправка...", addCard, ".profile__add");
popupCardAdd.setEventListeners();
const popupAvatar = new PopupWithForm(".popup_avatar", "Сохранение...", setAvatarInfo, ".profile__avatar-edit");
popupAvatar.setEventListeners();
const popupCardDelete = new PopupDeleteCard(".popup_delete", "Удаление...");
popupCardDelete.setEventListeners();

const nameSelector = ".profile__info-name";
const aboutSelector = ".profile__info-about-myself";
const userInfo = new UserInfo({nameSelector, aboutSelector});
const avatar = document.querySelector(".profile__avatar-image");
const section = new Section({renderer: createCard}, ".cards");

const api = new API("cohort-45", "4747a9b7-656d-443b-a639-e96059ef3169");

api.initializeProfile(usInf => {
    userInfo.setUserInfo(usInf);
}, (usAv) => {
    setAvatarInfo(usAv);
});

api.addInitialCards((cards) => {
    section.renderItems(cards);
});

function addCard(formValues) {
    api.addCard(formValues, formValues => {
        section.addItem(createCard(formValues))
    });
}

function addLike(id, switchLike) {
    api.addLike(id, switchLike);
}

function deleteLike(id, switchLike) {
    api.deleteLike(id, switchLike);
}

function setAvatarInfo(formValues) {
    api.updateUserAvatar(formValues, formValues => {
        avatar.src = formValues["avatar"];
    })
}

function setInfo(formValues) {
    api.updateUserInfo(formValues, formValues => {
        userInfo.setUserInfo(formValues);
    });
}

function createCard(formValues) {
    const newCard = new Card(formValues, "card", (link, name) => {
        popupWithImage.open(link, name);
    }, (id, card) => {
        popupCardDelete.open(card, () => {
            popupCardDelete.close();
            api.deleteCard(id, () => {
                newCard.deleteCard();
            });
        });
    }, addLike, deleteLike, userInfo.id);
    return newCard.getNewCard();
}
