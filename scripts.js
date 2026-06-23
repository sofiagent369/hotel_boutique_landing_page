document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll('.testimonial-card');

  window.addEventListener('scroll', () => {
    testimonials.forEach(testimonial => {
      if (isInViewport(testimonial)) {
        testimonial.classList.add('visible');
      }
    });
  });

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});