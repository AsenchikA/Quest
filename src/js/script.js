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

    $("#btn-review").click(function() {
      if ($('.not_error').length == 2){
        $("#message-success").fadeIn(600);
    }
  });

//валидация отправки отзыва

     $("#reviewValidate").validate({
       rules:{

            reviewName:{
              required: true
            },

            reviewEmail:{
              required: true,
              email: true,
            },
       },

       messages:{
            reviewName:{
              required: "",
            },

            reviewEmail:{
              required: "",
              email:"",
            },
       }
    });

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

     $("#bookingValidate").validate({
       rules:{

            bookingName:{
              required: true
            },

            bookingPhone:{
              required: true,
              digits: true
            },

            bookingEmail:{
              required: true,
              email: true,
            },
       },

       messages:{
            bookingName:{
              required: "",
            },

            bookingPhone:{
              required: "",
              digits: ""
            },

            bookingEmail:{
              required: "",
              email:"",
            },
       }
    });

});
