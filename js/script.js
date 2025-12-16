const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navLinks.classList.toggle("animated");
});

// Close menu when link is clicked (mobile UX)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navLinks.classList.remove("animated");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: "smooth"
      });
    }
  });
});

//whatsapp button functionality
const whatsappBtn = document.querySelector("#wa-btn");
whatsappBtn.addEventListener("click", () => {
  window.open("https://wa.me/923233341296", "_blank");
});

//theme toggle functionality
const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeBtn.src = document.body.classList.contains("light-theme")
    ? "assets/img/moon-fill.png"
    : "assets/img/sun-fill.png";
});