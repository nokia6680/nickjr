var menuOpener = document.querySelector('.header-nav__toggle');
var menu = document.querySelector('.nav-list');
var menuLayer = document.querySelector('body');

var menuText = document.querySelector(".header-tag__list");
var menuOpen = document.querySelector(".header-tag__btn");

menuOpener.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuOpener.classList.toggle('open');
  menuLayer.classList.toggle('no-scroll');

  return false;
});

menuOpen.addEventListener('click', function () {
  menuText.classList.toggle('active');

  return false;
});

var filterOpener = document.querySelector('.filter__expand');
var filter = document.querySelector('.filter__list');

filterOpener.addEventListener('click', function() {
  filter.classList.toggle('active');

  return false;
});


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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 375,
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
          arrows: true,
          lazyLoad: 'ondemand'
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

  $(window).resize(function() {
    if ( $(window).width() > 1023 ) {
      var timer;
        $(".slick-arrow").mouseleave(function() {
          window.clearTimeout(timer)
        }).mouseenter(function() {

          var self = $(this).mouseleave();
          timer = window.setTimeout(function() {
            self.click().mouseenter()
          }, 2)
    });
    }
  });
});

/*Первый слайдер на странице Game*/
$(document).ready(function(){
  $('.similar__slider').slick({
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
            breakpoint: 1600,
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
          slidesToShow: 2,
          slidesPerRow: 2,
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
            breakpoint: 1600,
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
          slidesToShow: 2,
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

// Select
$('.select--first').each(function() {
  // Variables
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;

  $this.hide();
  // Wrap all in select box
  $this.wrap('<div class="select"></div>');
  // Style box
  $('<div>', {
    class: 'select__gap',
    text: 'Сезон'
  }).insertAfter($this);

  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');
  // Add ul list
  $('<ul>', {
    class: 'select__list'
  }).insertAfter(selectGap);

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for (var i = 0; i < selectOptionLength; i++) {
    $('<li>', {
        class: 'select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }
  // Find all items
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function() {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(dur);

      selectItem.on('click', function() {
        var chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());

        selectList.slideUp(dur);
        selectGap.removeClass('on');
      });

    } else {
      $(this).removeClass('on');
      selectList.slideUp(dur);
    }
  });
});

// Select
$('.select--second').each(function() {
  // Variables
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;

  $this.hide();
  // Wrap all in select box
  $this.wrap('<div class="select"></div>');
  // Style box
  $('<div>', {
    class: 'select__gap',
    text: 'Серия'
  }).insertAfter($this);

  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');
  // Add ul list
  $('<ul>', {
    class: 'select__list'
  }).insertAfter(selectGap);

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for (var i = 0; i < selectOptionLength; i++) {
    $('<li>', {
        class: 'select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }
  // Find all items
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function() {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(dur);

      selectItem.on('click', function() {
        var chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());

        selectList.slideUp(dur);
        selectGap.removeClass('on');
      });

    } else {
      $(this).removeClass('on');
      selectList.slideUp(dur);
    }
  });
});

var moreExpand = document.querySelector('.text__expand');
var more = document.querySelector('.text__description');

moreExpand.addEventListener('click', function () {
  more.classList.toggle('active');
  return false;
});

// Смена текста кнопки развернуть-свернуть
function toggleText(button_id)  {
   var text = document.getElementById('btn-expand').firstChild;
   text.data = text.data == "Читать далее" ? "Свернуть" : "Читать далее";
};
