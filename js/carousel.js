// Simple carousel functionality
window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrusel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.btn.prev');
    const nextButton = document.querySelector('.btn.next');

    let currentIndex = 0;
    const updatePosition = () => {
        const amount = slides[currentIndex].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * amount}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex--;
        }
        updatePosition();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex === slides.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updatePosition();
    });

    
    // make sure track is sized correctly when window resizes
    window.addEventListener('resize', updatePosition);
});