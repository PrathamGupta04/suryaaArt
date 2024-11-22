const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let isHovered = false;

// Pause animation on hover
slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        sliderContainer.style.animationPlayState = 'paused';
        isHovered = true;
    });

    slide.addEventListener('mouseout', () => {
        sliderContainer.style.animationPlayState = 'running';
        isHovered = false;
    });
});

const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showNextTestimonial() {
    testimonials.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
}

// Change testimonial every 4 seconds
setInterval(showNextTestimonial, 4000);

