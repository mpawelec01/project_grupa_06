(() => {
  const refs = {
    openModalBtn: document.querySelector('[ice-cream-open]'),
    closeModalBtn: document.querySelector('[ice-cream-close]'),
    modal: document.querySelector('[ice-cream]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
