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
  }

  // 3. CONTACT FORM SUBMISSION (MAILTO METHOD) & TOAST NOTIFICATION
  const contactForm = document.getElementById("contact-form");
  const toastNotification = document.getElementById("toast-notification");

  if (contactForm && toastNotification) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("form-name")?.value.trim() || "Visitatore";
      const email = document.getElementById("form-email")?.value.trim() || "";
      const subject = document.getElementById("form-subject")?.value.trim() || "Contatto dal sito web";
      const message = document.getElementById("form-message")?.value.trim() || "";

      const targetEmail = "info@averistech.it";
      const mailtoSubject = encodeURIComponent(`[AverisTech Contatto] ${subject}`);
      const mailtoBody = encodeURIComponent(
        `Nome / Azienda: ${name}\nEmail del mittente: ${email}\n\nMessaggio:\n${message}`
      );
      const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show Toast Notification
      toastNotification.classList.add("show");

      // Open email client with pre-filled message
      window.location.href = mailtoUrl;

      // Clear Form Fields
      contactForm.reset();

      // Automatically hide toast after 4.5 seconds
      setTimeout(() => {
        toastNotification.classList.remove("show");
      }, 4500);
    });
  }
});
