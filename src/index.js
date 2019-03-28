require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {

"USE STRICT";

let sliderFirst = require('./parts/sliderFirst'),
    sliderFeedback = require('./parts/sliderFeedback'),
    showStyle = require('./parts/buttons'),
    calc = require('./parts/calc'),
    accordion = require('./parts/accordion');


sliderFirst();
sliderFeedback();
showStyle();
calc();
accordion();

}); //конец DOMContentLoaded
