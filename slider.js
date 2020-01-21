//Получение данных
const prevSlide = document.getElementById("prev-slide");
const nextSlide = document.getElementById("next-slide");
const sliderImage = document.getElementById("slider-image");
const sliderHeaders = document.getElementById("slider-headers");

const dots = document.querySelectorAll(".dot");
const headers = sliderHeaders.children;

const city = document.querySelectorAll(".city");
const apartmentArea = document.querySelectorAll(".apartment-area");
const repairTime = document.querySelectorAll(".repair-time");
const repairCost = document.querySelectorAll(".repair-cost");

const sliderInfo = [
  {
    src: "img/image1.jpg",
    city: "Rostov-on-Don<br/>LCD admiral",
    apartmentArea: "81 m<sup>2</sup>",
    repairTime: "3.5 months",
    repairCost: "Upon request"
  },
  {
    src: "img/image2.jpg",
    city: "Sochi<br/>Thieves",
    apartmentArea: "105 m<sup>2</sup>",
    repairTime: "4 months",
    repairCost: "Upon request"
  },
  {
    src: "img/image3.jpg",
    city: "Rostov-on-Don<br />Patriotic",
    apartmentArea: "93 m<sup>2</sup>",
    repairTime: "3 months",
    repairCost: "Upon request"
  }
];

let currentIndex = 0;

//события
prevSlide.addEventListener("click", function(event) {
  event.preventDefault();
  onPrevSlideClick();
});
nextSlide.addEventListener("click", function(event) {
  event.preventDefault();
  onNextSlideClick();
});
for (let i = 0; i < sliderInfo.length; i++) {
  dots[i].addEventListener("click", function(event) {
    event.preventDefault();
    applySettings(i);
  });
  headers[i].addEventListener("click", function(event) {
    event.preventDefault();
    applySettings(i);
  });
}

//функции
function applySettings(slide) {
  sliderImage.src = sliderInfo[slide].src;
  city.textContent = sliderInfo[slide].city;
  apartmentArea.textContent = sliderInfo[slide].apartmentArea;
  repairTime.textContent = sliderInfo[slide].repairTime;
  repairCost.textContent = sliderInfo[slide].repairCost;

  for (let i = 0; i < sliderInfo.length; i++) {
    headers[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  headers[slide].classList.add("active");
  dots[slide].classList.add("active");
  currentIndex = slide;
}

function onPrevSlideClick() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = sliderInfo.length - 1;
  }
  applySettings(currentIndex);
}

function onNextSlideClick() {
  if (currentIndex < sliderInfo.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  applySettings(currentIndex);
}
