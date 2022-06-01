document.addEventListener('DOMContentLoaded', function () {

  const mediaQuery = window.matchMedia('(max-width: 768px)'),
    artistsBtn = document.querySelectorAll('.section-catalog__item-btn'),
    artistsTarget = document.querySelector('.section-catalog__first-col');

  // Плавный скролл в каталоге
  function artistsScroll() {
    artistsBtn.forEach((e) => {
      e.addEventListener("click", (event) => {
        if (e.getAttribute('scroll') === null) {
          event.preventDefault();
          artistsTarget.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
      })
    })
  }

  // Стартовое значение скролла в каталоге для мобильного
  if (mediaQuery.matches) {
    artistsScroll()
  }

  // Добавляем/убираем скролл в каталоге, в случае изменения ширины экрана
  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches) {
      artistsBtn.forEach((e) => {
        e.removeAttribute('scroll', 'none')
      })
      artistsScroll()
    } else {
      artistsBtn.forEach((e) => {
        e.setAttribute('scroll', 'none')
      })
    }
  })

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
