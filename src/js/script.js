//Google-карта

// Определяем переменную map
  var map;

// Функция initMap которая отрисует карту на странице
  function initMap() {

  // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
      // При создании объекта карты необходимо указать его свойства
      // center - определяем точку на которой карта будет центрироваться
      center: {lat: 59.945598, lng: 30.276416},
      // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
      zoom: 18,
      styles:[
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 13
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#144b53"
            },
            {
              "lightness": 14
            },
            {
              "weight": 1.4
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#08304b"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0c4152"
            },
            {
              "lightness": 5
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#0b434f"
            },
            {
              "lightness": 25
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#0b3d51"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "color": "#146474"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#021019"
            }
          ]
        }
      ]
    });

  // Создаем маркер на карте
  var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 59.945598, lng: 30.276416},

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Quest',

    // Укажем свою иконку для маркера
    icon: 'img/map-marker.png'

  });
};

$(document).ready(function(){

  //карусель в отзывах

  $("#reviews-carousel").owlCarousel({
    loop: true,
    items: 2,
    margin: 8,
    nav: true,
    navClass: ['arrow reviews__arrow reviews__arrow--prev','arrow reviews__arrow reviews__arrow--next'],
    navText: ['',''],
  });

  //плавная прокрутка страницы

  function anchorScroll(boxAnchorLink){
    $(boxAnchorLink + ' a').on('click', function(e){
      e.preventDefault();
      var attr = $(this).attr('href').substring(1);
      var currentPosition = $(document).scrollTop();
      var idPosition = $('#'+attr).offset().top;
      var scrollTime = Math.abs(currentPosition - idPosition) / 3;
      $('body,html').animate({'scrollTop':idPosition},scrollTime);
    });
  };
anchorScroll('#main-page-menu');

//появление сообщения об отправке отзыва

    $("#btn-review").click(function(e) {
      e.preventDefault();
      $("#message-success").fadeIn(600);
  });

//валидация отправки отзыва

    //  $("#reviewValidate").validate({
    //    rules:{

    //         reviewName:{
    //           required: true
    //         },

    //         reviewEmail:{
    //           required: true,
    //           email: true,
    //         },
    //    },

    //    messages:{
    //         reviewName:{
    //           required: "",
    //         },

    //         reviewEmail:{
    //           required: "",
    //           email:"",
    //         },
    //    }
    // });

  $('#experiment-big').slick({ // галерея на странице action.html
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#experiment-thumbs',
    prevArrow: '<i class="experiment-big__arrow experiment-big__arrow--prev"></i>',
    nextArrow: '<i class="experiment-big__arrow experiment-big__arrow--next"></i>',
  });
  $('#experiment-thumbs').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    asNavFor: '#experiment-big',
    dots: false,
    focusOnSelect: true
  });

//слайдер выбора времени и даты для брони

  $("#booking-carosel").owlCarousel({
    loop: true,
    items: 5,
    nav: true,
    navClass: ['arrow booking-dates__arrow booking-dates__arrow--prev','arrow booking-dates__arrow booking-dates__arrow--next'],
    navText: ['',''],
  });

// появление формы брони при выборе даты

$('.booking-dates__time-item:not(.booking-dates__time-item--busy)').click(function(){
  var time = $(this).html();
  $("#verification-time").html(time);
  var weekDay = $(this).parents(".booking-dates__item").hasClass("booking-dates__item--holiday");
  if (weekDay == true) {
    $("#verification-cost").html("3000 р.");
  }
  else {
    $("#verification-cost").html("2500 р.")
  }
  var date = $(this).parents(".booking-dates__item").children('.booking-dates__item-date').html();
  $("#verification-date").html(date);
  $('#booking-modal').show('slow');
});

$('.booking-verification__close').click(function(e){
  e.preventDefault();
  $('#booking-modal').hide('slow');
});

//валидация формы брони

    //  $("#bookingValidate").validate({
    //    rules:{

    //         bookingName:{
    //           required: true
    //         },

    //         bookingPhone:{
    //           required: true,
    //           digits: true
    //         },

    //         bookingEmail:{
    //           required: true,
    //           email: true,
    //         },
    //    },

    //    messages:{
    //         bookingName:{
    //           required: "",
    //         },

    //         bookingPhone:{
    //           required: "",
    //           digits: ""
    //         },

    //         bookingEmail:{
    //           required: "",
    //           email:"",
    //         },
    //    }
    // });

     $('#reviewEmail').change(function(){
      if ($(this).val() != '') {
        $("#labelEmail").css('display', 'none');
      }
     });

      $('#reviewName').change(function(){
        if ($(this).val() != '') {
          $("#labelName").css('display', 'none');
        }
     });
});
