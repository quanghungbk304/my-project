document.addEventListener('DOMContentLoaded', function(){
  //show ngày giờ hiện tại
  setInterval(function(){
    var today = new Date();
    var days = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
    var day = days[today.getDay()]
    var now = moment();
    var dateTime = day + now.format(' DD/MM/YYYY HH:mm');;
    document.getElementById("cur-date").innerHTML = dateTime;
  },1000);
  
  $('.cat-slider-content').bxSlider({
    stopAutoOnClick: true,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 3,
    slideWidth: 245,
    slideMargin: 20,
    controls: false,
  });
  

  
})
