// arrow left
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

// alle bilder
const imgs = document.querySelectorAll(".slider-img");

function changePic(e) {
  let newIdx;
  imgs.forEach((img, idx) => {
    if (img.classList.contains("slider-img-show")) {
      img.classList.remove("slider-img-show");

      if (e.target.classList.contains("arrow-right")) {
        newIdx = idx + 1;
      } else {
        newIdx = idx - 1;
      }
    }
  });
  if (newIdx >= imgs.length) {
    newIdx = 0;
  } else if (newIdx <= 0) {
    newIdx = imgs.length - 1;
  }

  imgs[newIdx].classList.add("slider-img-show");
}

arrLeft.addEventListener("click", (e) => {
  changePic(e);
});
arrRight.addEventListener("click", (e) => {
  changePic(e);
});
