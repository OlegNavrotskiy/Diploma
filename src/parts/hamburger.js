function hamburger() {
  let burgerBtn = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu');
  burgerBtn.addEventListener('click', () => {
    if (screen.width <= 768) {
      burgerMenu.classList.toggle("show");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      burgerMenu.classList.remove("show");
    }
});
}
module.exports = hamburger;