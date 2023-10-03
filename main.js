import './styles/style.scss'
import Lenis from '@studio-freight/lenis';
import Swiper from 'swiper';
import 'swiper/css';
import MyResume from './resume/Marc_Trojanowski_Resume.pdf';
import scrollToTop from './JS/scroll-to-top';
import Rellax from 'rellax';

// Rellax
var rellax = new Rellax('.rellax');

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

// update resume url
const $resume = document.querySelector('.resume');
$resume.href = MyResume;

// Scroll to top
scrollToTop();
