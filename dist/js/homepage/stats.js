document.addEventListener('DOMContentLoaded', () => {
    const statsItems = document.querySelectorAll('.stats__item');

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            
            obj.innerHTML = obj.dataset.suffix ? currentValue + obj.dataset.suffix : currentValue;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observerOptions = {
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const valueEl = item.querySelector('.stats__value');
                
                const targetValue = parseInt(valueEl.innerText);
     
                if (valueEl.innerText.includes('%')) {
                    valueEl.dataset.suffix = '%';
                }

                item.classList.add('is-visible');
                animateValue(valueEl, 0, targetValue, 1200);
                observer.unobserve(item);
            }
        });
    }, observerOptions);

    statsItems.forEach(item => observer.observe(item));
});
