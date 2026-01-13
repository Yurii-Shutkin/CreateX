document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.blog__category a');
    const pages = document.querySelectorAll('.blog__page');
    const cards = document.querySelectorAll('.blog-card');

    let activeCategory = 'All News';
    let activePage = '1';

    function updateCards() {
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardPage = card.dataset.page;

            const categoryMatch =
                activeCategory === 'All News' || cardCategory === activeCategory;

            const pageMatch = cardPage === activePage;

            card.style.display = categoryMatch && pageMatch ? '' : 'none';
        });
    }

    categories.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            categories.forEach(l =>
                l.parentElement.classList.remove('blog__category--active')
            );

            link.parentElement.classList.add('blog__category--active');
            activeCategory = link.textContent.trim();
            activePage = '1';

            updateCards();
        });
    });

    pages.forEach(page => {
        page.addEventListener('click', e => {
            e.preventDefault();

            pages.forEach(p => p.classList.remove('blog__page--active'));
            page.classList.add('blog__page--active');

            activePage = page.textContent.trim();
            updateCards();
        });
    });

    updateCards();
});
