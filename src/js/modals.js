const refs = {
  openBtn: document.querySelector('[data-modal-open]'),
  openBtn2: document.querySelector('.reviews__btn--submit'),
  closeBtn: document.querySelector('[data-modal-close]'),
  closeBtn2: document.querySelector('[data-modal-close2]'),
  modal: document.querySelector('[data-modal]'),
  modal2: document.querySelector('[data-modal2]'),
  overlay: document.querySelector('[data-modal-overlay]'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.overlay.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function openSecondModal() {
  refs.modal.classList.add('is-hidden');
  refs.modal2.classList.remove('is-hidden');
}

function closeSecondModal() {
  refs.modal2.classList.add('is-hidden');
  refs.overlay.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

refs.openBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);
refs.overlay.addEventListener('click', () => {
  if (!refs.modal.classList.contains('is-hidden')) {
    toggleModal();
  } else if (!refs.modal2.classList.contains('is-hidden')) {
    closeSecondModal();
  }
});
refs.closeBtn2.addEventListener('click', closeSecondModal);

refs.openBtn2.addEventListener('click', function (e) {
  e.preventDefault();
  openSecondModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    } else if (!refs.modal2.classList.contains('is-hidden')) {
      closeSecondModal();
    }
  }
});
