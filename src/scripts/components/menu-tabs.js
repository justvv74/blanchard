const resetField = document.querySelectorAll('.reset-field'),
      drpdwnMenuBtn = document.querySelectorAll('.header__bottom-btn'),
      drpdwnMenuItem = document.querySelectorAll('.header__drpdwn-link');
      // resetBtn = document.querySelector('.reset-btn');

drpdwnMenuBtn.forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    drpdwnMenuBtn.forEach(function (btn) {
      btn.classList.remove('header__bottom-btn--active')
    });
    e.currentTarget.classList.add('header__bottom-btn--active');

    document.querySelectorAll('.header__drpdwn-menu').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('header__drpdwn-menu--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('header__drpdwn-menu--active');

    if (document.querySelector(`[data-target="${path}"]`).classList.contains('header__drpdwn-menu--active')) {
      resetField.forEach(function (e) {
        e.addEventListener('click', function() {
          document.querySelector(`[data-target="${path}"]`).classList.remove('header__drpdwn-menu--active')
          drpdwnMenuBtn.forEach(function (e) {
            e.classList.remove('header__bottom-btn--active');
          })
        })
      })

      // resetBtn.addEventListener('click', function() {
      //   console.log("test")
      //   document.querySelector(`[data-target="${path}"]`).classList.remove('header__drpdwn-menu--active')
      // })
    }
  });
});

