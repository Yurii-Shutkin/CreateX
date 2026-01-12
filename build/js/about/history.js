document.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not loaded');
        return;
    }

    const timelineSwiper = new Swiper('.history-timeline', {
        direction: 'vertical',
        slidesPerView: 'auto',
        watchSlidesProgress: true, 
        slideToClickedSlide: true, 
        freeMode: true,
    });

    const contentSwiper = new Swiper('.history-content', {
        slidesPerView: 1.2,
        spaceBetween: 40,
        speed: 600,
        grabCursor: true,
        
        thumbs: {
            swiper: timelineSwiper,
        },

        navigation: {
            nextEl: '.round-btn--right',
            prevEl: '.round-btn--left',
        },

        breakpoints: {
          425: {
            slidesPerView: 1
          }
        },

        observer: true,
        observeParents: true,
    });
});
