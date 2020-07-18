document.addEventListener('DOMContentLoaded', function(){
  
  //show ngày giờ hiện tại
  setInterval(function(){
    var today = new Date();
    var days = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
    var day = days[today.getDay()]
    var now = moment();
    var dateTime = day + now.format(': DD/MM/YYYY HH:mm:ss');;
    document.getElementById("cur-date").innerHTML = dateTime;
  },1000);

  
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
    if ($(window).scrollTop() > $('#home').offset().top) {
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
  
  
})