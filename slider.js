//Получение данных
const prevSlide = document.getElementById("prev-slide");
const nextSlide = document.getElementById("next-slide");
const sliderImages = document.getElementById("slider-images");
const sliderHeaders = document.getElementById("slider-headers");

const dots = document.querySelectorAll(".dot");
const imgs = sliderImages.children;
const headers = sliderHeaders.children;

const city = document.querySelectorAll(".city");
const apartmentArea = document.querySelectorAll(".apartment-area");
const repairTime = document.querySelectorAll(".repair-time");
const repairCost = document.querySelectorAll(".repair-cost");

//Установки при загрузке

let currentIndexSrc = 0;

imgs[currentIndexSrc].classList.remove("hide");
city[currentIndexSrc].classList.remove("hide");
apartmentArea[currentIndexSrc].classList.remove("hide");
repairTime[currentIndexSrc].classList.remove("hide");
repairCost[currentIndexSrc].classList.remove("hide");
headers[currentIndexSrc].classList.add("active");
dots[currentIndexSrc].classList.add("active");

//события
prevSlide.addEventListener("click", onPrevSlideClick);
nextSlide.addEventListener("click", onNextSlideClick);

//dots.addEventListener("click", changeSlide);
//headers.addEventListener("click", changeSlide);

//функции
function onPrevSlideClick() {
  event.preventDefault();

  eraseSlides()

  if (currentIndexSrc > 0) {
    currentIndexSrc--;
  } else {
    currentIndexSrc = imgs.length - 1;
  }
  setSlides()
}

function onNextSlideClick() {
  event.preventDefault();

  eraseSlides()

  if (currentIndexSrc < imgs.length - 1) {
    currentIndexSrc++;
  } else {
    currentIndexSrc = 0;
  }
  setSlides()
}

/*function changeSlide() {
  event.preventDefault();
}*/

function eraseSlides() {
  imgs[currentIndexSrc].classList.add("hide");
  headers[currentIndexSrc].classList.remove("active");
  dots[currentIndexSrc].classList.remove("active");
  city[currentIndexSrc].classList.add("hide");
  apartmentArea[currentIndexSrc].classList.add("hide");
  repairTime[currentIndexSrc].classList.add("hide");
  repairCost[currentIndexSrc].classList.add("hide");
}

function setSlides() {
  imgs[currentIndexSrc].classList.remove("hide");
  headers[currentIndexSrc].classList.add("active");
  dots[currentIndexSrc].classList.add("active");
  city[currentIndexSrc].classList.remove("hide");
  apartmentArea[currentIndexSrc].classList.remove("hide");
  repairTime[currentIndexSrc].classList.remove("hide");
  repairCost[currentIndexSrc].classList.remove("hide");
}
