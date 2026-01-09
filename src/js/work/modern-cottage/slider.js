function initGallery() {
    const thumbsEl = document.querySelector('.gallery-thumbs');
    const mainEl = document.querySelector('.gallery-main');

    if (!thumbsEl || !mainEl) {
        console.warn('Слайдеры не найдены в DOM');
        return;
    }

    const thumbsSwiper = new Swiper(thumbsEl, {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper(mainEl, {
        slidesPerView: 1.1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        thumbs: {
            swiper: thumbsSwiper,
        },

        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        },
        observer: true,
        observeParents: true,
    });
    
    console.log('Swiper успешно инициализирован');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
} else {
    initGallery();
}
