const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__toggle-wrapper');

const handleClickToggleMenu = () => {
  navMain.classList.toggle('main-nav--opened');
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', handleClickToggleMenu);
