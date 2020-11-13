export class UserInfo {
  constructor(infoSelectors) {
    this._userName = infoSelectors.name;
    this._userInfo = infoSelectors.job;
    this._userAvatar = infoSelectors.avatar;
  }

  getUserInfo() {
    const userName = this._userName.textContent;
    const userInfo = this._userInfo.textContent;
    const profileInfoValues = { userName, userInfo };
    return profileInfoValues;
  }

  getUserAvatar() {
    return userAvatar = this._userAvatar.src;
  }

  setUserInfo(userNameValue, userInfoValue) {
    this._userName.textContent = userNameValue;
    this._userInfo.textContent = userInfoValue;
  }

  setUserAvatar(avatarLink) {
    this._userAvatar.setAttribute('src', avatarLink);
  }
}