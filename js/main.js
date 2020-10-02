$(function () {
  $('.slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true
  });
  $('.header-btn').on('click', function () {
    $('.menu').addClass('active');
  });
  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
  });
});
