function showStyle() {

  let btn = document.querySelector('.button-styles'),
      hiddenBlock = document.querySelectorAll('.styles-2');

  btn.addEventListener('click', () => {
    
    hiddenBlock.forEach((item) => {
      item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
      btn.style.display = 'none';
    });
    
  });
}
module.exports = showStyle;