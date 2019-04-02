function sliderFeedback() {

  let slideIndex = 1,
      slides = document.querySelectorAll('.feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');

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
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  prev.addEventListener('click', () => {
    plusSlides(-1);
    slides[slideIndex - 1].classList.remove('animated');
    slides[slideIndex - 1].classList.remove('fadeInRight');
    slides[slideIndex - 1].classList.add('animated');
    slides[slideIndex - 1].classList.add('fadeInLeft');
    clearInterval(interval);
    interval = runInterval();

  });
  next.addEventListener('click', () => {
    plusSlides(1);
    slides[slideIndex - 1].classList.remove('animated');
    slides[slideIndex - 1].classList.remove('fadeInLeft');
    slides[slideIndex - 1].classList.add('animated');
    slides[slideIndex - 1].classList.add('fadeInRight');
    clearInterval(interval);
    interval = runInterval();
  });

  let interval = runInterval();

  function runInterval() {
    return setInterval(() => {
      plusSlides(1);
      slides[slideIndex - 1].classList.add('animated');
      slides[slideIndex - 1].classList.add('fadeInRight');
      clearInterval(interval);
      interval = runInterval();
    }, 5000);
  }

}
module.exports = sliderFeedback;
