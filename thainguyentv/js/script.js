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

  //tạo các tab
  function tab (tabId) {
    var tab = document.getElementById(tabId);
      var tittles = tab.children[0].children;
      var contents = tab.children[1].children;
      for (var i = 0; i < tittles.length; i++) {
        tittles[i].onclick = function(){
          console.log(tittles);
          console.log(this);
          var current;
          for (var id = 0; id < tittles.length; id ++ ) {
            if (tittles[id] == this) {
              current = id;
            }
          }
          console.log(current);
          for (var j = 0; j < contents.length; j++) {
            tittles[j].classList.remove('active');
            contents[j].classList.remove('show');
          }
          console.log(current);
          tittles[current].classList.add('active')
          contents[current].classList.add('show');
        } 
      } 
  }
  
  var tab1 = new tab('tv-tab');
  var tab2 = new tab('video-tab');
  
  
  $('#video-new').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  
  
  $('#video-mostview').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  
  
  $('#video-highlight').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  
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