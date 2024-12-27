  // Smooth scrolling
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu toggle for mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Animate features on scroll
const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

features.forEach(feature => {
    observer.observe(feature);
});

// Button alerts
document.getElementById('hero-button').addEventListener('click', function() {
    alert('Get Started button clicked!');
});

document.getElementById('cta-button').addEventListener('click', function() {
    alert('Sign Up Now button clicked!');
});
