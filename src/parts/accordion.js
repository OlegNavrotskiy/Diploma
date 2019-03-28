function accordion() {

  let heading = document.querySelectorAll('.accordion-heading'),
      block = document.querySelectorAll('.accordion-block');

    function closeBlock() {
      block.forEach((item) => {
        item.style.display = 'none';
      });
      heading.forEach((item) => {
        item.classList.remove('ui-accordion-header-active');
      });
    }
    closeBlock();

  for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function() {
      this.classList.toggle("ui-accordion-header-active");
      if(block[i].style.display == 'block') {
        closeBlock();
        block[i].style.display = 'none';
      } else {
        closeBlock();
        this.classList.toggle("ui-accordion-header-active");
        block[i].style.display = 'block';
      }
      
  });
}
}
module.exports = accordion;