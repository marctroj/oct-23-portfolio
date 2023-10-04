import gsap from "gsap";

function navMenu() {

  const c = {
    dom: {
      hamburger: 'header__lines',
      header__nav: 'header__nav',
      header_list_item: 'header__list-item',
      header_link: 'header__link',
    },
    cls: {
      nav_open: 'nav-open',
      overflow_body: 'overflow-body',
    }
  }

  // Globals
  const $hamburger = document.querySelector(`.${c.dom.hamburger}`);
  const $headerNav = document.querySelector(`.${c.dom.header__nav}`);
  const $headerItem = document.querySelectorAll(`.${c.dom.header_list_item}`);

  $hamburger.addEventListener('click', () => {
    if (!$headerNav.classList.contains(c.cls.nav_open)) {
      setTimeout(() => {
        gsap.to(`.${c.dom.header_link}`, { duration: 0.2, y:"0%", stagger: 0.1});
      }, 300)
      $headerNav.classList.add(c.cls.nav_open);
      document.body.classList.add(c.cls.overflow_body);
    } else {
      gsap.to(`.${c.dom.header_link}`, { duration: 0.2, y:"100%", stagger: 0.1});
      setTimeout(() => {
        $headerNav.classList.remove(c.cls.nav_open);
        document.body.classList.remove(c.cls.overflow_body);
      }, 900)
    }
  })

  $headerItem.forEach((item) => {
    item.addEventListener('click', () => {
      $headerNav.classList.remove(c.cls.nav_open);
      document.body.classList.remove(c.cls.overflow_body);
    })
  })
}

export default navMenu;