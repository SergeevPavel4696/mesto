import {Card} from "../components/Card.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import {initialCards} from "../scripts/cards.js";
import '../pages/index.css';

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();
const popupProfile = new PopupWithForm(".popup_profile", setInfo, ".profile__info-button");
popupProfile.setEventListeners();
const popupCard = new PopupWithForm(".popup_add", (formValues) => {
    section.addItem(createCard(formValues))
}, ".profile__add");
popupCard.setEventListeners();

const nameSelector = ".profile__info-name";
const aboutMyselfSelector = ".profile__info-about-myself";
const userInfo = new UserInfo({nameSelector, aboutMyselfSelector});

function setInfo(formValues) {
    userInfo.setUserInfo(formValues)
}

const section = new Section({items: initialCards, renderer: createCard}, ".cards");

function createCard(formValues) {
    return new Card(formValues, "card", (link, name) => {
        popupWithImage.open(link, name);
    }).getNewCard();
}

section.renderItems();
