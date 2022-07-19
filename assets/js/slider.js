

$( document ).ready(function() {
  var swiper = new Swiper(".featured-products .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button1",
      prevEl: ".swiper-button2",
    },
    breakpoints: {
      1100: {
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
     768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      360: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
    },
  });
   



  var swiper = new Swiper(".new-arrival .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button1",
      prevEl: ".swiper-button2",
    },
    breakpoints: {
      1100: {
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
     768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      360: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
    },
  });
   



  var swiper = new Swiper(".best-products .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button1",
      prevEl: ".swiper-button2",
    },
    breakpoints: {
      1100: {
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
     768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      360: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
    },
  });
   


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

});

