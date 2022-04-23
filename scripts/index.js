const popupProfile = document.querySelector(".popup");

const card = document.querySelector("#card").content.querySelector(".card");

const infoButton = document.querySelector(".profile__info-button");
const formClose = popupProfile.querySelector(".popup__close");
const formSave = popupProfile.querySelector(".form");

const infoName = document.querySelector(".profile__info-name");
const infoAboutMyself = document.querySelector(".profile__info-about-myself");
const formFieldName = document.querySelector(".form__field_input_name");
const formFieldAboutMyself = document.querySelector(".form__field_input_about-myself");


const popupAdd = document.querySelector(".popup_add");

const profileAdd = document.querySelector(".profile__add");
const formAddClose = popupAdd.querySelector(".popup__close");
const formAddSave = popupAdd.querySelector(".form");
const cardGrid = document.querySelector(".cards");

const cardName = popupAdd.querySelector(".form__field_input_card-name");
const cardLink = popupAdd.querySelector(".form__field_input_link");


const popupImage = document.querySelector(".popup_image");

const popupPicture = popupImage.querySelector(".popup__image");

const formImageClose = popupImage.querySelector(".popup__close");

function switchPopup(popup) {
    popup.classList.toggle("popup_opened");
}

function switchPopupProfile() {
    switchPopup(popupProfile);
    formFieldName.value = infoName.textContent;
    formFieldAboutMyself.value = infoAboutMyself.textContent;
}

function setInfo(evt) {
    evt.preventDefault();
    infoName.textContent = formFieldName.value;
    infoAboutMyself.textContent = formFieldAboutMyself.value;
    switchPopup(popupProfile);
}

function switchPopupCards() {
    switchPopup(popupAdd);
}

function createCard(link, name) {
    const newCard = card.cloneNode(true);
    const cardImage = newCard.querySelector(".card__image");
    cardImage.src = link;
    cardImage.alt = name;
    newCard.querySelector(".card__title").textContent = name;
    newCard.querySelector(".card__like").addEventListener("click", function(event) {
        event.target.classList.toggle("card__like_active");
    });
    newCard.querySelector(".card__trash").addEventListener("click", function() {
        newCard.remove();
    });
    cardImage.addEventListener("click", function() {
        switchPopupImage();
        popupPicture.src = link;
        popupPicture.alt = name;
        popupImage.querySelector(".popup__image-title").textContent = name;
    });
    return newCard;
}

function createNewCard(evt) {
    evt.preventDefault();
    cardGrid.prepend(createCard(cardLink.value, cardName.value));
    cardLink.value = "";
    cardName.value = "";
    switchPopupCards();
}

function switchPopupImage() {
    switchPopup(popupImage);
}


initialCards.forEach(function (element) {
    cardGrid.prepend(createCard(element.link, element.name));
})

infoButton.addEventListener("click", switchPopupProfile);
formClose.addEventListener("click", switchPopupProfile);
formSave.addEventListener("submit", setInfo, false);

profileAdd.addEventListener("click", switchPopupCards);
formAddClose.addEventListener("click", switchPopupCards);
formAddSave.addEventListener("submit", createNewCard, false);

formImageClose.addEventListener("click", switchPopupImage);
