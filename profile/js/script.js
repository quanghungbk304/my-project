$(window).on('load',function(){
  $('.loader').fadeOut();
  $('.loader-mask').delay(300).fadeOut('slow');
})

$(document).ready(function(){
  
  //show detail of project
  function showDetailProject(){
    var projectItems = $('.project__item');
    $('.project__item').on('click', function(){
      console.log(this);
      $(this).children().last().slideToggle();
    })
  }
  // showDetailProject();
  
  
  //scrollspy menu
  var ss = $("section");
  console.log(ss[1]);
  $(document).on('scroll',function(){
    var currentPosition = 0;
    //tìm phần tử đầu tiên thỏa mãn
    for (let i = ss.length-1; i >= 0; i--) {
      if((window.scrollY < ($(ss[i]).offset().top+ss[i].height)) && (windows.scrollY >= $(ss[i]).offset().top)) {
        currentPosition = i;
        console.log(i);
        break;
      }
    }
  }
  )
  
  
})