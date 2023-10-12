import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function heroAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const $headerName = document.querySelector('.header__name');
  const $heroText = document.querySelector('.hero__about-text');

  gsap.from($heroText, { duration: 0.8, y:"50px", opacity: 0});
  gsap.from($headerName, { duration: 0.8, y:"50px", opacity: 0});

  gsap.from('.projects__text', {
    scrollTrigger: {
      trigger: '.projects__text',
      start: 'top 70%',
      markers: false
    },
    duration: 0.8,
    y:"50px",
    opacity: 0,
    stagger: 0.1,
  });

  gsap.from('.projects__title', {
    scrollTrigger: {
      trigger: '.projects__title',
      start: 'top 70%',
      markers: false
    },
    duration: 0.8,
    y:"75px",
    opacity: 0,
  });

  gsap.from('.projects__title-two', {
    scrollTrigger: {
      trigger: '.projects__title-two',
      start: 'top 70%',
      markers: false
    },
    duration: 0.8,
    y:"75px",
    opacity: 0,
  });

  gsap.from('.swiper-wrapper', {
    scrollTrigger: {
      trigger: '.swiper-wrapper',
      start: 'top 70%',
      markers: false
    },
    duration: 0.8,
    y:"100px",
    opacity: 0,
  });
}

export default heroAnimation;