import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function heroAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // const $headerName = document.querySelector('.header__name');
  // const $heroText = document.querySelector('.hero__about-text');

  // gsap.to($headerName, { duration: 0.8, y:"0"});
  // gsap.from($heroText, { duration: 0.8, y:"50px", opacity: 0});

  // gsap.to('.projects__text', {
  //   scrollTrigger: {
  //     trigger: '.projects__text',
  //     start: 'top 70%',
  //     markers: false
  //   },
  //   duration: 0.8,
  //   y:"0%",
  //   stagger: 0.1
  // });

}

export default heroAnimation;