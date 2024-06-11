let sliderimgs = document.querySelectorAll(".slider");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let currentIndex = 0;
let clearSilder;
let slideWrapper = document.querySelector(".slider-wrapper");
let circles = document.querySelectorAll(".circle");
sliderimgs[0].classList.add("active");
circles[0].classList.add("active");

next.addEventListener("click", nextFunction);
function nextFunction() {
  sliderimgs[currentIndex].style.animation = "next1 0.5s ease-in forwards";
  if (currentIndex >= sliderimgs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  sliderimgs[currentIndex].style.animation = "next2 0.5s ease-in forwards";
  addActiveToCircle();
}

previous.addEventListener("click", prevFunction);
function prevFunction() {
  sliderimgs[currentIndex].style.animation = "previous1 0.5s ease-in forwards";
  if (currentIndex == 0) {
    currentIndex = sliderimgs.length - 1;
  } else {
    currentIndex--;
  }
  sliderimgs[currentIndex].style.animation = "previous2 0.5s ease-in forwards";
  addActiveToCircle();
}
//function for auto slid
function autoslid() {
  clearSilder = setInterval(playSlider, 2000);
  function playSlider() {
    nextFunction();
    addActiveToCircle();
  }
}
autoslid();
// stop autoplay when mouseover

slideWrapper.addEventListener("mouseover", () => {
  clearInterval(clearSilder);
});

// return autoplay when mouseout event
slideWrapper.addEventListener("mouseout", () => {
  autoslid();
});
function addActiveToCircle() {
  circles.forEach((el) => {
    el.classList.remove("active");
  });
  circles[currentIndex].classList.add("active");
}

let bulletsClick = () => {
  circles.forEach((item) => {
    item.addEventListener("click", () => {
      Index = parseInt(item.dataset.text);
      if (Index > currentIndex) {
        sliderimgs[currentIndex].style.animation =
          "next1 0.5s ease-in forwards";
        currentIndex = Index;
        sliderimgs[currentIndex].style.animation =
          "next2 0.5s ease-in forwards";
      } else if (currentIndex == Index) {
        return;
      } else {
        sliderimgs[currentIndex].style.animation =
          "previous1 0.5s ease-in forwards";
        currentIndex = Index;
        sliderimgs[currentIndex].style.animation =
          "previous2 0.5s ease-in forwards";
      }

      addActiveToCircle();
    });
  });
};
bulletsClick();
