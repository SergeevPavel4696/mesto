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
            return Promise.reject(`Ошибка: ${response.status}.`);
        }
    }

    initializeProfile() {
        return fetch(`${this._url}${this._cohort}/users/me`, {
            headers: this._headers
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    initialCards() {
        return fetch(`${this._url}${this._cohort}/cards`, {
            headers: this._headers
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    addCard(formValues) {
        return fetch(`${this._url}${this._cohort}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(formValues)
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    deleteCard(id) {
        return fetch(`${this._url}${this._cohort}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    addLike(id) {
        return fetch(`${this._url}${this._cohort}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    deleteLike(id) {
        return fetch(`${this._url}${this._cohort}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    updateUserInfo(formValues) {
        return fetch(`${this._url}${this._cohort}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(formValues)
        }).then(response => {
            return this._checkResponse(response);
        });
    }

    updateUserAvatar(avatar) {
        return fetch(`${this._url}${this._cohort}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        }).then(response => {
            return this._checkResponse(response);
        });
    }
}
