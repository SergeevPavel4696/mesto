export class UserInfo {
    constructor({nameSelector, aboutMyselfSelector}) {
        this._name = document.querySelector(nameSelector);
        this._aboutMyself = document.querySelector(aboutMyselfSelector);
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
