particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: { type: "circle" },
    size: { value: 3, random: true, anim: { enable: true, speed: 20, size_min: 0.1 } },
    line_linked: { enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 3, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});



// Wait until everything loads
window.addEventListener('scroll', () => {
  document.body.classList.add('fade-in');
});



