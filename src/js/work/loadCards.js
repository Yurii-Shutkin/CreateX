document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.querySelector('.load-button');
    const step = 3; 

    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const container = document.querySelector('.tabs__panel-projects');
        const hiddenCards = container.querySelectorAll('.projects__slide:not(.is-visible)');

        const cardsArray = Array.from(hiddenCards).filter(card => {
            return window.getComputedStyle(card).display === 'none';
        });

        for (let i = 0; i < step; i++) {
            if (cardsArray[i]) {
                cardsArray[i].classList.add('is-visible');
            }
        }

        if (cardsArray.length <= step) {
            loadMoreBtn.style.display = 'none';
        }
    });
});
