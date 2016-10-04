var link = document.querySelector('#burger-button');
var overlay = document.querySelector('.main-menu__overlay');
var main_menu = document.querySelector('.main-menu__wrap');
var close = main_menu.querySelector('.main-menu__close-button');

link.addEventListener('click', function(event){
  event.preventDefault();
  main_menu.classList.add('main-menu__wrap--show');
  overlay.classList.add('main-menu__overlay--show');
});

close.addEventListener('click', function(event){
  event.preventDefault();
  main_menu.classList.remove('main-menu__wrap--show');
  overlay.classList.remove('main-menu__overlay--show');
});

overlay.addEventListener('click', function() {
  if (main_menu.classList.contains('main-menu__wrap--show')) {
    main_menu.classList.remove('main-menu__wrap--show');
    overlay.classList.remove('main-menu__overlay--show');
  }
});
