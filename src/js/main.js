var shape = document.getElementById('shape');
setTimeout(function () {
    shape.setAttribute('stroke-dashoffset', 2);
}, 5);


var swipp = {
    init: function () {

        this.initSwipp();
      
    
    

    },
    initSwipp: function () {

        let swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            centeredSlides: true,
            speed: 4000,
            loopAdditionalSlides: 5,
            breakpoints: {
                1300: {
                    slidesPerView: 1.7,
                },
                850: {
                    slidesPerView: 1.1,
                },
                350: {
                    slidesPerView: 1,
                },
            }

            })
    },
}


swipp.init();

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});
parallaxInstance.friction(0.8, 0.8);
parallaxInstance.scalar(8, 8);