// Hent knapperne
const prevButton = document.querySelector('.slider__prev');
const nextButton = document.querySelector('.slider__next');

// Hent alle slider items
const slides = document.querySelectorAll('.slider__item');

// Start med at have den første slide aktiv
let currentSlide = 0;

// Funktion til at vise den aktuelle slide
function showSlide(index) {
  // Sørg for at slide-indekset er indenfor rækkevidde
  if (index < 0) {
    currentSlide = slides.length - 1; // Gå til sidste billede, hvis vi er før det første
  } else if (index >= slides.length) {
    currentSlide = 0; // Gå til første billede, hvis vi er efter det sidste
  }

  // Skift billeder ved at ændre 'active' klassen
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Fjern 'active' klassen fra alle slides
    if (i === currentSlide) {
      slide.classList.add('active'); // Tilføj 'active' klassen til den aktuelle slide
    }
  });
}

// Håndtering af klik på "previous" knap
prevButton.addEventListener('click', () => {
  currentSlide--; // Gå en slide tilbage
  showSlide(currentSlide); // Vis den nye slide
});

// Håndtering af klik på "next" knap
nextButton.addEventListener('click', () => {
  currentSlide++; // Gå en slide frem
  showSlide(currentSlide); // Vis den nye slide
});

// Start slideshowet med første billede
showSlide(currentSlide);
