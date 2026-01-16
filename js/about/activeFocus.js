const activeElement = document.querySelector('.swiper-slide-thumb-active');
if (activeElement) {
  activeElement.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',   
    inline: 'nearest'
  });
}
