$(document).ready(function () {
    // Start med at definere den aktive slide
    let currentSlide = 0;
  
    // Hent alle slider items og gem dem i en variabel
    const $slides = $('.slider__item');
  
    // Skjul alle slides undtagen den første
    $slides.not(':first').hide();
  
    // Funktion til at vise en specifik slide
    function showSlide(index) {
      // Sørg for at slide-indekset er indenfor rækkevidde
      if (index < 0) {
        currentSlide = $slides.length - 1; // Hvis før første slide, gå til sidste
      } else if (index >= $slides.length) {
        currentSlide = 0; // Hvis efter sidste slide, gå til første
      }
  
      // Skjul alle slides og vis kun den aktuelle
      $slides.fadeOut(); // Fade out alle slides
      $($slides[currentSlide]).fadeIn(); // Fade in den aktive slide
    }
  
    // Håndtering af klik på "previous" knap
    $('.slider__prev').click(function () {
      currentSlide--; // Gå til forrige billede
      showSlide(currentSlide);
    });
  
    // Håndtering af klik på "next" knap
    $('.slider__next').click(function () {
      currentSlide++; // Gå til næste billede
      showSlide(currentSlide);
    });
  
    // Start slideshowet med første billede
    showSlide(currentSlide);
  });
  