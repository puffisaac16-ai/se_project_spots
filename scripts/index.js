const editProfileBtn = document.querySelector(".profile__edit-button");
const newPostBtn = document.querySelector(".profile__new-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const popUpModal = document.querySelector("#pop-up-modal");
const editCloseBtn = editProfileModal.querySelector(".modal__close-button");
const newCloseBtn = newPostModal.querySelector(".modal__close-button");
const popCloseBtn = popUpModal.querySelector(".modal__pop-up-close-button");
const profileUsername = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");
const editUsernameText = editProfileModal.querySelector("#profile-name-input");
const editDescriptionText = editProfileModal.querySelector(
  "#profile-description-input"
);
const popUpImage = popUpModal.querySelector(".modal__image");
const popUpCaption = popUpModal.querySelector(".modal__caption");
const editFormSubmit = editProfileModal.querySelector(".modal__form");
const cardImage = document.querySelector("#card-image-input");
const cardCaption = document.querySelector("#card-caption-input");
const newPostSubmit = newPostModal.querySelector(".modal__form");
const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Golden Gate bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function handleEditProfileSubmission(evt) {
  evt.preventDefault();
  profileUsername.textContent = editUsernameText.value;
  profileDescription.textContent = editDescriptionText.value;
  closeModal(editProfileModal);
}

function handleNewPostSubmission(evt) {
  evt.preventDefault();
  const currentCard = getCardElement({
    name: cardCaption.value.trim(),
    link: cardImage.value.trim(),
  });
  cardsList.prepend(currentCard);
  closeModal(newPostModal);
  evt.target.reset();
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__caption");
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });
  cardImage.addEventListener("click", function () {
    popUpCaption.textContent = data.name;
    popUpImage.src = data.link;
    popUpImage.alt = data.name;
    openModal(popUpModal);
  });
  return cardElement;
}

editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  editUsernameText.value = profileUsername.textContent;
  editDescriptionText.value = profileDescription.textContent;
});
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

editCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});
newCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});
popCloseBtn.addEventListener("click", function () {
  closeModal(popUpModal);
});

editFormSubmit.addEventListener("submit", handleEditProfileSubmission);
newPostSubmit.addEventListener("submit", handleNewPostSubmission);

initialCards.forEach(function (object) {
  const currentCard = getCardElement(object);
  cardsList.prepend(currentCard);
});
