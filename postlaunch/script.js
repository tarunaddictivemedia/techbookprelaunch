"use strict";

// forEach FIX for IE 
(function () {
  if (typeof NodeList.prototype.forEach === "function") return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

// Slider prototype object
function Slider(element, imageSelector) {
  // Image selector class or default
  this.imageClass = imageSelector || '.slider__image';

  // Array with images in slider
  this.images = element.querySelectorAll(this.imageClass);

  // Previous image
  this.previous = function () {
    this.images.forEach(function (elem, index) {
      let Index = parseInt(elem.getAttribute('data-index')), IN, addClass;
      if (Index < 5) { IN = Index + 1; } 
      else { IN = 1; }
      addClass = 'image--' + IN;
      elem.className = elem.className.replace(/image--[0-9]/, '');
      elem.setAttribute('data-index', IN);
      elem.classList.add(addClass);

      if (addClass == 'image--1') { elem.classList.add('active'); } 
      else { elem.classList.remove('active'); }
    });
  };

  // Next image
  this.next = function () {
    this.images.forEach(function (elem, index) {
      let Index = parseInt(elem.getAttribute('data-index')), IN, addClass;
      if (Index > 1) { IN = Index - 1; } 
      else { IN = 5; }
      addClass = 'image--' + IN;
      elem.className = elem.className.replace(/image--[0-9]/, '');
      elem.setAttribute('data-index', IN);
      elem.classList.add(addClass);

      if (addClass == 'image--1') { elem.classList.add('active'); } 
      else { elem.classList.remove('active'); }
    });
  };
}

const d = document,
      slider = d.getElementById('slider'),    // Slider container
      next = d.getElementById('next'),        // Next slide button 
      prev = d.getElementById('prev');        // Previous slide button
let isWheel;                                  // Global var for setTimeout

// Creating carousel
let carousel = new Slider(slider);

// Autoplay setup
let autoplayInterval;
const autoplaySpeed = 3000; // 3000ms = 3 seconds

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    carousel.next();
  }, autoplaySpeed);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Button event listeners
next.addEventListener('click', function (e) { 
  stopAutoplay();
  carousel.next(); 
  startAutoplay();
}, true);

prev.addEventListener('click', function (e) { 
  stopAutoplay();
  carousel.previous(); 
  startAutoplay();
}, true);

// Adding sliding when scroll
slider.addEventListener('wheel', function (e) {
  e.preventDefault();

  stopAutoplay();

  if (e.deltaY > 0) { 
    carousel.next(); 
  } else { 
    carousel.previous(); 
  }

  startAutoplay();

  // Getting alt text (name) from .active slide
  let active = this.getElementsByClassName('active'),
      name = active[0].getAttribute('alt');

  // Stopping latest timeout
  window.clearTimeout(isWheel);

  // Creating new timeout for current active slide
  // isWheel = window.setTimeout(function(e) { alert(name); }, 1500);
});

// Adding swipe events to inner slider container
let sliderInner = slider.querySelector('.slider__inner');
swipedetect(sliderInner, function (swipedir) {
  stopAutoplay();

  if (swipedir == 'left') { 
    carousel.previous(); 
  }
  if (swipedir == 'right') { 
    carousel.next(); 
  }

  startAutoplay();
});

// Library for swipe detect
// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback) {
  let touchsurface = el,
      swipedir,
      startX,
      startY,
      distX,
      distY,
      dist,
      threshold = 150, // required min distance traveled to be considered swipe
      restraint = 100, // maximum distance allowed at the same time in perpendicular direction
      allowedTime = 300, // maximum time allowed to travel that distance
      elapsedTime,
      startTime,
      handleswipe = callback || function (swipedir) { };

  touchsurface.addEventListener('touchstart', function (e) {
    let touchobj = e.changedTouches[0];
    swipedir = 'none';
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // record time when finger first makes contact with surface
    e.preventDefault();
  }, false);

  touchsurface.addEventListener('touchmove', function (e) {
    e.preventDefault(); // prevent scrolling when inside DIV
  }, false);

  touchsurface.addEventListener('touchend', function (e) {
    let touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
    distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime; // get time elapsed
    if (elapsedTime <= allowedTime) { // first condition for swipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
        swipedir = (distX < 0) ? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
        swipedir = (distY < 0) ? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
      }
    }
    handleswipe(swipedir);
    e.preventDefault();
  }, false);
}

// Start autoplay when the page loads
startAutoplay();
