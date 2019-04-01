function filter() {
  let portfolioWrapper = document.querySelector('.portfolio-wrapper'),
      portfolioMenu = document.querySelector('.portfolio-menu').children,
      portfolioNo = document.querySelector('.portfolio-no'),
      portfolioBlock = document.querySelectorAll('.portfolio-block');

  portfolioMenu[0].addEventListener('click', activeTabAll);
  portfolioMenu[1].addEventListener('click', activeTab);
  portfolioMenu[2].addEventListener('click', activeTab);
  portfolioMenu[3].addEventListener('click', activeTab);
  portfolioMenu[4].addEventListener('click', activeTab);
  portfolioMenu[5].addEventListener('click', activeTabGrand);
  portfolioMenu[6].addEventListener('click', activeTabGrand);

  function activeTab() {
    for (let i = 0; i < portfolioMenu.length; i++) {
      portfolioMenu[i].classList.remove('active');
    }
    portfolioNo.style.display = 'none';
    portfolioWrapper.innerHTML = ' ';
    for (let i = 0; i < portfolioBlock.length; i++) {
      if (portfolioBlock[i].classList == `portfolio-block all ${this.className}`) {
        portfolioWrapper.innerHTML += portfolioBlock[i].outerHTML;
      }
    }
/*     portfolioBlock.forEach((item) => {
      if (item.classList == `portfolio-block all ${this.className}`) {
        portfolioWrapper.innerHTML += item.outerHTML;
      }
    }); */
    this.classList.add('active');
  }

  function activeTabAll() {
    for (let i = 0; i < portfolioMenu.length; i++) {
      portfolioMenu[i].classList.remove('active');
    }
    portfolioNo.style.display = 'none';
    portfolioWrapper.innerHTML = ' ';
    for (let i = 0; i < portfolioBlock.length; i++) {
      portfolioWrapper.innerHTML += portfolioBlock[i].outerHTML;
    }
/*     portfolioBlock.forEach((item) => {
      portfolioWrapper.innerHTML += item.outerHTML;
    }); */
    this.classList.add('active');
  }

  function activeTabGrand() {
    for (let i = 0; i < portfolioMenu.length; i++) {
      portfolioMenu[i].classList.remove('active');
    }
    portfolioWrapper.innerHTML = ' ';
    portfolioNo.style.display = 'block';

    this.classList.add('active');
  }

}
module.exports = filter;