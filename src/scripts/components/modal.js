const modalWindow = document.querySelectorAll('.modal'),
      modalOpen = document.querySelectorAll('.section-gallery__slide'),
      modalClose = document.querySelectorAll('.modal__btn-close'),
      modalShadow = document.querySelectorAll('.modal__shadow'),
      mainWindow = document.querySelector('body');

modalOpen.forEach((tabsBtn) => {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;
    document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
    mainWindow.classList.add('body-noscroll')
  });
});

modalClose.forEach((modalCloseFunc) => {
  modalCloseFunc.addEventListener('click', () => {
    modalWindow.forEach((e) => {
      e.classList.remove('modal_visible')
    });
    mainWindow.classList.remove('body-noscroll')
  });
});

modalShadow.forEach((modalShadowFunc) => {
  modalShadowFunc.addEventListener('click', () => {
    modalWindow.forEach((e) => {
      e.classList.remove('modal_visible')
    });
    mainWindow.classList.remove('body-noscroll')
  });
});
