/*Измененный скрипт перелистывания слайдов*/

$(document).ready(function() {
  $(".carousel-slider").slick({
    infinite: true,
    slidesToShow: 16,
    slidesToScroll: 1,
    arrows: true,

    prevArrow: '<div class="prev-1"></div>',
    nextArrow: '<div class="next-1"></div>',

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 13,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
  });

  var slider = $(".carousel-slider");
  var scrollCount = null;
  var scroll= null;

  slider.on('wheel', (function(e) {
    e.preventDefault();

    scroll = setTimeout(function(){scrollCount=0;}, 200);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

  $(function(){
  $.fn.fadeInDelay = function(){
      var init = function(){
          $(this).hide().delay($(this).data('delay')).fadeIn();
        };
      return this.each(init);
    };
  }(jQuery));

  $('.carousel-slider__cartoon').fadeInDelay();

  var timer;
    $(".slick-arrow").mouseleave(function() {
      window.clearTimeout(timer)
    }).mouseenter(function() {

      var self = $(this).mouseleave();
      timer = window.setTimeout(function() {
        self.click().mouseenter()
      }, 2)
})});
/*Первый слайдер на странице INDEX*/
$(document).ready(function(){
  $('.sidebar-slider--first').slick({
    infinite: true,
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    prevArrow: '<div class="prev-2"></div>',
    nextArrow: '<div class="next-2"></div>',

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
          vertical: true,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      }
    ]
  });
});
/*Второй слайдер на странице INDEX*/
$(document).ready(function(){
  $('.sidebar-slider--second').slick({
    infinite: true,
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    prevArrow: '<div class="prev-3"></div>',
    nextArrow: '<div class="next-3"></div>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      }
    ]
  });
});
/*Слайдер на странице SHOW*/
$(document).ready(function(){
  $('.sidebar-slider--show').slick({
    infinite: true,
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    prevArrow: '<div class="prev-3"></div>',
    nextArrow: '<div class="next-3"></div>',

    responsive: [
        {
          breakpoint: 1440,
          settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        vertical: false,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      }
    ]
  });
});

/*Первый слайдер на странице Game*/
$(document).ready(function(){
  $('.game-slider--similar').slick({
    infinite: true,
    dots: false,
    arrows: true,
    vertical: false,
    verticalSwiping: false,
    slidesToShow: 2,
    prevArrow: '<div class="prev-4"></div>',
    nextArrow: '<div class="next-4"></div>',

    responsive: [
          {
            breakpoint: 1440,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            vertical: false,
            verticalSwiping: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: true,
          verticalSwiping: true
        }
      }
    ]
  });
});

/*Второй слайдер на странице Game*/
$(document).ready(function(){
  $('.game-slider--other').slick({
    infinite: true,
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    prevArrow: '<div class="prev-5"></div>',
    nextArrow: '<div class="next-5"></div>',

    responsive: [
          {
            breakpoint: 1440,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            vertical: false,
            verticalSwiping: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          vertical: true,
          verticalSwiping: true
        }
      }
    ]
  });
});
