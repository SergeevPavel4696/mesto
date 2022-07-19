export class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            aboutMyself: this._about.textContent
        };
    }

    setUserInfo(meInfo) {
        this._name.textContent = meInfo["name"];
        this._about.textContent = meInfo["about"];
    }
}
