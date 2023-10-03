import './styles/style.scss'
import Lenis from '@studio-freight/lenis';
import Swiper from 'swiper';
import 'swiper/css';

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    900: {
      slidesPerView: 1.6
    },
  }
});

// Lenis smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e)
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
};

requestAnimationFrame(raf)
