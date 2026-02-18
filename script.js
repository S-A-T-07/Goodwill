/* =================================
   DOM ELEMENTS
================================= */
const nav = document.querySelector("nav");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");
const faders = document.querySelectorAll(".fade-on-scroll");

/* =================================
   1. NAVBAR SCROLL EFFECT + ACTIVE LINK
================================= */
window.addEventListener("scroll", () => {
  // Navbar shadow effect
  nav.classList.toggle("shadow-xl", window.scrollY > 50);

  // Active link highlighting
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("text-yellow-300");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-yellow-300");
    }
  });
});

/* =================================
   2. SCROLL FADE-IN ANIMATION
================================= */
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

faders.forEach((fade) => observer.observe(fade));

/* =================================
   3. MOBILE MENU TOGGLE
================================= */

// Toggle menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close menu when link clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
