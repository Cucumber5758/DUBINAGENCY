document.addEventListener('DOMContentLoaded', function() {
    // Анимация при загрузке
    const loadElements = document.querySelectorAll('.animate-on-load');
    loadElements.forEach(el => {
        el.classList.add('visible');
    });

    // Анимация при скролле
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    scrollElements.forEach(el => {
        observer.observe(el);
    });
});