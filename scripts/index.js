let popup = document.querySelector(".popup");

let infoButton = document.querySelector(".profile__info-button");
let formClose = popup.querySelector(".popup__close");
let formSave = popup.querySelector(".form");

let infoName = document.querySelector(".profile__info-name");
let infoAboutMyself = document.querySelector(".profile__info-about-myself");
let formFieldName = document.querySelector(".form__field_input_name");
let formFieldAboutMyself = document.querySelector(".form__field_input_about-myself");


let popupAdd = document.querySelector(".popup_add");

let add = document.querySelector(".profile__add");
let formAddClose = popupAdd.querySelector(".popup__close");
let formAddSave = popupAdd.querySelector(".form__save");
let cards = document.querySelector(".cards");

let cardName = popupAdd.querySelector(".form__field_input_card-name");
let cardLink = popupAdd.querySelector(".form__field_input_link");


let popupImage = document.querySelector(".popup_image");

let formImageClose = popupImage.querySelector(".popup__close");


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


function addPopupOpened() {
    popup.classList.add("popup_opened");
    formFieldName.value = infoName.textContent;
    formFieldAboutMyself.value = infoAboutMyself.textContent;
}

function removePopupOpened() {
    popup.classList.remove("popup_opened");
}

function setInfo(evt) {
    evt.preventDefault();
    infoName.textContent = formFieldName.value;
    infoAboutMyself.textContent = formFieldAboutMyself.value;
    removePopupOpened();
}



function addPopupAddOpened() {
    popupAdd.classList.add("popup_opened");
}

function removePopupAddOpened() {
    popupAdd.classList.remove("popup_opened");
}

function createCard() {
    let card = document.querySelector("#card").content.querySelector(".card").cloneNode(true);
    let cl = cardLink.value;
    let cn = cardName.value;
    card.querySelector(".card__image").src = cl;
    card.querySelector(".card__image").alt = cn;
    card.querySelector(".card__title").textContent = cn;
    card.querySelector(".card__like").addEventListener("click", function(event) {
        event.target.classList.toggle("card__like_active");
    });
    card.querySelector(".card__trash").addEventListener("click", function() {
        card.remove();
    });
    card.querySelector(".card__image").addEventListener("click", function() {
        popupImage.classList.add("popup_opened");
        popupImage.querySelector(".popup__image").src = cl;
        popupImage.querySelector(".popup__image").alt = cn;
        popupImage.querySelector(".popup__image-title").textContent = cn;
    });
    cardLink.value = "";
    cardName.value = "";
    return card;
}

function createNewCard(evt) {
    evt.preventDefault();
    cards.prepend(createCard());
    removePopupAddOpened();
}

function removePopupImageOpened() {
    popupImage.classList.remove("popup_opened");
}



initialCards.forEach(function (element) {
    cardName.value = element.name;
    cardLink.value = element.link;
    cards.prepend(createCard());
})

infoButton.addEventListener("click", addPopupOpened);
formClose.addEventListener("click", removePopupOpened);
formSave.addEventListener("submit", setInfo, false);

add.addEventListener("click", addPopupAddOpened);
formAddClose.addEventListener("click", removePopupAddOpened);
formAddSave.addEventListener("click", createNewCard);

formImageClose.addEventListener("click", removePopupImageOpened);





