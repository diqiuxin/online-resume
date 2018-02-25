(function(){
  // let view = document.getElementsByClassName('swiper')[0];
  let view = View('.swiper');
  
  let controller = {
    view: null,
    setSwiper: {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      }
    },
    init: function(view){
      this.view = view;
      window.onload = () => {
        new Swiper ('.swiper-container', this.setSwiper);
      }
    },
  }
  controller.init(view);
}).call();

