export class UserInfo {
    constructor({name, aboutMyself}) {
        this._name = document.querySelector(name);
        this._aboutMyself = document.querySelector(aboutMyself);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            aboutMyself: this._aboutMyself.textContent
        };
    }

    setUserInfo(meInfo) {
        this._name.textContent = meInfo["name"];
        this._aboutMyself.textContent = meInfo["about-myself"];
    }
}
