/* Change navbar background when scrolling */
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
