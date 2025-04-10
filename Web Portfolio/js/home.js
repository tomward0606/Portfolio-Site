// Random Particle Animation for Home Page
function createParticles() {
    const numParticles = 50; // Number of particles
    const particleContainer = document.querySelector('body');
  
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
  
      // Set random sizes and positions for particles
      const size = Math.random() * 5 + 2; // Particles between 2px to 7px
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const animationDelay = Math.random() * 10; // Randomize delay for animation
  
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.animationDelay = `${animationDelay}s`;
  
      particleContainer.appendChild(particle);
    }
  }
  
  // Run particle effect
  createParticles();
  

