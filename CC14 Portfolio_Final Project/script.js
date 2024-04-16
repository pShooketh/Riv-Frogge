// Smooth scrolling to sections
const links = document.querySelectorAll("header nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Portfolio grid responsiveness
const grid = document.querySelector(".portfolio-grid");
const images = document.querySelectorAll(".portfolio-image");

window.addEventListener("resize", () => {
  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;
  const maxHeight = Math.max(...images.map((img) => img.offsetHeight));

  if (gridWidth > gridHeight) {
    images.forEach((img) => {
      img.style.height = `${(gridHeight / maxHeight) * 100}%`;
    });
  } else {
    images.forEach((img) => {
      img.style.height = "auto";
    });
  }
});

// Initialize grid height on load
window.addEventListener("load", () => {
  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;
  const maxHeight = Math.max(...images.map((img) => img.offsetHeight));

  if (gridWidth > gridHeight) {
    images.forEach((img) => {
      img.style.height = `${(gridHeight / maxHeight) * 100}%`;
    });
  } else {
    images.forEach((img) => {
      img.style.height = "auto";
    });
  }
});

// Animate elements on load
const animateElements = document.querySelectorAll("[class*='fadeIn']");

animateElements.forEach((element) => {
  element.style.animationDelay = `${element.getAttribute("class").split(" ")[1].split("-")[1]}s`;
});
