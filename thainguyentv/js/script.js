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

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});