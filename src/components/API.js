export class API {
    constructor(cohort, token) {
        this._url = "https://mesto.nomoreparties.co/v1/";
        this._cohort = cohort;
        this._token = token;
        this._headers = {authorization: this._token, 'Content-Type': 'application/json'};
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status} - ${response.statusText}`);
        }
    }

    initializeProfile(userInfoHandler, userAvatarHandler) {
        fetch(`${this._url}${this._cohort}/users/me`, {
            headers: this._headers
        }).then(response => {
            return this._checkResponse(response);
        }).then((response) => {
            userInfoHandler(response);
            userAvatarHandler(response);
        })
    }

    addInitialCards(addCardsOnPage) {
        fetch(`${this._url}${this._cohort}/cards`, {
            headers: this._headers
        }).then(response => {
            return this._checkResponse(response);
        }).then((response) => {
            addCardsOnPage(response);
        })
    }

    addCard(formValues, addCard) {
        fetch(`${this._url}${this._cohort}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(formValues)
        }).then(response => {
            return this._checkResponse(response);
        }).then(response => {
            addCard(response);
        })
    }

    deleteCard(id, deleteCard) {
        fetch(`${this._url}${this._cohort}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(response => {
            return this._checkResponse(response);
        }).then(() => {
            deleteCard();
        })
    }



    addLike(id, switchLike) {
        fetch(`${this._url}${this._cohort}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then(response => {
            return this._checkResponse(response);
        }).then((response) => {
            switchLike(response["likes"].length);
            console.log(response["likes"]);
        })
    }

    deleteLike(id, switchLike) {
        fetch(`${this._url}${this._cohort}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(response => {
            return this._checkResponse(response);
        }).then((response) => {
            switchLike(response["likes"].length);
        })
    }



    updateUserInfo(formValues, setUsInf) {
        fetch(`${this._url}${this._cohort}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(formValues)
        }).then(response => {
            return this._checkResponse(response);
        }).then(response => {
            setUsInf(response);
        })
    }

    updateUserAvatar(avatar, setAvatar) {
        fetch(`${this._url}${this._cohort}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        }).then(response => {
            return this._checkResponse(response);
        }).then(response => {
            setAvatar(response);
        })
    }
}
