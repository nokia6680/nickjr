function Selected(a) {
  var label = a.value;
    if (label=="enter") {
      (document.getElementById("form-enter").style.display="block") &&
      (document.getElementById("agreement").style.display="none") &&
      (document.getElementById("enter-btn").style.display="block") &&
      (document.getElementById("register-btn").style.display="none");
    } else {
      (document.getElementById("form-enter").style.display="none") &&
      (document.getElementById("agreement").style.display="block") &&
      (document.getElementById("register-btn").style.display="block") &&
      (document.getElementById("enter-btn").style.display="none");
  } if (label=="register") {
      document.getElementById("form-register").style.display="block";
  } else {
      document.getElementById("form-register").style.display="none";
  }
}

$(document).ready(function(){
  $('.content-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
});

/*Измененный скрипт перелистывания слайдов*/

$(document).ready(function() {
  $(".carousel-slider").slick({
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    arrows: true,
  });

  var timer;
    $(".slick-arrow").mouseleave(function() {
      window.clearTimeout(timer)
    }).mouseenter(function() {

      var self = $(this).mouseleave();
      timer = window.setTimeout(function() {
        self.click().mouseenter()
      }, 2)
})});
