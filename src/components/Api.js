const handleOriginalResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

const handleError = (err) => {
  console.log(err);
};

export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      //карточки
      method: "GET",
      headers: this._headers,
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  setProfileInfo(userName, userInfo) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userInfo,
      }),
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  setProfileAvatar(userAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar,
      }),
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  createNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(handleOriginalResponse)
      .catch(handleError);
  }
}
