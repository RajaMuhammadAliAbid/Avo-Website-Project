// Popular Classes Section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

     // Media Query
     breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 56,
        },
        375: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        412: {
        slidesPerView: 1,
        spaceBetween: 36.2,
        },
        425: {
        slidesPerView: 1,
        spaceBetween: 22,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: -50,
        },
       1024: {
        spaceBetween: 0,
        },
      }
  });