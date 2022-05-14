document.addEventListener('DOMContentLoaded', function () {
  const drpdwnMenuBtn = document.querySelectorAll('.header__bottom-btn'),
    drpdwnMenuWindow = document.querySelectorAll('.header__drpdwn-menu')

  // Открываем и закрываем ниспадающее меню по клику на кнопку
  drpdwnMenuBtn.forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__drpdwn-menu");

      drpdwnMenuBtn.forEach(el => {
        if (el != btn) {
          el.classList.remove("header__bottom-btn--active");
        }
      });

      drpdwnMenuWindow.forEach(el => {
        if (el != dropdown) {
          el.classList.remove("header__drpdwn-menu--active");
        }
      })

      dropdown.classList.toggle("header__drpdwn-menu--active");
      btn.classList.toggle("header__bottom-btn--active")
    })
  })

  // Закрываем ниспадающее меню по клику на любую область
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (!target.closest(".header__bottom-btn")) {
      drpdwnMenuWindow.forEach(el => {
        el.classList.remove("header__drpdwn-menu--active");
      })
      drpdwnMenuBtn.forEach(el => {
        el.classList.remove("header__bottom-btn--active");
      });
    }
  })
})
