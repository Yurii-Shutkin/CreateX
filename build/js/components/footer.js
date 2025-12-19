const scrollToTopButton = document.querySelector('.to-up-btn');

scrollToTopButton.addEventListener('click', function() {
  window.scroll({
    top: 0,
    behavior: 'smooth' 
  });
  console.log('click')
});
