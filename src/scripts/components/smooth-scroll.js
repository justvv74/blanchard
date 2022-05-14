document.addEventListener('DOMContentLoaded', function () {

  // Добавляем атрибут в каталог для скрола из списка к художнику
  const mediaQuery = window.matchMedia('(max-width: 768px)')

  // Стартовое значение для мобильных
  if (mediaQuery.matches) {
    document.querySelectorAll('.section-catalog__item-btn').forEach(function (e) {
      e.setAttribute('href', '#artist-box')
    })
    document.querySelector('.section-catalog__first-col').setAttribute('id', 'artist-box')
  }

  // Добавляем/убираем, в случае смены ширины экрана
  mediaQuery.addEventListener("change", () => {
    console.log('cadasfsdaf')
    if (mediaQuery.matches) {
      console.log('true')
      document.querySelectorAll('.section-catalog__item-btn').forEach(function (e) {
        e.setAttribute('href', '#artist-box')
      })
    document.querySelector('.section-catalog__first-col').setAttribute('id', 'artist-box')
    } else {
      console.log('false')
      document.querySelectorAll('.section-catalog__item-btn').forEach(function (e) {
        e.removeAttribute('href', '#artist-box')
      })
      document.querySelector('.section-catalog__first-col').removeAttribute('id', 'artist-box')
    }
  })

  // Плавный скролл
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }
})
