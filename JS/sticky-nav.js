function stickyNav() {
  const $header = document.querySelector('.header');

  document.addEventListener('scroll', (e) => {
    console.log(window.scrollY)
    const test = document.querySelector('.hero__about-text ');
    if (window.scrollY > test.getBoundingClientRect().top) {
      $header.style.position = 'fixed';
    } else {
      $header.style.position = 'static';
    }
  })
}

export default stickyNav;