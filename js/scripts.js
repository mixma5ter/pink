var link = document.querySelector('#burger-button');
var popup = document.querySelector('.main-menu__wrap');
var close = popup.querySelector('.main-menu__close-button');

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add('main-menu__wrap--show');
});

close.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.remove('main-menu__wrap--show');
});
