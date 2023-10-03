function scrollToTop() {
  const $arrowUp = document.querySelector('.footer__scroll-to');
  $arrowUp.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
}

export default scrollToTop;