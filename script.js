// 1. Scroll Animation (Fade-in effect)
const faders = document.querySelectorAll(".fade-on-scroll");

const observerOptions = {
  threshold: 0.1, // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

faders.forEach((fade) => observer.observe(fade));

// 2. Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle menu on button click
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Automatically close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// 3. Navbar Active Highlight (Refined)
// This highlights the link without hiding the rest of the page
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active color from all links
    navLinks.forEach((l) => l.classList.remove("text-yellow-300"));
    // Add active color to the clicked link
    this.classList.add("text-yellow-300");
  });
});

// NOTE: Gallery JS was removed because your CSS @keyframes
// 'scrollGallery' already handles the continuous movement perfectly.
