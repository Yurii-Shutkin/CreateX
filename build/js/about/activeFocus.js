const activeElement = document.querySelector('.swiper-slide-thumb-active');
if (activeElement) {
  activeElement.scrollIntoView({
    behavior: 'smooth', // Плавная прокрутка
    block: 'nearest',   // Прокрутить минимально, чтобы элемент стал видимым
    inline: 'nearest'
  });
}
