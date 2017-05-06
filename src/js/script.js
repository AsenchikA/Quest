$(document).ready(function(){

  //карусель в отзывах

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    margin: 8,
    nav: true,
    navClass: ['reviews__arrows reviews__arrows--prev','reviews__arrows reviews__arrows--next'],
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

});
