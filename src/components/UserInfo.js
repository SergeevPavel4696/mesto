export class UserInfo {
    constructor({nameSelector, aboutSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
    }

    setUserInfo(meInfo) {
        this._name.textContent = meInfo["name"];
        this._about.textContent = meInfo["about"];
        this.id = meInfo["_id"];
    }
}
