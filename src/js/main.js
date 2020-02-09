var shape = document.getElementById('shape');
setTimeout(function () {
  shape.setAttribute('stroke-dashoffset', 10);
}, 5);


jQuery("#banner").mousemove(
    function(e){
    var offset = jQuery(this).offset();
    var xPos = e.pageX - offset.left;
    var yPos = e.pageY - offset.top;
     
    var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
    var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);
     
    jQuery(this).children('img').each(
    function(){
    var diffX = jQuery('#Parallax').width() - jQuery(this).width();
    var diffY = jQuery('#Parallax').height() - jQuery(this).height();
     
    var myX = diffX * (mouseXPercent / 1500);
     
    var myY = diffY * (mouseYPercent / 1080);
     
    var cssObj = {
    'left': myX + 'px',
    'top': myY + 'px'
    }
    jQuery(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
     
    }
    );
     
    }
    );


    var landing = {
      init: function() {
          this.scene = document.getElementById('scene');
          this.wrapperImg = document.querySelector('.wrapper-img');
          this.firstPhoto = document.querySelector('.main__photo-second');
          this.secondPhoto = document.querySelector('.main__photo-first');
          this.thirdPhoto = document.querySelector('.main__photo-third');
          this.swiperCont = document.querySelector(".swiper-container");
     
  
          // PARALLAX
          this.initParallax();
          // SWIPER
          this.initSwipper();
          // MOVE VISIBLE TEXT ABOVE MOUSE IN THE SLIDER BLOCK
          this.initMouseMove();
          // DELETE TEXT ABOVE MOUSE 
      },
      initParallax: function() {
          let parallaxInstance = new Parallax(this.scene);
      },
      initSwipper: function() {
  
          let swiper = new Swiper('.swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
              centeredSlides: true,
              // other parameters
              breakpoints: {
                  // when window width is <= 1100px    
                  1100: {
                      slidesPerView: 1.7,
                  },
                  // when window width is <= 1000px 
                  1000: {
                      slidesPerView: 1.5,
                  },
                  // when window width is <= 480px 
                  480: {
                      slidesPerView: 1.5,
                  },
                  // when window width is <= 320px 
                  320: {
                      slidesPerView: 1.3,
                  }
              },
              on: {
                  slideChangeTransitionStart: function() {
                      this.wrapperImg.classList.add('change-slide')
                  }.bind(this),
                  slideChangeTransitionEnd: function() {
                      // Swap photos
                      let firstPhotoSrc = this.firstPhoto.src;
                      this.firstPhoto.src = this.secondPhoto.src;
                      this.secondPhoto.src = this.thirdPhoto.src;
                      this.thirdPhoto.src = firstPhotoSrc;
                      this.wrapperImg.classList.remove('change-slide');
                  }.bind(this),
              }
          });
      },
      initMouseMove: function() {
          this.swiperCont.addEventListener('mousemove', function(pos) {
              this.textMouse.classList.add('show');
              if ((pos.pageX + 15 + 27) > window.innerWidth) {
                  this.textMouse.style.left = (pos.pageX - 15 - 27) + 'px';
              } else {
                  this.textMouse.style.left = (pos.pageX + 15) + 'px';
  
              }
              this.textMouse.style.top = (pos.pageY - 15) + 'px';
          }.bind(this))
          this.swiperCont.addEventListener('mouseleave', function(pos) {
              this.textMouse.classList.remove('show');
          }.bind(this))
      },
  }
  
  landing.init();