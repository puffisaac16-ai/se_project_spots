editProfileBtn = document.querySelector(".profile__edit-button");
newPostBtn = document.querySelector(".profile__new-button");
editProfileModal = document.querySelector("#edit-profile-modal");
newPostModal = document.querySelector("#new-post-modal");
editCloseBtn = editProfileModal.querySelector(".modal__close-button");
newCloseBtn = newPostModal.querySelector(".modal__close-button");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
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
