const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__toggle-wrapper');

const handleClickToggleMenu = () => {
  navMain.classList.toggle('main-nav--opened');
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', handleClickToggleMenu);

ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [59.938716, 30.323047],
    zoom: 17,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  var placemark = new ymaps.Placemark([59.938635, 30.323118], {},
    {
      iconLayout: 'default#image',
      iconImageHref: './img/icons/map-marker.svg',
      iconImageSize: [36, 36],
      iconImageOffset: [-18, -18]
    });

  map.geoObjects.add(placemark);
};
