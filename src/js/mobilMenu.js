(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobilMenu-open]'),
    closeModalBtn: document.querySelector('[mobilMenu-close]'),
    modal: document.querySelector('[mobilMenu]'),
    button: document.querySelector('[mobilMenu-button]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.button.classList.toggle('is-hidden');
  }
})();
