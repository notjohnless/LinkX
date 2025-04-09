document.addEventListener('DOMContentLoaded', () => {
    // Click animation for all links and buttons
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function(e) {
            this.classList.add('click-animation');
            setTimeout(() => {
                this.classList.remove('click-animation');
            }, 300);
        });
    });

    // Add smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover effect for cards
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    console.log('%c✨ Made with love by LinkHub! ✨', 'color: #2563eb; font-size: 12px;');
});