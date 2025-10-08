const editProfileBtn = document.querySelector(".profile__edit-button");
const newPostBtn = document.querySelector(".profile__new-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const editCloseBtn = editProfileModal.querySelector(".modal__close-button");
const newCloseBtn = newPostModal.querySelector(".modal__close-button");
const profileUsername = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");
const editUsernameText = editProfileModal.querySelector("#profile-name-input");
const editDescriptionText = editProfileModal.querySelector(
  "#profile-description-input"
);
const editFormSubmit = editProfileModal.querySelector(".modal__form");
const cardImage = document.querySelector("#card-image-input");
const cardCaption = document.querySelector("#card-caption-input");
const newPostSubmit = newPostModal.querySelector(".modal__form");

function handleEditProfileSubmission(evt) {
  evt.preventDefault();
  profileUsername.textContent = editUsernameText.value;
  profileDescription.textContent = editDescriptionText.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleNewPostSubmission(evt) {
  evt.preventDefault();
  console.log(cardImage.value);
  console.log(cardCaption.value);
  newPostModal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editUsernameText.value = profileUsername.textContent;
  editDescriptionText.value = profileDescription.textContent;
});
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

editCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});
newCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

editFormSubmit.addEventListener("submit", handleEditProfileSubmission);
newPostSubmit.addEventListener("submit", handleNewPostSubmission);
