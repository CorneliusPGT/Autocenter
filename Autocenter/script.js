let popup = document.querySelector(".popup");
let aboutus = document.querySelector(".pop-about");
let arrowPop = document.querySelector(".pop-arrow");
aboutus.addEventListener("click", () => {
  popup.classList.toggle("hidden");
  arrowPop.classList.toggle("pop-down");
});

let leftArrowButton = document.querySelector(".arrow-left");
let rightArrowButton = document.querySelector(".arrow-right");

let reviewCarousel = document.querySelector(".review-carousel");

leftArrowButton.addEventListener("mouseenter", function () {
  leftArrowButton.firstChild.classList.add("hover");
});

leftArrowButton.addEventListener("mouseleave", function () {
  leftArrowButton.firstChild.classList.remove("hover");
});

rightArrowButton.addEventListener("mouseenter", function () {
  rightArrowButton.firstChild.classList.add("hover");
});

rightArrowButton.addEventListener("mouseleave", function () {
  rightArrowButton.firstChild.classList.remove("hover");
});

let cardDimensions = reviewCarousel.firstElementChild.getBoundingClientRect();
let cardWidth = cardDimensions.width;

rightArrowButton.addEventListener("click", () => {
  reviewCarousel.scrollLeft += cardWidth;
});

leftArrowButton.addEventListener("click", () => {
  reviewCarousel.scrollLeft -= cardWidth;
});

document.querySelector("form").addEventListener("submit", function (event) {
  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();
  let check = document.getElementById("check").checked;
  let hasErrors = false;
  if (name === "") {
    alert("Введите имя");
    hasErrors = true;
  }
  let phonePattern = /^\+7\d{10}$/;
  if (!phonePattern.test(number)) {
    alert("Введите номер (+7XXXXXXXXXX)");
    hasErrors = true;
  }
  if (!check) {
    alert("Обязательное поле");
    hasErrors = true;
  }
  if (hasErrors) {
    event.preventDefault();
  }
});
