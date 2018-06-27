var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header__wrapper');

pageHeader.classList.remove('page-header__wrapper--open');
pageHeader.classList.add('page-header__wrapper--closed');
navMain.classList.remove('main-nav--open');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    pageHeader.classList.remove('page-header__wrapper--closed');
    pageHeader.classList.add('page-header__wrapper--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    pageHeader.classList.add('page-header__wrapper--closed');
    pageHeader.classList.remove('page-header__wrapper--open');
  }
})
