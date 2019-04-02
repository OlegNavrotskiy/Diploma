function sliderFirst() {
  let slideIndex = 1,
      slides = document.querySelectorAll('.main-slider-item');

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('animated');
    slides[slideIndex - 1].classList.add('fadeInDown');
  }

  let interval = runInterval();

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function runInterval() {
    return setInterval(() => {
      plusSlides(1);
      clearInterval(interval);
      interval = runInterval();
    }, 3000);
  }
}

module.exports = sliderFirst;