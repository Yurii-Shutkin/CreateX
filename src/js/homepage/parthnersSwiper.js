const projectSwiper = new Swiper('.testimonials__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.testimonials__navigation--right',
    prevEl: '.testimonials__navigation--left',
  },

   breakpoints: {
    576: {
      slidesPerView: 2,
      // slidesPerGroup: 1
    },
    1200: {
      slidesPerView: 1,
      // slidesPerGroup: 1
    },
  },
 
  observer: true,              
  observeSlideChildren: true,
});
