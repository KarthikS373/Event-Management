
// For responsive change of navbar
let HomeMenu = document.querySelector(".HomeNav");
let HomeMenuicon = document.querySelector("#HomeMenuBar")

HomeMenuicon.addEventListener('click', () => {
    HomeMenuicon.classList.toggle("fa-times");
    HomeMenu.classList.toggle("active");
})


window.onscroll = () => {
    HomeMenuicon.classList.remove("fa-times");
    HomeMenu.classList.remove("active");
}

// Swiper JSON
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
  });