function modalGift() {
  let giftBtn = document.querySelector('.fixed-gift'),
      consultationBtn = document.querySelectorAll('.button-consultation'),
      popupConsultation = document.querySelector('.popup-consultation'),
      designBtn = document.querySelectorAll('.button-design'),
      popupDisign = document.querySelector('.popup-design'),
      popupGift = document.querySelector('.popup-gift');

//Gift      
  giftBtn.addEventListener('click', () => {
    popupGift.classList.add('animated', 'fadeIn');
    popupGift.style.display = 'block';
    giftBtn.style.display = 'none';
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
      popupConsultation.classList.add('animated', 'fadeIn');
      popupConsultation.style.display = 'block';
      
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
      popupDisign.classList.add('animated', 'fadeIn');
      popupDisign.style.display = 'block';
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
      popupConsultation.style.display = 'block';
     }
  }
  setTimeout(popupSixty, 60000);

//scrollBottom
  function scrollBottom() {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if (document.documentElement.scrollTop >= scrollHeight) {
      alert( 'Высота с учетом прокрутки: ' + scrollHeight );
    }
  }
  scrollBottom();




}
module.exports = modalGift;