require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {

"USE STRICT";

let sliderFirst = require('./parts/sliderFirst'),
    sliderFeedback = require('./parts/sliderFeedback'),
    showStyle = require('./parts/buttons'),
    calc = require('./parts/calc'),
    accordion = require('./parts/accordion'),
    filter = require('./parts/filter'),
    modalGift = require('./parts/modal'),
    formAll = require('./parts/form'),
    hoverPictures = require('./parts/hover');



sliderFirst();
sliderFeedback();
showStyle();
calc();
accordion();
filter();
modalGift();
formAll();
hoverPictures();

}); //конец DOMContentLoaded
