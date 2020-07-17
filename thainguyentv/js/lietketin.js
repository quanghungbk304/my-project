
$('#slide-banner1').slick({
  rows: 1,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
});

$('#slide-banner2').slick({
  rows: 1,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
});


//scroll to top
$(window).on('scroll',function(){
  if ($(window).scrollTop() > $('#megastory').offset().top) {
    $('.totop-btn').addClass('active');
  }
  else {
    $('.totop-btn').removeClass('active');
  }
})

$('.totop-btn').on('click',function(){
  scrollToTop();
})

function scrollToTop () {
  $('html, body').animate({scrollTop:0},500, 'swing', function(){console.log('to top');})
}
