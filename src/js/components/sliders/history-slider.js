// import Swiper JS
import Swiper from 'swiper/swiper-bundle.min.js';
// import Swiper styles
import 'swiper/swiper-bundle.css';

const $sliders = document.querySelectorAll('.js-history-slider');

if ($sliders.length) {
  $sliders.forEach(($slider) => {
    const $prev = document.querySelector('.history__button--prev') || null;
    const $next = document.querySelector('.history__button--next') || null;

    const slider = new Swiper($slider, {
      slidesPerView: 1.2,
      spaceBetween: 32,
      speed: 600,
      navigation: {
        prevEl: $prev,
        nextEl: $next,
      },
      breakpoints: {
        400: {
          slidesPerView: 1.5,
        },
        480: {
          slidesPerView: 1.8,
        },
        768: {
          slidesPerView: 2.2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  });
}
