window.addEventListener('load', function(){



class tab {
  constructor (tabId) {
      
      var tab = document.getElementById(tabId);
      var tittles = tab.children[0].children;
      var contents = tab.children[1].children;
      for (let i = 0; i < tittles.length; i++) {
          tittles[i].onclick = ()=>{
              for (let j = 0; j < contents.length; j++) {
                  tittles[j].classList.remove('active');
                  contents[j].classList.remove('show');
              }
              tittles[i].classList.add('active')
              contents[i].classList.add('show');
          } 
          
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


  
})