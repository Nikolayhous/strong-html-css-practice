(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      backdrop: document.querySelector('.backdrop-js'),

    };

  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.backdrop.addEventListener('click', onCloseClickBackdrop);
    window.addEventListener('keydown', onOpenEnterModal);
 
  
    function toggleModal() {
      window.addEventListener('keydown', onCloseEscModal);
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden');
    };

function onCloseEscModal(e) {
  const ESC_KEY_CODE = "Escape";
    if(e.code === ESC_KEY_CODE) {
    toggleModal()
  }
};

function onCloseClickBackdrop(e) {
  if(e.currentTarget === e.target) {
    toggleModal()
  }
}

function onOpenEnterModal(e) {
  if(e.code === 'Enter') {
    document.body.classList.toggle("modal-open");

  }
};

  })();