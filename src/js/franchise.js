(() => {
  const refs = {
    openModalBtn: document.querySelector('[franchise-open]'),
    closeModalBtn: document.querySelector('[franchise-close]'),
    modal: document.querySelector('[franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
