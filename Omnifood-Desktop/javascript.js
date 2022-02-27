//mobile nav

const navBtn = document.querySelector(".mobile-nav");

const headerEl = document.querySelector(".navigation");

const heroEl = document.querySelector(".section-hero");

navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-mobile");
  heroEl.classList.toggle("blur");
});

//current year footer
const year = document.querySelector(".year");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;
