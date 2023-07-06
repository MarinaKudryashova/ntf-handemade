// let swiper = new Swiper(".promo-slider__mini", {
//   spaceBetween: 10,
//   slidesPerView: 1,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// let swiper2 = new Swiper(".promo-slider", {
  // spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // thumbs: {
  //   swiper: swiper,
  // },
// });
const swiper3 = new Swiper('.promo-slider', {
  slideClass: 'promo-slider__slide',
  wrapperClass: 'promo-slider__wrapper',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // slidesPerView: auto,
  // spaceBetween: 10,
  //   thumbs: {
  //   swiper: swiper,
  // },
});
