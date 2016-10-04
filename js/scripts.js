(function() {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('ya-maps', {
        center: [59.936550, 30.32080],
        zoom: 16,
        controls: []
      },{
        suppressMapOpenBlock: true
      },{
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(([59.936489, 30.32080]), {

      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/icon-map-marker.svg',
        // Размеры метки.
        iconImageSize: [36, 36],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0]
      });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove("rulerControl");
    myMap.controls.remove("searchControl");
    myMap.controls.remove("trafficControl");
    myMap.controls.remove("typeSelector");
    myMap.controls.remove("zoomControl");
    myMap.controls.remove("geolocationControl");
    myMap.controls.remove("routeEditor");
  });
})();


(function() {
  var link = document.querySelector('#burger-button');
  var main_menu = document.querySelector('.main-menu__wrap');
  var close = main_menu.querySelector('.main-menu__close-button');

  link.addEventListener('click', function(event){
    event.preventDefault();
    main_menu.classList.add('main-menu__wrap--show');
  });

  close.addEventListener('click', function(event){
    event.preventDefault();
    main_menu.classList.remove('main-menu__wrap--show');
  });



  var form = document.querySelector('.contest-form');
  var form_tag = document.querySelector('form');
  var send_form = form.querySelector('.button--send-form');
  //var popup = form.querySelectorAll('.popup');
  var popup_success = form.querySelector('.popup--success');
  var popup_error = form.querySelector('.popup--error');
  var close = form.querySelectorAll('.button--popup-form');

  var user_name = form.querySelector('[name=user_name]');
  var user_surname = form.querySelector('[name=user_surname]');
  var user_phone = form.querySelectorAll('[name=user_phone]');
  var user_email = form.querySelectorAll('[name=user_email]');
  var user_review = form.querySelector('[name=user_review]');
  var storage_user_name = localStorage.getItem('user_name');
  var storage_user_surname = localStorage.getItem('user_surname');
  var storage_user_phone = localStorage.getItem('user_phone');
  var storage_user_email = localStorage.getItem('user_email');


  window.onload = function() {
    if(storage_user_surname && storage_user_name && storage_user_phone && storage_user_email) {
      user_surname.value = storage_user_surname;
      user_name.value = storage_user_name;
      user_phone.value = storage_user_phone;
      user_email.value = storage_user_email;
      user_review.focus();
    } else {
      user_surname.focus();
    }
  };

  //
  //for (var i = 0; i < close.length; i++) {
  //  form_tag.addEventListener('submit', function(event){
  //    if (!user_name.value || !user_surname.value || !user_phone[i].value || !user_email[i].value || !user_review.value) {
  //      event.preventDefault();
  //      popup_error.classList.add('popup--show');
  //    } else {
  //      popup_success.classList.add('popup--show');
  //      localStorage.setItem('user_name', user_name.value);
  //      localStorage.setItem('user_surname', user_surname.value);
  //      localStorage.setItem('user_phone', user_phone.value);
  //      localStorage.setItem('user_email', user_email.value);
  //    }
  //  });
  //};

  for (var i = 0; i < close.length; i++) {
    send_form.addEventListener('click', function(event){
      if (!user_name.value || !user_surname.value || !user_phone[i].value || !user_email[i].value || !user_review.value) {
        event.preventDefault();
        popup_error.classList.add('popup--show');
      } else {
        popup_success.classList.add('popup--show');
        localStorage.setItem('user_name', user_name.value);
        localStorage.setItem('user_surname', user_surname.value);
        localStorage.setItem('user_phone', user_phone.value);
        localStorage.setItem('user_email', user_email.value);
        }
    });
  };

  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      if (popup_error.classList.contains('popup--show') || popup_success.classList.contains('popup--show')) {
        event.preventDefault();
        popup_error.classList.remove('popup--show');
        popup_success.classList.remove('popup--show');
      }
    }
  });

  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(event) {
      event.preventDefault();
      popup_error.classList.remove('popup--show');
      popup_success.classList.remove('popup--show');
    });
  };
})();
