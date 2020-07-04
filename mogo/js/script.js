
//fixed menu-bar
$(window).on ('scroll',function(){

  if ($(this).scrollTop() >= ($('header').height()-1)) {
    $('.nav-bar').addClass('fixed');
    $('body').css('padding-top', $('.nav-bar').height() + 'px');
  } else {
    $('.nav-bar').removeClass('fixed');
    $('body').css('padding-top', 0);
  }
})

//add event menu__toggle
$('.menu__toggle').on('click', function(){
  var menu = $('.menu__list');
  var menuIcon = $('.menu__toggle i');
  menu.toggleClass('active');
  if (menu.hasClass('active')) {
    menuIcon.removeClass('mdi-menu');
    menuIcon.addClass('mdi-close')
    menu.slideDown();
    
  }else {
    menu.slideUp();
    menuIcon.removeClass('mdi-close')
    menuIcon.addClass('mdi-menu');
  }

})


// ------------- create the accordion function ---------------
function Accordion (selector) {
  this.selector = selector;
  var tiltleSelector = selector +' .accordion-title';
  // var contentSelector = selector + ' .accordion-content'; 
  var  titles = $(tiltleSelector);
  // var contents = $(contentSelector);
  titles.on('click', function(){

    for (let i = 0; i < titles.length; i++) {
      if (titles[i].id != this.id) {
        // console.log(this.id);
        $(titles[i]).removeClass('active');
        $(titles[i]).next().slideUp();
        $(titles[i]).children().last().removeClass('mdi-chevron-up')
        $(titles[i]).children().last().addClass('mdi-chevron-down')
      }
    }
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $(this).next().slideDown();
      $(this).children().last().addClass('mdi-chevron-up')
      $(this).children().last().removeClass('mdi-chevron-down')
    } else {
      $(this).next().slideUp();
      $(this).children().last().removeClass('mdi-chevron-up')
      $(this).children().last().addClass('mdi-chevron-down')
    }
  })
}

var wedoAccordion = new Accordion('.accordion');
// ---------------end accordion ---------------------



// hero carousel -----------------------
var owl = $('.owl-carousel');
owl.owlCarousel({
  items:1,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:6000,
  autoplayHoverPause:true,
  nav:true,
  navText: ['<i class="mdi mdi-chevron-left"></i>','<i class="mdi mdi-chevron-right"></i>']
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})


//counter number --------------------------
var isCounted = false;
$(window).on('scroll',function(){
  var sectionPostion = $('.archivement__group').offset().top - window.innerHeight;
  var scrollPosition = $(window).scrollTop();
  if ((sectionPostion<scrollPosition) && !(isCounted)){
    counterNumber('.counter-number');
    isCounted = true;
  }
})

function counterNumber(selector){
$(selector).each(function(){
  var self = $(this);
  $({Counter:0}).animate({Counter: self.text()}, {
    duration: 1000,
    easing: 'swing',
    step: function(){
      self.text(Math.ceil(this.Counter));
    }
  })
})
}


// smooth anchor link-----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//to top button--------------------------
//cách 2: dùng anchor link
$(window).on('scroll',function(){
  if ($(window).scrollTop() > $('#about').offset().top) {
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


//testimonial slide
function slide(selector){
  var slideGroup = document.querySelector(selector);
  var slides = slideGroup.querySelectorAll(".slide-item");
  var prevBtn = slideGroup.querySelector(".prev");
  var nextBtn = slideGroup.querySelector(".next");
  
  var currentPos;
  var nextPos;
  var currentSlide;
  var nextSlide;
  //tìm vị trí slide hiện tại currentSlide
  function checkCurrent() {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("active")) {
        currentPos = i;
      }
    }
  }

  //xử lý sự kiện click PREV
  prevBtn.addEventListener("click", function () {
    checkCurrent();
    currentPos == 0
      ? (nextPos = slides.length - 1)
      : (nextPos = currentPos - 1);
    currentSlide = slides[currentPos];
    nextSlide = slides[nextPos];

    currentSlide.classList.remove("left-in");
    currentSlide.classList.remove("left-out");
    currentSlide.classList.remove("right-in");
    currentSlide.classList.remove("right-out");
    currentSlide.classList.remove("active");
    currentSlide.classList.add("right-out");

    nextSlide.classList.remove("left-in");
    nextSlide.classList.remove("left-out");
    nextSlide.classList.remove("right-in");
    nextSlide.classList.remove("right-out");
    nextSlide.classList.add("active");
    nextSlide.classList.add("right-in");
  });
  nextBtn.addEventListener("click", function () {

    checkCurrent();
    currentPos == slides.length - 1
      ? (nextPos = 0)
      : (nextPos = currentPos + 1);
    currentSlide = slides[currentPos];
    nextSlide = slides[nextPos];

    currentSlide.classList.remove("left-in");
    currentSlide.classList.remove("left-out");
    currentSlide.classList.remove("right-in");
    currentSlide.classList.remove("right-out");
    currentSlide.classList.remove("active");
    currentSlide.classList.add("left-out");

    nextSlide.classList.remove("left-in");
    nextSlide.classList.remove("left-out");
    nextSlide.classList.remove("right-in");
    nextSlide.classList.remove("right-out");
    nextSlide.classList.add("active");
    nextSlide.classList.add("left-in");
  });
    };
  
    slide('.slide-1');
    slide('.slide-2');


    //scrollspy
  const sections = document.querySelectorAll(".section-link");
  const menu_links = document.querySelectorAll(".menu .menu__list a");
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  let currentActive = 0;

  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse()
      .findIndex((section) => window.scrollY >= section.offsetTop - document.querySelector('main').offsetTop ) - 1
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
