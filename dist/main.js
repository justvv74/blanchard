/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/form.js":
/*!****************************************!*\
  !*** ./src/scripts/components/form.js ***!
  \****************************************/
/***/ (() => {

const form = document.querySelector('.section-feedback__form'),
  formInputs = document.querySelectorAll('.section-feedback__input'),
  inputName = document.querySelector('#input-name'),
  inputPhone = document.querySelector('#input-phone'),
  nameTitle = document.querySelector('#label-name'),
  phoneTitle = document.querySelector('#label-phone'),
  btnTitle = document.querySelector('#form-submit'),
  formMessage = document.querySelector('.form-message'),
  formMessageError = document.querySelector('.form-message_error');
let error = false;

// Валидация
function validateName(name) {
  const nameRule = /^[А-Яа-я\ ]{2,40}$/;
  return nameRule.test(String(name))
}

function validatePhone(phone) {
  const phoneRule = /^[0-9\s\-\(\)\+]{10,18}/;
  return phoneRule.test(String(phone))
}

// Функция проверки полей формы
form.onsubmit = () => {
  const nameVal = inputName.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error')
      btnTitle.textContent = 'Заполните обязательные поля'
      error = true
    } else {
      input.classList.remove('error')
      btnTitle.textContent = 'Заказать обратный звонок'
    }
  })

  if (emptyInputs.length !== 0) {
    return false
  }

  if (!validateName(nameVal)) {
    inputName.classList.add('error')
    nameTitle.textContent = 'Введите имя от 2 до 40 букв'
    error = true
    return false
  } else {
    inputName.classList.remove('error')
    nameTitle.textContent = ''
    error = false
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error')
    phoneTitle.textContent = 'Введите 11 цифр номера'
    error = true
    return false
  } else {
    inputPhone.classList.remove('error')
    phoneTitle.textContent = ''
    error = false
  }
}

// Убираем дефолтную отправку формы
form.addEventListener('submit', handleForm);
function handleForm(event) {
  event.preventDefault();
}

// Отправка на сервер
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (error != true) {
    sendForm();
  }
});

// Отправка на сервер
function sendForm() {
  const encodeName = encodeURIComponent(inputName.value),
    encodePhone = encodeURIComponent(inputPhone.value),
    formData = 'name=' + encodeName + '&phone=' + encodePhone,
    xhr = new XMLHttpRequest();

  xhr.open('POST', 'resources/mail.php', true);
  xhr.responseType = 'text';
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
  xhr.onload = () => {
    if (xhr.status != 200) {
      formMessageError.classList.add('form-message-visible')
      setTimeout(MessagePopap, 5000)
    } else {
      formMessage.classList.add('form-message-visible')
      setTimeout(MessagePopap, 5000)
      btnTitle.setAttribute('disabled', true)
      formInputs.forEach((e) => {
        e.setAttribute('disabled', true)
      })
      form.reset()
    }
  }

  xhr.onerror = () => {
    formMessageError.classList.add('form-message-visible')
    setTimeout(MessagePopap, 5000)
  };

  // Убираем сообщение об отправке
  function MessagePopap() {
    formMessage.classList.remove('form-message-visible')
    formMessageError.classList.remove('form-message-visible')
  }
}


/***/ }),

/***/ "./src/scripts/components/init.js":
/*!****************************************!*\
  !*** ./src/scripts/components/init.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // swiper in Hero
  const swiperHero = new Swiper('.section-hero__swiper', {
    effect: 'fade',
    autoplay: {
      delay: 5000
    }
  });

  // select in Gallery
  const GalleryFilterSelect = document.querySelector('.section-gallery__filter-select'),
    choices = new Choices(GalleryFilterSelect, {
      searchEnabled: false,
      itemSelectText: '',
    });


  // swiper in Gallery
  const swiperGallery = new Swiper('.section-gallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.section-gallery__button-next',
      prevEl: '.section-gallery__button-prev',
    },
    pagination: {
      el: '.section-gallery__pagination',
      type: 'fraction',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    }
  });

  $("#cat-accordion").accordion({
    active: false,
    icons: false,
    animate: 300,
    heightStyle: 'content',
    collapsible: true,
  });

  // swiper in Events
  const swiperEvent = new Swiper('.section-events__swiper', {
    slidesPerView: 1,
    spaceBetween: 34,
    navigation: {
      nextEl: '.section-events__button-next',
      prevEl: '.section-events__button-prev',
    },
    pagination: {
      el: '.section-events__pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    }
  });

  // Тултип
  $(document).ready(function () {
    $('.section-projects__tooltip').tooltipster({
      maxWidth: 270,
      animationDuration: 200,
      delay: 0,
    });
  });

  // swiper in Projects
  const swiperProjects = new Swiper('.section-projects__swiper', {
    slidesPerView: 1,
    spaceBetween: 34,
    rewind: true,
    navigation: {
      nextEl: '.section-projects__button-next',
      prevEl: '.section-projects__button-prev',
    },
    breakpoints: {
      666: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    }
  });

  // Map
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 14.23,
      zoomLock: true,

    });
    myMap.behaviors.disable(['scrollZoom', 'drag']);
    myMap.controls.remove('fullscreenControl')
      .remove('geolocationControl')
      .remove('searchControl')
      .remove('routeButtonControl')
      .remove('trafficControl')
      .remove('typeSelector')
      .remove('typeSelector')
      .remove('fullscreenControl')
      .remove('zoomControl')

    myMap.controls.add('zoomControl', {
      size: "small",
      position: {
        left: 'auto',
        right: 10,
        top: 200,
      }
    })
      .add('geolocationControl', {
        position: {
          left: 'auto',
          right: 10,
          top: 280,
        }
      });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-point.png',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });
    myMap.geoObjects.add(myPlacemark);
  }
});



/***/ }),

/***/ "./src/scripts/components/menu-tabs.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/menu-tabs.js ***!
  \*********************************************/
/***/ (() => {

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


/***/ }),

/***/ "./src/scripts/components/mobile-menu-n-search.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/mobile-menu-n-search.js ***!
  \********************************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
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
})


/***/ }),

/***/ "./src/scripts/components/modal.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/modal.js ***!
  \*****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function() {

  const modalWindow = document.querySelectorAll('.modal'),
        modalOpen = document.querySelectorAll('.section-gallery__slide'),
        modalClose = document.querySelectorAll('.modal__btn-close'),
        modalShadow = document.querySelectorAll('.modal__shadow'),
        mainWindow = document.querySelector('body');

  modalOpen.forEach((galBtn) => {
    galBtn.addEventListener('click', function(e) {
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
})


/***/ }),

/***/ "./src/scripts/components/smooth-scroll.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/smooth-scroll.js ***!
  \*************************************************/
/***/ (() => {

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
    if (mediaQuery.matches) {
      document.querySelectorAll('.section-catalog__item-btn').forEach(function (e) {
        e.setAttribute('href', '#artist-box')
      })
    document.querySelector('.section-catalog__first-col').setAttribute('id', 'artist-box')
    } else {
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


/***/ }),

/***/ "./src/scripts/components/tabs.js":
/*!****************************************!*\
  !*** ./src/scripts/components/tabs.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // Табы в каталоге
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
})


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tabs */ "./src/scripts/components/tabs.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal */ "./src/scripts/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_mobile_menu_n_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu-n-search */ "./src/scripts/components/mobile-menu-n-search.js");
/* harmony import */ var _components_mobile_menu_n_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_menu_n_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form */ "./src/scripts/components/form.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_menu_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-tabs */ "./src/scripts/components/menu-tabs.js");
/* harmony import */ var _components_menu_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_menu_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/smooth-scroll */ "./src/scripts/components/smooth-scroll.js");
/* harmony import */ var _components_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_init__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/init */ "./src/scripts/components/init.js");
/* harmony import */ var _components_init__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_init__WEBPACK_IMPORTED_MODULE_6__);










})();

/******/ })()
;
//# sourceMappingURL=main.js.map