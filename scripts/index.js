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
  closeModal(editProfileModal);
}

function handleNewPostSubmission(evt) {
  evt.preventDefault();
  console.log(cardImage.value);
  console.log(cardCaption.value);
  closeModal(newPostModal);
  evt.target.reset();
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
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

editFormSubmit.addEventListener("submit", handleEditProfileSubmission);
newPostSubmit.addEventListener("submit", handleNewPostSubmission);
