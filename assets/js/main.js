const menuBtn = document.querySelector(".main-section .menu-btn"),
  btnClose = document.querySelector(".main-section .close"),
  navMobile = document.querySelector(".main-section .main-nav-mobile");
menuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("active");
}),
  btnClose.addEventListener("click", () => {
    navMobile.classList.toggle("active");
  });
const slider = document.querySelector(".main-section");
const arrLeft = document.querySelector(".main-section .arrow-left");
const arrRight = document.querySelector(".main-section .arrow-right");
const heading = document.querySelector(".main-section .landing h1");
const title = document.querySelector(".main-section .landing .section-title");

const arrayImage = [
  "/hero-slider-1.jpg",
  "/hero-slider-2.jpg",
  "/hero-slider-3.jpg",
];
const arrayTitle = [
  "DELIGHTFUL EXPERIENCE",
  "AMAZING & DELICIOUS",
  "TRADITIONAL & HYGIENE",
];
const arrayHeading = [
  "Flavors Inspired by the Seasons",
  "Where every flavor tells a story",
  "For the love of delicious food",
];

let id = 0;

function slide(e) {
  slider.style.backgroundImage = `url(${arrayImage[e]})`;
  title.innerText = arrayTitle[e];
  heading.innerText = arrayHeading[e];
}

arrLeft.addEventListener("click", () => {
  id = (id - 1 + arrayImage.length) % arrayImage.length;
  slide(id);
});

arrRight.addEventListener("click", () => {
  id = (id + 1) % arrayImage.length;
  slide(id);
});

setInterval(() => {
  id = (id + 1) % arrayImage.length;
  slide(id);
}, 7000);
