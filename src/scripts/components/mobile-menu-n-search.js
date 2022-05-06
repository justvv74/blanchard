const mobileMenuBtn = document.querySelectorAll('.mobile-menu'),
      mobileMenuWindow = document.querySelector('.header__mobile-menu'),
      mobileSearchBtn = document.querySelectorAll('.mobile-search'),
      mobileSearchWindow = document.querySelector('.header__mobile-search-box');

mobileMenuBtn.forEach((e) => {
  e.addEventListener('click', () => {
    mobileMenuWindow.classList.toggle('header__mobile-menu-active')
  })
})

mobileSearchBtn.forEach((e) => {
  e.addEventListener('click', () => {
    mobileSearchWindow.classList.toggle('header__mobile-search-box-active')
  })
})
