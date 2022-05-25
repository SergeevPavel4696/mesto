const popups = document.querySelectorAll('.popup');

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
    openPopup(popupProfile);
    resetErrors(popupProfile, validationData);
}

function closePopupProfile() {
    resetErrors(popupProfile, validationData);
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
    resetErrors(popupAdd, validationData);
    openPopup(popupAdd);
}

function closePopupCards() {
    closePopup(popupAdd);
}

function createCard(link, name) {
    const newCard = card.cloneNode(true);
    const cardImage = newCard.querySelector(".card__image");
    cardImage.src = link;
    cardImage.alt = name;
    newCard.querySelector(".card__title").textContent = name;
    newCard.querySelector(".card__like").addEventListener("click", function (event) {
        event.target.classList.toggle("card__like_active");
    });
    newCard.querySelector(".card__trash").addEventListener("click", function () {
        newCard.remove();
    });
    cardImage.addEventListener("click", function () {
        popupPicture.src = link;
        popupPicture.alt = name;
        popupImage.querySelector(".popup__image-title").textContent = name;
        openPopupImage();
    });
    return newCard;
}

function createNewCard(evt) {
    evt.preventDefault();
    cardGrid.prepend(createCard(cardLink.value, cardName.value));
    cardLink.value = "";
    cardName.value = "";
    closePopupCards();
}

function openPopupImage() {
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
