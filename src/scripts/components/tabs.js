document.querySelectorAll('.section-catalog__item-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.section-catalog__item-btn').forEach(function (btn) {
      btn.classList.remove('section-catalog__item-btn--active')
    });
    e.currentTarget.classList.add('section-catalog__item-btn--active');

    document.querySelectorAll('.section-catalog__art-box').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('section-catalog__art-box--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__art-box--active');
  });
});

