import {Card} from "./Card.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {UserInfo} from "./UserInfo.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {Section} from "./Section.js";
import {initialCards} from "./cards.js";
import '../pages/index.css';

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();
const popupProfile = new PopupWithForm(".popup_profile", setInfo, openPopupProfile, ".profile__info-button");
popupProfile.setEventListeners();
const popupCard = new PopupWithForm(".popup_add", createNewCard, openPopupCards, ".profile__add");
popupCard.setEventListeners();

const userInfo = new UserInfo({name: ".profile__info-name", aboutMyself: ".profile__info-about-myself"});

function openPopupProfile(popup) {
    popup.getInput("name").value = userInfo.getUserInfo().name;
    popup.getInput("about-myself").value = userInfo.getUserInfo().aboutMyself;
}

function setInfo(popup) {
    userInfo.setUserInfo(popup.getInputValues())
}

function openPopupCards(popup) {
    popup.getInput("card-name").value = "";
    popup.getInput("card-link").value = "";
}

function createCard(popup, cardGrid, cardInfo) {
    cardGrid.prepend(new Card(cardInfo, "card", popup).getNewCard());
}

const section = new Section({items: initialCards, renderer: createCard}, ".cards", popupWithImage);

function createNewCard(popup) {
    section.addItem(popup.getInputValues());
}

section.renderItems();
