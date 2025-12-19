const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  speed: 800,
  // loop: true,
  loopAdditionalSlides: 1,

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  pagination: {
    el: '.custom-pagination',
    type: 'custom',

    renderCustom: function (swiper, current, total) {
      let html = '';
      for (let i = 1; i <= total; i++) {
      const isActive = i === current; 
    
      html += `
        <div class="pagination-item ${isActive ? 'active' : ''}" data-index="${i - 1}">
          <span>${String(i).padStart(2, '0')}</span>
          <div class="line"></div>
        </div>
      `;
    }
    return html;
}
  },

  observer: true,              
  observeSlideChildren: true,
});

document
  .querySelector('.custom-pagination')
  .addEventListener('click', (e) => {
    const item = e.target.closest('.pagination-item');
    if (!item) return;

    swiper.slideTo(+item.dataset.index);
  });


