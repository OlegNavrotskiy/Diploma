function modalGift() {
  let giftBtn = document.querySelector('.fixed-gift'),
      consultationBtn = document.querySelectorAll('.button-consultation'),
      popupConsultation = document.querySelector('.popup-consultation'),
      designBtn = document.querySelectorAll('.button-design'),
      popupDisign = document.querySelector('.popup-design'),
      popupGift = document.querySelector('.popup-gift'),
      current = false;

//Gift      
  giftBtn.addEventListener('click', () => {
    popupGift.classList.add('animated');
    popupGift.classList.add('fadeIn');
    popupGift.style.display = 'block';
    giftBtn.style.display = 'none';
    current = true;
  });

  popupGift.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className === 'popup-gift animated fadeIn' ||
     target.className === 'popup-close') {
    popupGift.style.display = 'none';
    }
  });
  
//Consultation
  consultationBtn.forEach((item) => {
    item.addEventListener('click', () => {
      popupConsultation.classList.add('animated');
      popupConsultation.classList.add('fadeIn');
      popupConsultation.style.display = 'block';
      current = true;
    });
  });

  popupConsultation.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className === 'popup-consultation animated fadeIn' ||
     target.className === 'popup-close') {
      popupConsultation.style.display = 'none';
    }
  });

//Design
  designBtn.forEach((item) => {
    item.addEventListener('click', () => {
      popupDisign.classList.add('animated');
      popupDisign.classList.add('fadeIn');
      popupDisign.style.display = 'block';
      current = true;
    });
  });
  
  popupDisign.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className === 'popup-design animated fadeIn' ||
     target.className === 'popup-close') {
      popupDisign.style.display = 'none';
    }
  });

//60s
  function popupSixty() {
    if (popupConsultation.style.display !== 'block' &&
     popupGift.style.display !== 'block' &&
     popupDisign.style.display !== 'block') {
      popupConsultation.classList.add('animated');
      popupConsultation.classList.add('fadeIn');
      popupConsultation.style.display = 'block';

     }
  }
  setTimeout(popupSixty, 60000);

// GiftForDon'tClickButtonAndScrollFullPage

  window.onscroll = function() {
    docScroll();
  };

  function docScroll() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
    documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (windowScroll / documentHeight) * 100;

    if (scrolled  == 100 && current == false) {
      popupGift.classList.add('animated');
      popupGift.classList.add('fadeIn');
      popupGift.style.display = 'block';
      giftBtn.style.display = 'none';
    }
  }
}
module.exports = modalGift;