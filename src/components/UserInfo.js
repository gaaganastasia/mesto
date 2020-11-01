export class UserInfo {
  constructor(infoSelectors) {
    this._userName = infoSelectors.name;
    this._userInfo = infoSelectors.job;
  }

  getUserInfo() {
    const userName = this._userName.textContent;
    const userInfo = this._userInfo.textContent;
    const profileInfoValues = { userName, userInfo };
    return profileInfoValues;
  }

  setUserInfo(userNameValue, userInfoValue) {
    this._userName.textContent = userNameValue;
    this._userInfo.textContent = userInfoValue;
  }
}