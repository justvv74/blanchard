document.addEventListener('DOMContentLoaded', function () {

  const mediaQuery = window.matchMedia('(max-width: 768px)'),
        artistsBtn = document.querySelectorAll('.section-catalog__item-btn'),
        artistsTarget = document.querySelector('.section-catalog__first-col')

  // Добавляем/убираем атрибут, в случае изменения ширины экрана
  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches) {
      artistsScroll ()
    }
  })

  // Стартовое значение для desktop
  if (mediaQuery.matches) {
    artistsScroll ()
  }

  function artistsScroll () {
    artistsBtn.forEach((e) => {
        e.addEventListener("click", (event) => {
          event.preventDefault();
          artistsTarget.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        })
    })
  }

  // Плавный скролл
  const anchors = document.querySelectorAll('a[href*="#"]')

  anchors.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      const blockID = e.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  })

  // Отклчение прокрутки для селекта
  const selectBtn = document.querySelector('.choices')

  selectBtn.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === selectBtn) {
      e.preventDefault();
    }
  })
})
