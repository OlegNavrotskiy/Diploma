function calc() {
  let size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      calcPrice = document.querySelector('.calc-price'),
      sumSize = 0, sumMat = 0, sumOpt = 0, sumPromo = 0, sum = 0;

  size.addEventListener('change', function() {
    sumSize = +this.options[this.selectedIndex].value;
    sumAll();
  });
  material.addEventListener('change', function() {
    sumMat = +this.options[this.selectedIndex].value;
    sumAll();
  }); 
  options.addEventListener('change', function() {
    sumOpt = +this.options[this.selectedIndex].value;
    sumAll();
  });
  promocode.addEventListener('change', function() {
    if(promocode.value == 'IWANTPOPART') {
      sumPromo = sum * 0.3;
      sumAll();
    } else {
      sumPromo = 0;
    }
    sumAll();
  });      

  function sumAll() {
    if (sumSize == 0 || sumMat == 0) {
      calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    } else {
      sum = sumSize + sumMat + sumOpt - sumPromo;
      animateTotal(sum);
    }
  }
  function animateTotal(number) {
    let step = 500;
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;
      calcPrice.innerHTML = step = step + Math.floor(number / 1000);
      if (timePassed > 1500) {
        clearInterval(timer);
        calcPrice.innerHTML = number;
      }
    });
  }
}
module.exports = calc;