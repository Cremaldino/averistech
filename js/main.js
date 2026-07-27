/**
 * AverisTech - Main Interactive UI Script
 * Handles navbar scroll effects, mobile hamburger menu, smooth scrolling,
 * and contact form submission with Toast notifications.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL NAVBAR GLASSMORPHISM EFFECT
  const navbar = document.getElementById("navbar");
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. MOBILE HAMBURGER MENU TOGGLE
  const navToggleBtn = document.getElementById("nav-toggle");
  const navLinksList = document.getElementById("nav-links");

  if (navToggleBtn && navLinksList) {
    navToggleBtn.addEventListener("click", () => {
      const isOpen = navLinksList.classList.toggle("open");
      navToggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggleBtn.textContent = isOpen ? "✕" : "☰";
    });

    // Close mobile menu when clicking a link
    const navLinks = navLinksList.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinksList.classList.remove("open");
        navToggleBtn.setAttribute("aria-expanded", "false");
        navToggleBtn.textContent = "☰";
      });
    });
});
