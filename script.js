// Scroll Animation
const faders = document.querySelectorAll(".fade-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach((fade) => observer.observe(fade));
