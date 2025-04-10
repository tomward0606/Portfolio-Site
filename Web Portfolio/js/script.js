// Example of general JavaScript functionality (if needed)

// Smooth scrolling for internal links
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
