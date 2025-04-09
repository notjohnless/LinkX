document.addEventListener('DOMContentLoaded', () => {
    // Animated background
    const animateBackground = () => {
        document.querySelectorAll('.card-glare').forEach(glare => {
            glare.style.transform = `rotate(${Math.random() * 360}deg)`;
            glare.style.opacity = Math.random() * 0.3;
        });
        requestAnimationFrame(animateBackground);
    };
    animateBackground();

    // Domain redirect logic
    document.querySelectorAll('.redirect-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.href;
            
            this.classList.add('loading');
            this.querySelector('.loading-dots').innerHTML = 
                Array(3).fill('<div class="dot"></div>').join('');
            
            let count = 5;
            const timer = setInterval(() => {
                document.getElementById('countdown').textContent = count;
                if(count <= 0) {
                    clearInterval(timer);
                    window.location.href = url;
                }
                count--;
            }, 1000);
        });
    });

    // Dynamic theme switching
    const setTheme = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        if(theme) {
            document.documentElement.style.setProperty('--primary', `var(--theme-${theme})`);
        }
    };
    setTheme();

    // Stats counter animation
    const animateCounters = () => {
        document.querySelectorAll('[data-count]').forEach(counter => {
            const target = +counter.getAttribute('data-count');
            let current = 0;
            const increment = target / 100;
            
            const updateCount = () => {
                if(current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                }
            };
            updateCount();
        });
    };
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
                if(entry.target.classList.contains('stats')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stats, .site-card').forEach(el => observer.observe(el));
});

// Add touch/click ripple effects
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
});