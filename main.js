import './styles/style.scss'
import Swiper from 'swiper';
import 'swiper/css';
import MyResume from './resume/Marc_Trojanowski_Resume.pdf';
import scrollToTop from './JS/scroll-to-top';
import navMenu from './JS/nav-menu';
import Rellax from 'rellax';
import Lenis from '@studio-freight/lenis'
import heroAnimation from './JS/hero-animations';

// Rellax
var rellax = new Rellax('.rellax');

// Lenis Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


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

// update resume url
const $resume = document.querySelector('.resume');
$resume.href = MyResume;

// Scroll to top
scrollToTop();

// Nav Menu
// navMenu();

// Hero animatiomn
heroAnimation();