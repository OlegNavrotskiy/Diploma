require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {

"USE STRICT";

let sliderFirst = require('./parts/sliderFirst'),
    sliderFeedback = require('./parts/sliderFeedback'),
    showStyle = require('./parts/buttons'),
    calc = require('./parts/calc'),
    accordion = require('./parts/accordion'),
    filter = require('./parts/filter'),
    modalGift = require('./parts/modal');


sliderFirst();
sliderFeedback();
showStyle();
calc();
accordion();
filter();
modalGift();

}); //конец DOMContentLoaded
