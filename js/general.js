$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('.navbar-section').addClass('black');
      }

      else {
            $('.navbar-section').removeClass('black');
      }
})

$(document).ready(function($){

      var $heightWrapper = $('.wrapper').outerHeight();

      $(window).on("scroll", function() {
            $result=$heightWrapper-$(window).scrollTop();
            if($result<850) {
                  $('.pulse-section').removeClass('dws')
                  $('.pulse-section').addClass('dws-absolute')
            }
        
            else {
                  $('.pulse-section').removeClass('dws-absolute')
                  $('.pulse-section').addClass('dws')
            }
        });
});


$(document).ready(function($){
      $("#phone-input").mask("+375-(99)-999-99-99",
      {
            placeholder:"+375-(XX)-XXX-XX-XX"
      });

});

$('.carousel').carousel()

$(document).ready(function() {

      $(".menu-icon .fa-times").hide();

      $(".menu-icon").on("click", function() {
            $(".mobile-nav").toggleClass("showing");

      });
      $(".menu-icon .fa-times").on("click", function() {

            $(".menu-icon .fa-bars").show();
            $(".menu-icon .fa-times").hide();

      });
      $(".menu-icon .fa-bars").on("click", function() {

            $(".menu-icon .fa-bars").hide();
            $(".menu-icon .fa-times").show();

      });
});
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function () {
      var widthWrapper=$('.wrapper').width();
      if(widthWrapper>=992)
      {
            var carousel = $("#carousel").waterwheelCarousel({
                  flankingItems: 2,
                });
            $('.img-block img').addClass('largDesk-slider');
      }
      if(widthWrapper<992){
            var carousel = $("#carousel").waterwheelCarousel({
                  flankingItems: 1,
                });
      }
      if(widthWrapper<772){
            var carousel = $("#carousel").waterwheelCarousel({
                  flankingItems: 0,
                });
      }
     
      $('#prev').bind('click', function () {
        carousel.prev();
        return false
      });

      $('#next').bind('click', function () {
        carousel.next();
        return false;
      });
    });
