// person Layer
window.addEventListener('scroll', function() {
  var person = document.getElementById('person');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
      person.classList.add('sway');
  } else {
      person.classList.remove('sway');
  }
});

// Beginning Layer
// document.addEventListener('DOMContentLoaded', function() {
//   let overlay = document.getElementById('overlay');

//   // After 10 seconds, fade out the overlay
//   setTimeout(function() {
//     overlay.classList.add('fade-out');
//   }, 10000); // 10000 milliseconds = 10 seconds
// });


// elevator layer
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let h1 = document.querySelector('.elevator');
  let h1Top = h1.getBoundingClientRect().top;
  let scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';

  // Check if h1 is in the middle of the viewport
  if (h1Top < windowHeight / 2 && h1Top > -windowHeight / 2) {
    // Play or reverse the animation based on scroll direction
    document.querySelectorAll('.elevatorL').forEach(function(el) {
      el.style.animationName = scrollDirection === 'down' ? 'moveLeft' : 'backLeft';
      el.style.animationPlayState = 'running';
    });
    document.querySelectorAll('.elevatorR').forEach(function(el) {
      el.style.animationName = scrollDirection === 'down' ? 'moveRight' : 'backRight';
      el.style.animationPlayState = 'running';
    });
  } else {
    // Pause the animation
    document.querySelectorAll('.elevatorL').forEach(function(el) {
      el.style.animationPlayState = 'paused';
    });
    document.querySelectorAll('.elevatorR').forEach(function(el) {
      el.style.animationPlayState = 'paused';
    });
  }

  // Update last scroll position
  lastScrollTop = scrollTop;
});



// limbo layer scroll animation
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const currentScrollTop = window.scrollY;
    const svg = document.querySelector('.fire');
    const svgOffsetTop = svg.getBoundingClientRect().top;
    const svgOffsetBottom = svg.getBoundingClientRect().bottom;
    const limboLayer = document.getElementById('limboLayer');

    // Check if the SVG is in the viewport
    if (svgOffsetTop < window.innerHeight && svgOffsetBottom > 0) {
        svg.classList.add('draw');
    } else {
        svg.classList.remove('draw');
    }

    // Calculate the scale factor based on the scroll position
    const scaleFactor = 1 + (currentScrollTop / (document.body.clientHeight - window.innerHeight));

    // Apply the scale transformation with a transition effect
    limboLayer.style.transition = 'transform 0.2s ease-in-out';
    limboLayer.style.transform = `scale(${scaleFactor})`;

    // Update the last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});


// lustful layer animations
document.addEventListener('DOMContentLoaded', function() {
  const character = document.getElementById('character');

  let scaleFactor = 1;
  let isIncreasing = true;

  function pulseAnimation() {
      // Adjust the scale factor based on the animation direction
      if (isIncreasing) {
          scaleFactor += 0.002; // Adjust increment for a subtle effect
          if (scaleFactor >= 1.01) {
              isIncreasing = false;
          }
      } else {
          scaleFactor -= 0.002; // Adjust increment for a subtle effect
          if (scaleFactor <= 1) {
              isIncreasing = true;
          }
      }

      // Apply the scale transformation with a transition effect
      character.style.transition = 'transform 1.5s ease-in-out'; // Adjust duration for a slower animation
      character.style.transform = `scale(${scaleFactor})`;

      // Call the pulseAnimation function recursively
      requestAnimationFrame(pulseAnimation);
  }

  // Start the pulse animation
  pulseAnimation();
});





