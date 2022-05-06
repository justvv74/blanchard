document.addEventListener('DOMContentLoaded', function () {
  // swiper in Hero
  const swiperHero = new Swiper('.section-hero__swiper', {
    effect: 'fade',
    // autoplay: {
    //   delay: 5000
    // }
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
    loop: true,
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
  $(document).ready(function() {
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
  function init(){
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
