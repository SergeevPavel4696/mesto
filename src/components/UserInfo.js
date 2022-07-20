export class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
        this.avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this.avatar.src,
            id: this.id,
            cohort: this.cohort
        };
    }

    setUserInfo(meInfo) {
        this._name.textContent = meInfo["name"];
        this._about.textContent = meInfo["about"];
        this.avatar.src = meInfo["avatar"];
        this.id = meInfo["_id"];
        this.cohort = meInfo["cohort"];
    }
}
