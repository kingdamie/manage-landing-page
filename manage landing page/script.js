// to change the 
function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.endsWith("images/icon-hamburger.svg")) {
    image.src = "images/icon-close.svg";
  } else {
    image.src = "images/icon-hamburger.svg";
  }
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  gragCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

    // JavaScript to update the copyright year
        document.getElementById("copyrightYear").textContent = new Date().getFullYear();
