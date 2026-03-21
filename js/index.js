// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNav = document.getElementById("mobileNav");

  mobileMenu.classList.toggle("active");
  mobileNav.classList.toggle("active");

  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileNav.classList.contains("active")
    ? "hidden"
    : "auto";
}

function closeMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNav = document.getElementById("mobileNav");

  mobileMenu.classList.remove("active");
  mobileNav.classList.remove("active");
  document.body.style.overflow = "auto";
}
