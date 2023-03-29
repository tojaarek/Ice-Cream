(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-about-open]"),
    closeModalBtn: document.querySelector("[data-modal-about-close]"),
    modal: document.querySelector("[data-modal-about]"),
    modalVideo: document.querySelector("[data-modal-about-video]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", () => {
    toggleModal();
    refs.modalVideo.pause();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
