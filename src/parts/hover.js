function hoverPictures() {
  let sizesBlock = document.querySelectorAll('.sizes-block');
  sizesBlock.forEach((item, i) => {
  item.onmouseover = function() {
    this.children[0].src = `img/sizes-${i+1}-1.png`;
    this.children[1].style.display = 'none';
    this.children[2].style.display = 'none';
    this.children[3].style.display = 'none';
  };
  item.onmouseout = function() {
    this.children[0].src = `img/sizes-${i+1}.png`;
    this.children[1].style.display = 'block';
    this.children[2].style.display = 'block';
    this.children[3].style.display = 'block';
  };
});

}
module.exports = hoverPictures;