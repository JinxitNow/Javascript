// Hent knapperne og billederne
const prevButton = document.querySelector('.slider__prev');
const nextButton = document.querySelector('.slider__next');
const sliderItems = document.querySelectorAll('.slider__item');
let currentIndex = 0;

// Skift billede (Next)
nextButton.addEventListener('click', () => {
  // Fjern 'active' fra det nuværende billede
  sliderItems[currentIndex].classList.remove('active');
  
  // Øg index (gå til næste billede)
  currentIndex = (currentIndex + 1) % sliderItems.length;
  
  // Tilføj 'active' til det næste billede
  sliderItems[currentIndex].classList.add('active');
  
  // Rul slideren til det næste billede
  document.querySelector('.slider__items').style.transform = `translateX(-${100 * currentIndex}%)`;
});

// Skift billede (Previous)
prevButton.addEventListener('click', () => {
  // Fjern 'active' fra det nuværende billede
  sliderItems[currentIndex].classList.remove('active');
  
  // Formindsk index (gå til forrige billede)
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  
  // Tilføj 'active' til det forrige billede
  sliderItems[currentIndex].classList.add('active');
  
  // Rul slideren til det forrige billede
  document.querySelector('.slider__items').style.transform = `translateX(-${100 * currentIndex}%)`;
});
