let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
slides[slideIndex].style.opacity = 1;
  slides[slideIndex].classList.add('active');
}
document.getElementById('botaoanterior').addEventListener('click', () => {
  slideIndex--;
  showSlides();
});
document.getElementById('botaoproximo').addEventListener('click', () => {
  slideIndex++;
  showSlides();
});
