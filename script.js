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
//   }, 7000); // 10000 milliseconds = 10 seconds
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
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
});


// lustful layer animations
document.addEventListener('DOMContentLoaded', function() {
  const character = document.getElementById('character');

  let scaleFactor = 1;
  let isIncreasing = true;

  function pulseAnimation() {
      // Adjust the scale factor based on the animation direction
      scaleFactor = isIncreasing ? scaleFactor + 0.0001 : scaleFactor - 0.0001;

      // Toggle the animation direction when scale reaches certain limits
      if (scaleFactor >= 1.01 || scaleFactor <= 1.0) {
          isIncreasing = !isIncreasing;
      }

      // Apply the scale transformation
      character.style.transform = `scale(${scaleFactor})`;

      // Call the pulseAnimation function recursively
      requestAnimationFrame(pulseAnimation);
  }

  // Start the pulse animation
  pulseAnimation();
});


// gluttony layer animations
document.addEventListener("DOMContentLoaded", function() {
  const glt5 = document.querySelector("#openmouth .glt-5");

  function fadeInOnScroll() {
    const scrollPosition = window.scrollY;
    const elementPosition = glt5.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight / 1) {
      glt5.style.opacity = 1;
    } else {
      glt5.style.opacity = 0;
    }
  }

  window.addEventListener("scroll", fadeInOnScroll);
});





