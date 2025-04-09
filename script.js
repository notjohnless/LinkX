document.addEventListener('DOMContentLoaded', () => {
    // Copy functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const url = this.closest('.link-card').querySelector('.site-url').textContent;
            navigator.clipboard.writeText(url);
            
            // Visual feedback
            const originalIcon = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                this.innerHTML = originalIcon;
            }, 2000);
        });
    });

    // Set active nav link
    const currentPage = location.pathname.split("/").pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Prevent footer overlap
    const mainContent = document.querySelector('main');
    const footerHeight = document.querySelector('.universal-footer').offsetHeight;
    mainContent.style.marginBottom = `${footerHeight + 20}px`;
});