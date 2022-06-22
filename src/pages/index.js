import {Card} from "../components/Card.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import {initialCards} from "../scripts/cards.js";
import '../pages/index.css';

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();
const popupProfile = new PopupWithForm(".popup_profile", setInfo, openPopupProfile, ".profile__info-button");
popupProfile.setEventListeners();
const popupCard = new PopupWithForm(".popup_add", createNewCard, openPopupCards, ".profile__add");
popupCard.setEventListeners();

const nameSelector = ".profile__info-name";
const aboutMyselfSelector = ".profile__info-about-myself";
const userInfo = new UserInfo({nameSelector, aboutMyselfSelector});

function openPopupProfile(popup) {
    popup.getInput("name").value = userInfo.getUserInfo().name;
    popup.getInput("about-myself").value = userInfo.getUserInfo().aboutMyself;
}

function setInfo(formValues) {
    userInfo.setUserInfo(formValues)
}

function openPopupCards(popup) {}

function createCard(popup, cardGrid, cardInfo) {
    cardGrid.prepend(new Card(cardInfo, "card", popup).getNewCard());
}

const section = new Section({items: initialCards, renderer: createCard}, ".cards", popupWithImage);

function createNewCard(formValues) {
    section.addItem(formValues);
}

section.renderItems();
