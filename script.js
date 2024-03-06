let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const currentScrollTop = window.scrollY;
    const svg = document.querySelector('.fire');
    const svgOffsetTop = svg.getBoundingClientRect().top;
    const svgOffsetBottom = svg.getBoundingClientRect().bottom;
    
    if (svgOffsetTop < window.innerHeight && svgOffsetBottom > 0) {
      svg.classList.add('draw');
    } else {
      svg.classList.remove('draw');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});