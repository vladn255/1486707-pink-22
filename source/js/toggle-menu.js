const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__logo-toggle');

const handleClickToggleMenu = () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    navToggle.classList.remove('page-header__logo-toggle--closed');
    navToggle.classList.add('page-header__logo-toggle--opened');

  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');

    navToggle.classList.remove('page-header__logo-toggle--opened');
    navToggle.classList.add('page-header__logo-toggle--closed');
  }
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', handleClickToggleMenu);
