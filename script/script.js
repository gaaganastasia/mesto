const initialCards = [ //первоначальный набор карточек на странице
  {
      name: 'Neon',
      link: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=823&q=80'
  },
  {
      name: 'Cyberpunk',
      link: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
  },
  {
      name: 'Neon Lights',
      link: 'https://images.unsplash.com/photo-1530919424169-4b95f917e937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80'
  },
  {
      name: 'Light Background',
      link: 'https://images.unsplash.com/photo-1515693516428-3c89b92d3220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
  },
  {
      name: 'Light Tunnel',
      link: 'https://images.unsplash.com/photo-1553675559-5046b59a5ca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
  },
  {
      name: 'Neon City',
      link: 'https://images.unsplash.com/photo-1582476098883-598790a693d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  }
];


const cardTemplate = document.querySelector('.template-card').content;
const cardsEl = document.querySelector('.elements');

function cardUpload(src, title) {  //создание карточки
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image')
  const removeButton = cardElement.querySelector('.element__delete');
  const likeButton = cardElement.querySelector('.element__like');

  cardImage.setAttribute('src', src);
  cardElement.querySelector('.element__title').textContent = title;
  
  likeButton.addEventListener('click', function cardLike(evt) {  //лайки
    evt.target.classList.toggle('element__like_active');
  });
  
  removeButton.addEventListener('click', function cardRemove() {  //удаление карточек
    const closeElement = removeButton.closest('.element');
    closeElement.remove();
  });

  const popupImgCloseIcon = document.querySelector('.popup-img__close-icon');
  const popupImg = document.querySelector('.popup-img');

  cardImage.addEventListener('click', function popupImgOpen() {  //попап открытия картинки
    popupImg.classList.add('popup-img_opened');

    let popupImgCaption = document.querySelector('.popup-img__caption');
    let popupImgImage = document.querySelector('.popup-img__image');
    popupImgCaption.textContent = title;
    popupImgImage.src = src;
  });
  
  function popupImgClose() {
    popupImg.classList.remove('popup-img_opened');
  }

  popupImgCloseIcon.addEventListener('click', popupImgClose);

  cardsEl.prepend(cardElement);  //добавляем в массив
}

for (let i = 0; i < initialCards.length; i++) {  //загружаем карточки на страницу
  cardUpload(initialCards[i].link, initialCards[i].name);
}



const popupAdd = document.querySelector('.popup-add'); 
const addButton = document.querySelector('.profile__add-button');
const popupAddCloseIcon = document.querySelector('.popup-add__close-icon');
const popupAddFormElement = document.querySelector('.popup-add__container');

//попап добавления карточки
addButton.addEventListener('click', function popupAddOpen() {
  popupAdd.classList.add('popup_opened');
});

function popupAddClose() {
  popupAdd.classList.remove('popup_opened');
  popupAddLinkInput.value = '';
  popupAddTitleInput.value = '';
}

popupAddCloseIcon.addEventListener('click', popupAddClose);

let popupAddTitleInput = document.querySelector('.popup-add__form_title');
let popupAddLinkInput = document.querySelector('.popup-add__form_subtitle');

function popupAddSubmitHandler (evt) { // создаём новую карточку
    evt.preventDefault();

    cardUpload(popupAddLinkInput.value, popupAddTitleInput.value);
    popupAddClose();
}

popupAddFormElement.addEventListener('submit', popupAddSubmitHandler);

const popupEdit = document.querySelector('.popup-edit'); 
const editButton = document.querySelector('.info__edit-button');
const popupEditCloseIcon = document.querySelector('.popup-edit__close-icon');
const popupEditFormElement = document.querySelector('.popup-edit__container');

let popupEditNameInput = document.querySelector('.popup-edit__form_title');
let popupEditJobInput = document.querySelector('.popup-edit__form_subtitle');
let nameInfo = document.querySelector('.info__title');
let jobInfo = document.querySelector('.info__subtitle');

//попап редактирования профиля
editButton.addEventListener('click', function popupEditOpen() { 
  popupEdit.classList.add('popup_opened');
  popupEditNameInput.placeholder = nameInfo.textContent;
  popupEditJobInput.placeholder = jobInfo.textContent;
});

function popupEditClose() {
  popupEdit.classList.remove('popup_opened');
};

popupEditCloseIcon.addEventListener('click', popupEditClose);

//загрузка данных в новую карточку
popupEditFormElement.addEventListener('submit', function popupEditSubmitHandler (evt) {
    evt.preventDefault();

    let nameInputValue = popupEditNameInput.value;
    let jobInputValue = popupEditJobInput.value;

    nameInfo.textContent = nameInputValue;
    jobInfo.textContent = jobInputValue;

    popupEditClose();
});

