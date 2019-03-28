require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {

"USE STRICT";

let sliderFirst = require('./parts/sliderFirst'),
    sliderFeedback = require('./parts/sliderFeedback'),
    showStyle = require('./parts/buttons');


sliderFirst();
sliderFeedback();
showStyle();

}); //конец DOMContentLoaded
