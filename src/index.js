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
    hoverPictures = require('./parts/hover'),
    hamburger = require('./parts/hamburger');

sliderFirst();
sliderFeedback();
showStyle();
calc();
accordion();
filter();
modalGift();
formAll();
hoverPictures();
hamburger();

}); //конец DOMContentLoaded

//polyfill for IE11
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}