// Animate stats when they come into view
const stats = document.querySelectorAll('.stat-number');
let animated = false;

function animateStats() {
    if (animated) return;
    
    stats.forEach(stat => {
        let target = 0;
        const label = stat.nextElementSibling.textContent;
        
        if (label.includes('Young')) target = 15000;
        else if (label.includes('TECHNOLOGY')) target = 50000;
        else if (label.includes('TONNES')) target = 8000;
        else if (label.includes('data')) target = 100000;
        
        let current = 0;
        const increment = target / 50;
        
        const update = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target.toLocaleString();
                clearInterval(update);
            } else {
                stat.textContent = Math.floor(current).toLocaleString();
            }
        }, 30);
    });
    
    animated = true;
}

// Trigger animation when stats are visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.impact-stats');
if (statsSection) observer.observe(statsSection);

// Mobile menu toggle
document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});
