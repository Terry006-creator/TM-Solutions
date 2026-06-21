// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
    e.target.reset();
});

// "Add to Cart" button feedback
document.querySelectorAll('.btn-small').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = '✅ Added!';
        setTimeout(() => {
            button.textContent = 'Add to Cart';
        }, 2000);
    });
});

// Dynamic greeting based on time
const heroTitle = document.querySelector('.hero h1');
const hour = new Date().getHours();
let greeting = 'Electronics for Every Generation';
if (hour < 12) greeting = 'Good Morning! 🌅 ' + greeting;
else if (hour < 18) greeting = 'Good Afternoon! ☀️ ' + greeting;
else greeting = 'Good Evening! 🌙 ' + greeting;
heroTitle.innerHTML = greeting;
