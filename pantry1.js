//desktop navigator//
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("Desktoppantryimg").style.width = "170px";
  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("Desktoppantryimg").style.width = "181px";
    document.getElementById("Desktoppantryimg").style.position = "absolute";
    document.getElementById("Desktoppantryimg").style.bottom = "12px";
  }
}

//mobile navigator//
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Math.min(window.screen.width, window.screen.height) < 768;

//let appendNumber = 600;
//let prependNumber = 1;
const swiper = new Swiper(".swiper", {
 slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 600;i += 1) {
        slides.push("" + (i + 0));
      }
      return slides;
    })(),
  },
});
