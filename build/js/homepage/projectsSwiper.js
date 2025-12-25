const projectSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // loop: true,

  navigation: {
    nextEl: '.projects__navigation--right',
    prevEl: '.projects__navigation--left',
  },

  breakpoints: {
    425: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    1024: {
      slidesPerView: 2.6,
      slidesPerGroup: 1
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
  },
 

  observer: true,              
  observeSlideChildren: true,
});


