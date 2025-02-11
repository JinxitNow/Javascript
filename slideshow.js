let currentIndex = 0; // Initialiserer den aktuelle billedindeks
const slides = document.querySelectorAll('.slider__item'); // Finder alle slider-elementer
const prevButton = document.getElementById('prev'); // Finder knappen til at gå tilbage
const nextButton = document.getElementById('next'); // Finder knappen til at gå frem

function showSlide(index) {
    // Skjul alle slides
    slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});
